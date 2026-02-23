/**
 * Solar Carport CO₂-Rechner — Configuration
 */
import type { CalculatorConfig } from '../../../types/calculator';
import {
    CO2_KG_PER_KWH,
    CO2_PRODUCTION_KG_PER_KWP,
    CO2_TREE_KG_PER_YEAR,
    CO2_ICE_CAR_KG_PER_KM,
    PV_LIFETIME_YEARS,
    PERFORMANCE_RATIO
} from '../../../shared/constants/physics';
import { PLZ_INPUT } from '../../../shared/inputs/common';
import { KWP_LARGE_INPUT, AZIMUTH_INPUT, TILT_INPUT } from '../../../shared/inputs/solar';
import { getTiltFactor } from '../ertrag/config';

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

export const CarportCo2Config: CalculatorConfig = {
    slug: 'co2',
    category: 'carport',
    breadcrumbLabel: 'CO2-Bilanz',
    title: 'Solar-Carport CO₂-Rechner',
    description: 'Berechnen Sie den ökologischen Fußabdruck und die CO₂-Ersparnis Ihres neuen Solar-Carports.',
    showIrradianceChart: true,

    inputs: [
        PLZ_INPUT,
        { ...KWP_LARGE_INPUT, label: 'Carport-Leistung (kWp)', default: 5 },
        AZIMUTH_INPUT,
        { ...TILT_INPUT, default: 10, tooltip: 'Neigung des Carport-Dachs. Meist flach (5-15°).' },
    ],

    outputs: [
        { id: 'co2_avoided_year', label: 'CO₂-Vermeidung / Jahr', unit: 'kg', format: 'number', highlight: true },
        { id: 'co2_avoided_lifetime', label: 'CO₂-Vermeidung (25J)', unit: 'kg', format: 'number', highlight: true },
        { id: 'co2_rucksack', label: 'CO₂-Rucksack (Produktion)', unit: 'kg', format: 'number', highlight: false },
        { id: 'co2_net_lifetime', label: 'Netto-Bilanz (25J)', unit: 'kg', format: 'number', highlight: false },
        { id: 'energy_payback_years', label: 'Energetische Amortisation', unit: 'Jahre', format: 'number', highlight: false },
        { id: 'tree_equivalent', label: 'Baum-Äquivalent', unit: 'Bäume', format: 'number', highlight: false },
        { id: 'car_km_equivalent', label: 'Autofahrt-Äquivalent', unit: 'km', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Netz-Mix DE', value: `${(CO2_KG_PER_KWH * 1000).toFixed(0)} g/kWh`, source: 'Umweltbundesamt 2024' },
        { label: 'Prod.-Rucksack', value: `${CO2_PRODUCTION_KG_PER_KWP} kg/kWp`, source: 'Fraunhofer ISE 2023' },
        { label: 'Baum-Rate', value: `${CO2_TREE_KG_PER_YEAR} kg/Jahr`, source: 'Buche, Mittelwert' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const tilt = Number(inputs.tilt);

        const aziFactor = KNOWN_AZIMUTHS.has(azimuth) ? AZIMUTH_FACTOR[azimuth] : 1.0;
        const tFactor = getTiltFactor(tilt);

        // Production
        const annualYield = kwp * irradiance * PERFORMANCE_RATIO * aziFactor * tFactor;
        const lifetimeYield = annualYield * PV_LIFETIME_YEARS;

        // CO2 Avoided (substitution of grid mix)
        const co2_avoided_year = annualYield * CO2_KG_PER_KWH;
        const co2_avoided_lifetime = lifetimeYield * CO2_KG_PER_KWH;

        // CO2 Rucksack (one-time production emissions)
        // Note: PV carport could have higher rucksack due to concrete / heavy steel, but we use standard PV module+inverter equivalent for simplicity.
        const co2_rucksack = kwp * CO2_PRODUCTION_KG_PER_KWP;

        // Net Balance
        const co2_net_lifetime = co2_avoided_lifetime - co2_rucksack;

        // Energy Payback (When did we save as much CO2 as production cost?)
        const energy_payback_years = co2_avoided_year > 0 ? co2_rucksack / co2_avoided_year : Infinity;

        // Equivalents
        const tree_equivalent = co2_avoided_year / CO2_TREE_KG_PER_YEAR;
        const car_km_equivalent = co2_avoided_year / CO2_ICE_CAR_KG_PER_KM;

        return {
            co2_avoided_year,
            co2_avoided_lifetime,
            co2_rucksack,
            co2_net_lifetime,
            energy_payback_years,
            tree_equivalent,
            car_km_equivalent,
        };
    },
};
