/**
 * Balkonkraftwerk Ertragsrechner — Configuration
 *
 * Pure TypeScript: no JSX. All SEO content lives in ./content.ts.
 * Physical constants and shared inputs are imported from src/shared/.
 */
import type { CalculatorConfig } from '../../../types/calculator';
import { PERFORMANCE_RATIO, CO2_KG_PER_KWH } from '../../../shared/constants/physics';
import {
    PLZ_INPUT,
    STROMPREIS_INPUT,
    PURCHASE_PRICE_INPUT,
    JAHRESVERBRAUCH_INPUT,
} from '../../../shared/inputs/common';
import { KWP_INPUT, AZIMUTH_INPUT, TILT_INPUT } from '../../../shared/inputs/solar';

// --- Module-level constants (specific to this calculator) ---

/**
 * Azimuth correction factor relative to south-facing optimal (180°).
 * Source: PVGIS-derived typical values for Central Europe.
 */
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

/**
 * Parabolic tilt correction factor, peak at 32°, clamped to [0.70, 1.00].
 * Calibrated so 0° and 90° both return 0.70.
 */
export const getTiltFactor = (tilt: number): number =>
    Math.max(0.70, Math.min(1.00, 1 - 0.0003 * Math.pow(tilt - 32, 2)));

/**
 * Simultaneous-use factor: what share of solar production coincides with load.
 * Based on HTW Berlin "Photovoltaik-Speicher-Inspektion" research.
 * Range: 0.55 (very low consumption) to 0.80 (high consumption).
 */
export const getSimultaneousFactor = (jahresverbrauch: number): number =>
    Math.min(0.80, Math.max(0.55, 0.50 + jahresverbrauch / 15_000));

// --- Calculator Config ---

export const BalkonkraftwerkConfig: CalculatorConfig = {
    slug: 'ertrag',
    category: 'balkonkraftwerk',
    breadcrumbLabel: 'Balkonkraftwerk',
    title: 'Balkonkraftwerk Ertragsrechner',
    description: 'Berechnen Sie schnell und präzise den Ertrag, die Ersparnis und die Amortisationszeit Ihres Balkonkraftwerks.',
    showIrradianceChart: true,

    inputs: [
        PLZ_INPUT,
        KWP_INPUT,
        AZIMUTH_INPUT,
        TILT_INPUT,
        JAHRESVERBRAUCH_INPUT,
        STROMPREIS_INPUT,
        PURCHASE_PRICE_INPUT,
    ],

    outputs: [
        { id: 'jahresertrag', label: 'Jahresertrag', unit: 'kWh', format: 'number', highlight: true },
        { id: 'ersparnis', label: 'Jährliche Ersparnis', unit: '', format: 'currency', highlight: true },
        { id: 'amortisation', label: 'Amortisation', unit: '', format: 'years', highlight: false },
        { id: 'eigenverbrauchsquote', label: 'Eigenverbrauchsquote', unit: '%', format: 'number', highlight: false },
        { id: 'eigenverbrauch_kwh', label: 'Eigenverbrauch', unit: 'kWh', format: 'number', highlight: false },
        { id: 'einspeisung_kwh', label: 'Einspeisung (unvergütet)', unit: 'kWh', format: 'number', highlight: false },
        { id: 'co2', label: 'CO₂ gespart pro Jahr', unit: 'kg', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Performance Ratio', value: `${PERFORMANCE_RATIO * 100} %`, source: 'Standardwert der Branche' },
        { label: 'CO₂-Emissionsfaktor', value: `${CO2_KG_PER_KWH * 1000} g/kWh`, source: 'Umweltbundesamt 2024' },
        { label: 'Einspeisevergütung', value: 'Keine (Balkonkraftwerk)', source: 'EEG §9 – unvergütete Einspeisung bei ≤800 W' },
        { label: 'Eigenv.-Modell', value: 'HTW Berlin 2020', source: 'Simultaneous-use factor 0.55–0.80' },
        { label: 'Einstrahlungsdaten', value: 'PVGIS 5.2', source: 'EU JRC, Mittel 2005–2023' },
        { label: 'Degradation', value: 'Nicht berücksichtigt', source: 'Realistisch: ~0,5 %/Jahr' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        // Parse & validate inputs
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const tilt = Number(inputs.tilt);
        const jahresverbrauch = Math.max(0, Number(inputs.jahresverbrauch));
        const strompreis = Math.max(0, Number(inputs.strompreis));
        const purchasePrice = Math.max(0, Number(inputs.purchase_price));

        // Orientation factors
        const aziFactor = KNOWN_AZIMUTHS.has(azimuth) ? AZIMUTH_FACTOR[azimuth] : 1.0;
        const tFactor = getTiltFactor(tilt);

        // Step 1: Gross annual yield (kWh)
        const jahresertrag = kwp * irradiance * PERFORMANCE_RATIO * aziFactor * tFactor;

        // Step 2: Self-consumption (bounded by household consumption)
        const sfactor = getSimultaneousFactor(jahresverbrauch);
        const eigenverbrauch_kwh = Math.min(jahresertrag * sfactor, jahresverbrauch);
        const einspeisung_kwh = jahresertrag - eigenverbrauch_kwh;
        const eigenverbrauchsquote = jahresertrag > 0
            ? Math.round((eigenverbrauch_kwh / jahresertrag) * 100)
            : 0;

        // Step 3: Savings — Balkonkraftwerk has NO Einspeisevergütung (EEG §9)
        const ersparnis = eigenverbrauch_kwh * strompreis;

        // Step 4: Payback (Infinity when no savings)
        const amortisation = ersparnis > 0 ? purchasePrice / ersparnis : Infinity;

        // Step 5: CO₂ offset (whole yield, not just self-consumed)
        const co2 = jahresertrag * CO2_KG_PER_KWH;

        return { jahresertrag, ersparnis, amortisation, eigenverbrauchsquote, eigenverbrauch_kwh, einspeisung_kwh, co2 };
    },
};
