/**
 * Reusable InputField definitions shared across multiple calculators.
 * Import and use as-is, or spread-override specific properties.
 *
 * @example
 * // Use as-is
 * inputs: [PLZ_INPUT, STROMPREIS_INPUT]
 *
 * // Override a default
 * inputs: [{ ...STROMPREIS_INPUT, default: 0.28 }]
 */
import type { InputField } from '../../types/calculator';
import { DEFAULT_STROMPREIS_EUR_KWH } from '../constants/tariffs';

export const PLZ_INPUT: InputField = {
    id: 'plz',
    label: 'Postleitzahl',
    type: 'plz',
    default: '',
    unit: 'PLZ',
    tooltip: 'Ihre Standort-PLZ – wird zur Ermittlung der lokalen Sonneneinstrahlung via PVGIS verwendet.',
};

export const STROMPREIS_INPUT: InputField = {
    id: 'strompreis',
    label: 'Strompreis',
    type: 'number',
    default: DEFAULT_STROMPREIS_EUR_KWH,
    step: 0.01,
    unit: '€/kWh',
    tooltip: 'Ihr aktueller Arbeitspreis pro kWh. Typisch 2025: 0.27–0.35 €/kWh.',
};

export const PURCHASE_PRICE_INPUT: InputField = {
    id: 'purchase_price',
    label: 'Kaufpreis Anlage',
    type: 'number',
    default: 600,
    step: 10,
    unit: '€',
    tooltip: 'Gesamtkosten inkl. Module, Wechselrichter und Montage.',
};

export const JAHRESVERBRAUCH_INPUT: InputField = {
    id: 'jahresverbrauch',
    label: 'Jahresstromverbrauch',
    type: 'number',
    default: 3500,
    step: 100,
    unit: 'kWh',
    tooltip: 'Ihr jährlicher Haushaltsstromverbrauch. Durchschnitt in Deutschland: ~2.500 kWh (1 Person) bis ~4.500 kWh (4 Personen).',
};

export const STROM_STEP_INPUT: InputField = {
    id: 'strompreissteigerung',
    label: 'Strompreissteigerung',
    type: 'slider',
    default: 3,
    min: 0,
    max: 10,
    step: 0.5,
    unit: '%',
    tooltip: 'Voraussichtliche jährliche Erhöhung des Strompreises. Langfristiger Schnitt in DE liegt bei ca. 3%.',
};
