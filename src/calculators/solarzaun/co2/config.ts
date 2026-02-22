/**
 * Solarzaun CO₂-Rechner — Configuration
 */
import type { CalculatorConfig } from '../../../types/calculator';
import {
    CO2_KG_PER_KWH,
    CO2_PRODUCTION_KG_PER_KWP,
    CO2_TREE_KG_PER_YEAR,
    CO2_ICE_CAR_KG_PER_KM,
    PV_LIFETIME_YEARS
} from '../../../shared/constants/physics';
import { PLZ_INPUT } from '../../../shared/inputs/common';
import { KWP_LARGE_INPUT, AZIMUTH_INPUT } from '../../../shared/inputs/solar';

export const SolarzaunCo2Config: CalculatorConfig = {
    slug: 'co2',
    category: 'solarzaun',
    breadcrumbLabel: 'CO2-Bilanz',
    title: 'Solarzaun CO₂-Rechner',
    description: 'Berechnen Sie die ökologische Bilanz Ihres Solarzauns: Von der Produktion bis zur CO₂-Vermeidung.',
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
        { label: 'Bifazial-Faktor', value: '1,20', source: 'Rückseiten-Gewinn' },
        { label: 'Netz-Mix DE', value: `${CO2_KG_PER_KWH * 1000} g/kWh`, source: 'Umweltbundesamt 2024' },
        { label: 'Prod.-Rucksack', value: `${CO2_PRODUCTION_KG_PER_KWP} kg/kWp`, source: 'Fraunhofer ISE 2023' },
        { label: 'Baum-Rate', value: `${CO2_TREE_KG_PER_YEAR} kg/Jahr`, source: 'Buche, Mittelwert' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        const kwp = Math.max(0, Number(inputs.kwp));

        // Factors
        // Irradiance here derived from PVGIS for tilt=90 and aspect=[azimuth].
        const bifacialGain = 1.20;

        // Production
        const annualYield = kwp * irradiance * bifacialGain;
        const lifetimeYield = annualYield * PV_LIFETIME_YEARS;

        // CO2 Avoided (substitution of grid mix)
        const co2_avoided_year = annualYield * CO2_KG_PER_KWH;
        const co2_avoided_lifetime = lifetimeYield * CO2_KG_PER_KWH;

        // CO2 Rucksack (one-time production emissions)
        // Note: For now we use standard PV rucksack. 
        // Real solar fences might have slightly higher balance of system (racking), but modules are the main driver.
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
