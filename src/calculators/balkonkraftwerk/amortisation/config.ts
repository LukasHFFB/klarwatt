/**
 * Balkonkraftwerk Amortisationsrechner — Configuration
 */
import type { CalculatorConfig } from '../../../types/calculator';
import { PERFORMANCE_RATIO, CO2_KG_PER_KWH, PV_LIFETIME_YEARS } from '../../../shared/constants/physics';
import {
    PLZ_INPUT,
    STROMPREIS_INPUT,
    JAHRESVERBRAUCH_INPUT,
    PURCHASE_PRICE_INPUT,
    STROM_STEP_INPUT
} from '../../../shared/inputs/common';
import { KWP_INPUT, AZIMUTH_INPUT, TILT_INPUT } from '../../../shared/inputs/solar';

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

const getTiltFactor = (tilt: number): number =>
    Math.max(0.70, Math.min(1.00, 1 - 0.0003 * Math.pow(tilt - 32, 2)));

/**
 * Simultaneous-use factor based on HTW Berlin model for small systems.
 */
const getSimultaneousFactor = (jahresverbrauch: number): number => {
    const consumption = Math.max(0, jahresverbrauch);
    return Math.min(0.80, Math.max(0.55, 0.50 + consumption / 15000));
};

export const BalkonkraftwerkAmortisationConfig: CalculatorConfig = {
    slug: 'amortisation',
    category: 'balkonkraftwerk',
    breadcrumbLabel: 'Amortisation',
    title: 'Balkonkraftwerk Amortisationsrechner',
    description: 'Berechnen Sie exakt, wann sich Ihr Balkonkraftwerk bezahlt macht und wie viel Gewinn es über die Jahre erwirtschaftet.',
    showIrradianceChart: true,

    inputs: [
        PLZ_INPUT,
        KWP_INPUT,
        AZIMUTH_INPUT,
        TILT_INPUT,
        JAHRESVERBRAUCH_INPUT,
        STROMPREIS_INPUT,
        STROM_STEP_INPUT,
        { ...PURCHASE_PRICE_INPUT, default: 600 },
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
        { label: 'Performance Ratio', value: `${PERFORMANCE_RATIO * 100} %`, source: 'PVGIS Standard' },
        { label: 'Lebensdauer', value: `${PV_LIFETIME_YEARS} Jahre`, source: 'Branchenüblich' },
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

        // Step 1: Base yield
        const annualYield = kwp * irradiance * PERFORMANCE_RATIO * aziFactor * tFactor;

        // Step 2: Self-consumption
        const sfactor = getSimultaneousFactor(jahresverbrauch);
        const eigenverbrauch_kwh = Math.min(annualYield * sfactor, jahresverbrauch);

        // Step 3: Cashflow over 25 years with dynamic price increase
        let cumulativeSavings = 0;
        let amortisationYears = Infinity;
        let currentPrice = initialPrice;
        let ersparnis_jahr_1 = 0;

        for (let year = 1; year <= PV_LIFETIME_YEARS; year++) {
            const annualSavings = eigenverbrauch_kwh * currentPrice;
            if (year === 1) ersparnis_jahr_1 = annualSavings;

            cumulativeSavings += annualSavings;

            if (amortisationYears === Infinity && cumulativeSavings >= purchasePrice) {
                // Linear interpolation for more precise month-level amortisation
                const neededThisYear = purchasePrice - (cumulativeSavings - annualSavings);
                const fractionOfYear = neededThisYear / annualSavings;
                amortisationYears = (year - 1) + fractionOfYear;
            }

            currentPrice *= (1 + priceIncrease);
        }

        const gesamtgewinn = cumulativeSavings - purchasePrice;
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
