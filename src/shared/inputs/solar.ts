/**
 * Reusable InputField definitions for solar (PV) calculators.
 */
import type { InputField } from '../../types/calculator';

export const KWP_INPUT: InputField = {
    id: 'kwp',
    label: 'Anlagenleistung',
    type: 'slider',
    default: 0.8,
    min: 0.2,
    max: 2.0,
    step: 0.1,
    unit: 'kWp',
    tooltip: 'Die Spitzenleistung Ihrer Module in Kilowatt Peak (kWp). Typische Balkonkraftwerke: 0.6–0.8 kWp.',
};

/** For larger PV systems — wider range. */
export const KWP_LARGE_INPUT: InputField = {
    ...KWP_INPUT,
    default: 5,
    min: 1,
    max: 30,
    step: 0.5,
    tooltip: 'Gesamtleistung Ihrer PV-Anlage in Kilowatt Peak.',
};

export const AZIMUTH_INPUT: InputField = {
    id: 'azimuth',
    label: 'Ausrichtung',
    type: 'select',
    default: 180,
    unit: '',
    options: [
        { label: 'Süd (180°)', value: 180 },
        { label: 'Südwest (225°)', value: 225 },
        { label: 'Südost (135°)', value: 135 },
        { label: 'West (270°)', value: 270 },
        { label: 'Ost (90°)', value: 90 },
        { label: 'Nordwest (315°)', value: 315 },
        { label: 'Nordost (45°)', value: 45 },
        { label: 'Nord (0°)', value: 0 },
    ],
};

export const TILT_INPUT: InputField = {
    id: 'tilt',
    label: 'Neigungswinkel',
    type: 'slider',
    default: 30,
    min: 0,
    max: 90,
    step: 5,
    unit: '°',
    tooltip: 'Neigung der Module gegenüber der Horizontalen. Optimal: 30–35°. Balkongeländer ≈ 90°.',
};
