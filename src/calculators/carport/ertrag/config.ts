/**
 * Solar Carport Ertragsrechner — Configuration
 */
import type { CalculatorConfig } from '../../../types/calculator';
import { PERFORMANCE_RATIO, CO2_KG_PER_KWH, PV_LIFETIME_YEARS } from '../../../shared/constants/physics';
import { EINSPEISEVERGUETUNG } from '../../../shared/constants/tariffs';
import {
    PLZ_INPUT,
    STROMPREIS_INPUT,
    PURCHASE_PRICE_INPUT,
    JAHRESVERBRAUCH_INPUT,
    STROM_STEP_INPUT,
} from '../../../shared/inputs/common';
import { KWP_LARGE_INPUT, AZIMUTH_INPUT, TILT_INPUT } from '../../../shared/inputs/solar';

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

export const getTiltFactor = (tilt: number): number =>
    Math.max(0.70, Math.min(1.00, 1 - 0.0003 * Math.pow(tilt - 32, 2)));

export const getSimultaneousFactor = (jahresverbrauch: number, jahresertrag: number): number => {
    if (jahresertrag <= 0) return 0.30;
    const ratio = jahresverbrauch / jahresertrag;
    return Math.min(0.70, Math.max(0.20, 0.15 + (ratio * 0.25)));
};

export const CarportErtragConfig: CalculatorConfig = {
    slug: 'ertrag',
    category: 'carport',
    breadcrumbLabel: 'Carport',
    title: 'Solar-Carport Ertragsrechner',
    description: 'Berechnen Sie Ertrag, Eigenverbrauch und Wirtschaftlichkeit Ihres Solar-Carports inkl. E-Auto-Potenzial.',
    showIrradianceChart: true,

    inputs: [
        PLZ_INPUT,
        { ...KWP_LARGE_INPUT, label: 'Carport-Leistung (PV)', default: 5 },
        AZIMUTH_INPUT,
        { ...TILT_INPUT, default: 10, tooltip: 'Neigung des Carport-Dachs. Meist flach (5-15°).' },
        JAHRESVERBRAUCH_INPUT,
        STROMPREIS_INPUT,
        STROM_STEP_INPUT,
        { ...PURCHASE_PRICE_INPUT, default: 12000, label: 'Investitionskosten (Netto)' },
    ],

    outputs: [
        { id: 'jahresertrag', label: 'Jahresertrag', unit: 'kWh', format: 'number', highlight: true },
        { id: 'ersparnis_gesamt', label: 'Gesamt-Ertrag / Jahr', unit: '', format: 'currency', highlight: true },
        { id: 'amortisation', label: 'Amortisation', unit: '', format: 'years', highlight: false },
        { id: 'eigenverbrauchsquote', label: 'Eigenverbrauchsquote', unit: '%', format: 'number', highlight: false },
        { id: 'vergutung_jahr', label: 'Einspeisevergütung', unit: '', format: 'currency', highlight: false },
        { id: 'ersparnis_strom', label: 'Strompreis-Ersparnis', unit: '', format: 'currency', highlight: false },
        { id: 'co2', label: 'CO₂ gespart pro Jahr', unit: 'kg', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Einspeiseverg.', value: `${(EINSPEISEVERGUETUNG.below10kwp * 100).toFixed(2)} ct/kWh`, source: `EEG 2024 (<10kWp)` },
        { label: 'Performance Ratio', value: `${PERFORMANCE_RATIO * 100} %`, source: 'Standard PV-System' },
        { label: 'CO₂-Faktor', value: `${CO2_KG_PER_KWH * 1000} g/kWh`, source: 'UBA 2024' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const tilt = Number(inputs.tilt);
        const jahresverbrauch = Math.max(0, Number(inputs.jahresverbrauch));
        const strompreis = Math.max(0, Number(inputs.strompreis));
        const purchasePrice = Math.max(0, Number(inputs.purchase_price));
        const priceIncrease = Math.max(0, Number(inputs.strompreissteigerung || 3)) / 100;

        const aziFactor = KNOWN_AZIMUTHS.has(azimuth) ? AZIMUTH_FACTOR[azimuth] : 1.0;
        const tFactor = getTiltFactor(tilt);

        // Step 1: Yield
        const jahresertrag = kwp * irradiance * PERFORMANCE_RATIO * aziFactor * tFactor;

        // Step 2: Self-consumption
        const sfactor = getSimultaneousFactor(jahresverbrauch, jahresertrag);
        const eigenverbrauch_kwh = Math.min(jahresertrag * sfactor, jahresverbrauch);
        const einspeisung_kwh = Math.max(0, jahresertrag - eigenverbrauch_kwh);
        const eigenverbrauchsquote = jahresertrag > 0 ? Math.round((eigenverbrauch_kwh / jahresertrag) * 100) : 0;

        // Step 3: Financials over 25 years with price increase
        const vergutung_satz = kwp <= 10 ? EINSPEISEVERGUETUNG.below10kwp : EINSPEISEVERGUETUNG.below40kwp;
        const vergutung_jahr = einspeisung_kwh * vergutung_satz;
        const ersparnis_strom = eigenverbrauch_kwh * strompreis;

        let cumulativeSavings = 0;
        let currentPrice = strompreis;
        let amortisationYears = Infinity;

        for (let year = 1; year <= PV_LIFETIME_YEARS; year++) {
            const annualRevenue = (eigenverbrauch_kwh * currentPrice) + vergutung_jahr;
            cumulativeSavings += annualRevenue;

            if (amortisationYears === Infinity && cumulativeSavings >= purchasePrice) {
                const neededThisYear = purchasePrice - (cumulativeSavings - annualRevenue);
                const fractionOfYear = neededThisYear / annualRevenue;
                amortisationYears = (year - 1) + fractionOfYear;
            }

            currentPrice *= (1 + priceIncrease);
        }

        const ersparnis_gesamt = vergutung_jahr + ersparnis_strom;
        const amortisation = amortisationYears;
        const co2 = jahresertrag * CO2_KG_PER_KWH;

        return {
            jahresertrag,
            ersparnis_gesamt,
            amortisation,
            eigenverbrauchsquote,
            vergutung_jahr,
            ersparnis_strom,
            co2,
        };
    },
};
