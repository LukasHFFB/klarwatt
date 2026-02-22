/**
 * Solarzaun Amortisationsrechner — Configuration
 */
import type { CalculatorConfig } from '../../../types/calculator';
import { CO2_KG_PER_KWH, PV_LIFETIME_YEARS } from '../../../shared/constants/physics';
import { EINSPEISEVERGUETUNG } from '../../../shared/constants/tariffs';
import {
    PLZ_INPUT,
    STROMPREIS_INPUT,
    JAHRESVERBRAUCH_INPUT,
    PURCHASE_PRICE_INPUT,
    STROM_STEP_INPUT
} from '../../../shared/inputs/common';
import { KWP_LARGE_INPUT, AZIMUTH_INPUT } from '../../../shared/inputs/solar';

export const SolarzaunAmortisationConfig: CalculatorConfig = {
    slug: 'amortisation',
    category: 'solarzaun',
    breadcrumbLabel: 'Amortisation',
    title: 'Solarzaun Amortisationsrechner',
    description: 'Berechnen Sie, wann sich Ihr Solarzaun durch Stromersparnis und Einspeisevergütung bezahlt macht.',
    showIrradianceChart: true,
    chartTilt: 90,

    inputs: [
        PLZ_INPUT,
        { ...KWP_LARGE_INPUT, label: 'Zaun-Leistung (kWp)', default: 5 },
        {
            ...AZIMUTH_INPUT,
            tooltip: 'Die Ausrichtung der Zaun-Längsseite. Ost-West (90° oder 270°) ist bei Solarzäunen besonders effizient.',
            default: 90
        },
        JAHRESVERBRAUCH_INPUT,
        STROMPREIS_INPUT,
        STROM_STEP_INPUT,
        { ...PURCHASE_PRICE_INPUT, default: 8000, label: 'Investitionskosten (Netto)' },
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
        { label: 'Bifazial-Faktor', value: '1,20', source: 'Rückseiten-Gewinn' },
        { label: 'Lebensdauer', value: `${PV_LIFETIME_YEARS} Jahre`, source: 'Branchenüblich' },
        { label: 'Einspeiseverg.', value: `${(EINSPEISEVERGUETUNG.below10kwp * 100).toFixed(2)} ct/kWh`, source: 'EEG 2024' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const jahresverbrauch = Math.max(0, Number(inputs.jahresverbrauch));
        const initialPrice = Math.max(0, Number(inputs.strompreis));
        const purchasePrice = Math.max(0, Number(inputs.purchase_price));
        const priceIncrease = Math.max(0, Number(inputs.strompreissteigerung || 3)) / 100;

        // Step 1: Base yield
        const bifacialGain = 1.20;
        const annualYield = kwp * irradiance * bifacialGain;

        // Step 2: Self-consumption
        // East-West vertical fences have a high self-consumption because they peak morning/evening
        const simultaneousFactor = (azimuth === 90 || azimuth === 270) ? 0.45 : 0.35;
        const eigenverbrauch_kwh = Math.min(annualYield * simultaneousFactor, jahresverbrauch);
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
