/**
 * Solarzaun Ertragsrechner — Configuration
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
import { KWP_LARGE_INPUT, AZIMUTH_INPUT } from '../../../shared/inputs/solar';



export const SolarzaunConfig: CalculatorConfig = {
    slug: 'ertrag',
    category: 'solarzaun',
    breadcrumbLabel: 'Solarzaun',
    title: 'Solarzaun Ertragsrechner',
    description: 'Berechnen Sie den Ertrag Ihres Zaunsystems. Ideal für bifaziale Module in Ost-West-Ausrichtung.',
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
        { id: 'jahresertrag', label: 'Jahresertrag', unit: 'kWh', format: 'number', highlight: true },
        { id: 'ersparnis_gesamt', label: 'Gesamt-Ertrag / Jahr', unit: '', format: 'currency', highlight: true },
        { id: 'amortisation', label: 'Amortisation', unit: '', format: 'years', highlight: false },
        { id: 'eigenverbrauchsquote', label: 'Eigenverbrauchsquote', unit: '%', format: 'number', highlight: false },
        { id: 'vergutung_jahr', label: 'Einspeisevergütung', unit: '', format: 'currency', highlight: false },
        { id: 'co2_jahr', label: 'CO₂-Ersparnis / Jahr', unit: 'kg', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Bifazial-Faktor', value: '1,20', source: 'Rückseiten-Gewinn' },
        { label: 'Vertikal-Winkel', value: '90° (Fest)', source: 'Zaun-Struktur' },
        { label: 'Performance Ratio', value: `${PERFORMANCE_RATIO * 100} %`, source: 'Standard PV-System' },
    ],

    calculate: (inputs, irradiance = 1000) => {
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const jahresverbrauch = Math.max(0, Number(inputs.jahresverbrauch));
        const strompreis = Math.max(0, Number(inputs.strompreis));
        const purchasePrice = Math.max(0, Number(inputs.purchase_price));
        const priceIncrease = Math.max(0, Number(inputs.strompreissteigerung || 3)) / 100;

        // Step 1: Base yield
        // Irradiance here derived from PVGIS for tilt=90 and aspect=[azimuth].
        // We add bifacial gain since PVGIS assumes monofacial.
        const bifacialGain = 1.20;
        const jahresertrag = kwp * irradiance * bifacialGain;

        // Step 2: Self-consumption
        // East-West vertical fences have a high self-consumption because they peak morning/evening
        const simultaneousFactor = (azimuth === 90 || azimuth === 270) ? 0.45 : 0.35;
        const eigenverbrauch_kwh = Math.min(jahresertrag * simultaneousFactor, jahresverbrauch);
        const einspeisung_kwh = Math.max(0, jahresertrag - eigenverbrauch_kwh);
        const eigenverbrauchsquote = jahresertrag > 0 ? Math.round((eigenverbrauch_kwh / jahresertrag) * 100) : 0;

        // Step 3: Financials over 25 years
        const vergutung_satz = kwp <= 10 ? EINSPEISEVERGUETUNG.below10kwp : EINSPEISEVERGUETUNG.below40kwp;
        const vergutung_jahr = einspeisung_kwh * vergutung_satz;

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

        const ersparnis_gesamt = (eigenverbrauch_kwh * strompreis) + vergutung_jahr;
        const co2_jahr = jahresertrag * CO2_KG_PER_KWH;

        return {
            jahresertrag,
            ersparnis_gesamt,
            amortisation: amortisationYears,
            eigenverbrauchsquote,
            vergutung_jahr,
            co2_jahr,
        };
    },
};
