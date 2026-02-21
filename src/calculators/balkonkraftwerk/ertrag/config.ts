import type { CalculatorConfig } from '../../../types/calculator';

const PR = 0.75; // Performance Ratio

const azimuthFactor: Record<number, number> = {
    0: 0.60,    // N
    45: 0.72,   // NO
    90: 0.82,   // O
    135: 0.95,  // SO
    180: 1.00,  // S — optimal
    225: 0.95,  // SW
    270: 0.82,  // W
    315: 0.72,  // NW
};

const CO2_FACTOR = 0.380; // kg/kWh

export const EINSPEISEVERGÜTUNG = {
    below10kwp_partial: 0.0795,   // €/kWh
    valid_from: '2025-01-01',
};

// Parabolic tilt correction, peak at 32°, clamped 0.70–1.00
export const getTiltFactor = (tilt: number) =>
    Math.max(0.70, Math.min(1.00, 1 - 0.0003 * Math.pow(tilt - 32, 2)));

export const BalkonkraftwerkConfig: CalculatorConfig = {
    slug: 'ertrag',
    category: 'balkonkraftwerk',
    title: 'Balkonkraftwerk Ertragsrechner',
    description: 'Berechnen Sie schnell und präzise den Ertrag, die Ersparnis und die Amortisationszeit Ihres Balkonkraftwerks.',

    inputs: [
        { id: 'plz', label: 'Postleitzahl', type: 'plz', default: '80331', unit: 'PLZ' },
        { id: 'kwp', label: 'Anlagenleistung', type: 'slider', default: 0.8, min: 0.2, max: 2.0, step: 0.1, unit: 'kWp' },
        {
            id: 'azimuth',
            label: 'Ausrichtung',
            type: 'select',
            default: 180,
            unit: '',
            options: [
                { label: 'Süd (180°)', value: 180 },
                { label: 'Südost (135°)', value: 135 },
                { label: 'Südwest (225°)', value: 225 },
                { label: 'Ost (90°)', value: 90 },
                { label: 'West (270°)', value: 270 },
                { label: 'Nordost (45°)', value: 45 },
                { label: 'Nordwest (315°)', value: 315 },
                { label: 'Nord (0°)', value: 0 },
            ]
        },
        { id: 'tilt', label: 'Neigungswinkel', type: 'slider', default: 30, min: 0, max: 90, step: 5, unit: '°' },
        { id: 'strompreis', label: 'Strompreis', type: 'number', default: 0.30, step: 0.01, unit: '€/kWh' },
        { id: 'eigenverbrauch', label: 'Eigenverbrauchsquote', type: 'slider', default: 70, min: 10, max: 100, step: 5, unit: '%' },
        { id: 'purchase_price', label: 'Kaufpreis Anlage', type: 'number', default: 600, step: 10, unit: '€' },
    ],

    outputs: [
        { id: 'jahresertrag', label: 'Jahresertrag', unit: 'kWh', format: 'number', highlight: true },
        { id: 'ersparnis', label: 'Jährliche Ersparnis', unit: '', format: 'currency', highlight: true },
        { id: 'amortisation', label: 'Amortisation', unit: '', format: 'years', highlight: false },
        { id: 'eigenverbrauch_kwh', label: 'Eigenverbrauch', unit: 'kWh', format: 'number', highlight: false },
        { id: 'einspeisung_kwh', label: 'Netzeinspeisung', unit: 'kWh', format: 'number', highlight: false },
        { id: 'co2', label: 'CO₂ gespart pro Jahr', unit: 'kg', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Performance Ratio', value: '75%', source: 'Standard industry value' },
        { label: 'CO₂ Emissionsfaktor', value: '380 g/kWh', source: 'Umweltbundesamt 2024' },
        { label: 'Einspeisevergütung', value: '7,95 ct/kWh', source: 'BNetzA Q1 2025' },
        { label: 'Einstrahlungsdaten', value: 'PVGIS 5.2', source: 'EU JRC, Mittel 2005–2023' },
        { label: 'Degradation', value: 'Nicht berücksichtigt', source: 'Real: ~0.5%/Jahr' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        // Parse Inputs
        const kwp = Number(inputs.kwp || 0);
        const azimuth = Number(inputs.azimuth || 180);
        const tilt = Number(inputs.tilt || 30);
        const _strompreis = Number(inputs.strompreis || 0);
        const eigenverbrauchRange = Number(inputs.eigenverbrauch || 0);
        const purchase = Number(inputs.purchase_price || 0);

        // Factors
        const aziFactor = azimuthFactor[azimuth] || 1.0;
        const tFactor = getTiltFactor(tilt);
        const evRate = eigenverbrauchRange / 100.0;

        // Formulas
        const jahresertrag = kwp * irradiance * PR * aziFactor * tFactor;

        const evValKwh = jahresertrag * evRate;
        const einspeisungKwh = jahresertrag * (1 - evRate);

        const ersparnis = (evValKwh * _strompreis) + (einspeisungKwh * EINSPEISEVERGÜTUNG.below10kwp_partial);

        const amortisation = ersparnis > 0 ? (purchase / ersparnis) : 0;

        const co2 = jahresertrag * CO2_FACTOR;

        return {
            jahresertrag,
            ersparnis,
            amortisation: amortisation || undefined, // undefined prevents rendering '-' if 0 
            eigenverbrauch_kwh: evValKwh,
            einspeisung_kwh: einspeisungKwh,
            co2
        } as Record<string, number>;
    }
};
