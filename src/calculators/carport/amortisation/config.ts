/**
 * Solar-Carport Amortisationsrechner — Configuration
 */
import type { CalculatorConfig } from '../../../types/calculator';
import { CO2_KG_PER_KWH, PV_LIFETIME_YEARS, PERFORMANCE_RATIO } from '../../../shared/constants/physics';
import { EINSPEISEVERGUETUNG } from '../../../shared/constants/tariffs';
import {
    PLZ_INPUT,
    STROMPREIS_INPUT,
    JAHRESVERBRAUCH_INPUT,
    PURCHASE_PRICE_INPUT,
    STROM_STEP_INPUT
} from '../../../shared/inputs/common';
import { KWP_LARGE_INPUT, AZIMUTH_INPUT, TILT_INPUT } from '../../../shared/inputs/solar';
import { getTiltFactor, getSimultaneousFactor } from '../ertrag/config';

const AZIMUTH_FACTOR: Record<number, number> = {
    0: 0.60,
    45: 0.72,
    90: 0.82,
    135: 0.95,
    180: 1.00,
    225: 0.95,
    270: 0.82,
    315: 0.72,
};
const KNOWN_AZIMUTHS = new Set([0, 45, 90, 135, 180, 225, 270, 315]);

export const CarportAmortisationConfig: CalculatorConfig = {
    slug: 'amortisation',
    category: 'carport',
    breadcrumbLabel: 'Amortisation',
    title: 'Solar-Carport Amortisationsrechner',
    description: 'Berechnen Sie exakt, nach wie vielen Jahren sich Ihr Solar-Carport durch gesparte Stromkosten rentiert.',
    showIrradianceChart: true,

    inputs: [
        PLZ_INPUT,
        { ...KWP_LARGE_INPUT, label: 'Carport-Leistung (kWp)', default: 5 },
        AZIMUTH_INPUT,
        { ...TILT_INPUT, default: 10, tooltip: 'Neigung des Carport-Dachs. Meist flach (5-15°).' },
        JAHRESVERBRAUCH_INPUT,
        STROMPREIS_INPUT,
        STROM_STEP_INPUT,
        { ...PURCHASE_PRICE_INPUT, default: 12000, label: 'Investitionskosten (Netto)' },
    ],

    outputs: [
        { id: 'amortisation', label: 'Amortisationszeit', unit: '', format: 'years', highlight: true },
        { id: 'gesamtgewinn', label: 'Gewinn (25 Jahre)', unit: '', format: 'currency', highlight: true },
        { id: 'roi', label: 'Rendite (ROI)', unit: '%', format: 'number', highlight: false },
        { id: 'ersparnis_jahr_1', label: 'Ersparnis im 1. Jahr', unit: '', format: 'currency', highlight: false },
        { id: 'strompreis_nach_25', label: 'Strompreis in 25 J.', unit: 'ct/kWh', format: 'number', highlight: false },
        { id: 'co2_lifetime', label: 'CO₂ gespart (25 J.)', unit: 'kg', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Lebensdauer', value: `${PV_LIFETIME_YEARS} Jahre`, source: 'Branchenüblich' },
        { label: 'Einspeiseverg.', value: `${(EINSPEISEVERGUETUNG.below10kwp * 100).toFixed(2)} ct/kWh`, source: 'EEG 2024' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const tilt = Number(inputs.tilt);
        const jahresverbrauch = Math.max(0, Number(inputs.jahresverbrauch));
        const initialPrice = Math.max(0, Number(inputs.strompreis));
        const purchasePrice = Math.max(0, Number(inputs.purchase_price));
        const priceIncrease = Math.max(0, Number(inputs.strompreissteigerung || 3)) / 100;

        const aziFactor = KNOWN_AZIMUTHS.has(azimuth) ? AZIMUTH_FACTOR[azimuth] : 1.0;
        const tFactor = getTiltFactor(tilt);

        // Yield
        const annualYield = kwp * irradiance * PERFORMANCE_RATIO * aziFactor * tFactor;

        // Self-consumption
        const sfactor = getSimultaneousFactor(jahresverbrauch, annualYield);
        const eigenverbrauch_kwh = Math.min(annualYield * sfactor, jahresverbrauch);
        const einspeisung_kwh = Math.max(0, annualYield - eigenverbrauch_kwh);

        // Step 3: Financials over 25 years
        const vergutung_satz = kwp <= 10 ? EINSPEISEVERGUETUNG.below10kwp : EINSPEISEVERGUETUNG.below40kwp;
        const vergutung_jahr = einspeisung_kwh * vergutung_satz;

        let cumulativeRevenue = 0;
        let amortisationYears = Infinity;
        let currentPrice = initialPrice;
        let ersparnis_jahr_1 = 0;

        for (let year = 1; year <= PV_LIFETIME_YEARS; year++) {
            const annualSavings = (eigenverbrauch_kwh * currentPrice) + vergutung_jahr;
            if (year === 1) ersparnis_jahr_1 = annualSavings;

            cumulativeRevenue += annualSavings;

            if (amortisationYears === Infinity && cumulativeRevenue >= purchasePrice) {
                const neededThisYear = purchasePrice - (cumulativeRevenue - annualSavings);
                const fractionOfYear = neededThisYear / annualSavings;
                amortisationYears = (year - 1) + fractionOfYear;
            }

            currentPrice *= (1 + priceIncrease);
        }

        const gesamtgewinn = cumulativeRevenue - purchasePrice;
        const roi = purchasePrice > 0 ? (gesamtgewinn / purchasePrice) * 100 : 0;
        const co2_lifetime = annualYield * CO2_KG_PER_KWH * PV_LIFETIME_YEARS;

        return {
            amortisation: amortisationYears,
            gesamtgewinn,
            roi,
            ersparnis_jahr_1,
            strompreis_nach_25: currentPrice * 100, // Convert € to ct
            co2_lifetime,
        };
    },
};
