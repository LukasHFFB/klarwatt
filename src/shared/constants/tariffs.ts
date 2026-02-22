/**
 * German electricity feed-in tariffs (Einspeisevergütung) and grid fees.
 * Updated quarterly per BNetzA announcements.
 * Source: Bundesnetzagentur Q1 2025.
 *
 * NOTE: Balkonkraftwerk (≤800 W) receive NO feed-in compensation (EEG §9).
 * These rates apply to larger PV systems (>800 W) registered in MaStR.
 */
export const EINSPEISEVERGUETUNG = {
    /** Systems ≤10 kWp, partial self-consumption. €/kWh. */
    below10kwp: 0.0795,
    /** Systems 10–40 kWp. €/kWh. */
    below40kwp: 0.0769,
    /** Valid from date. */
    validFrom: '2025-01-01',
} as const;

/**
 * Average German household electricity price (Arbeitspreis).
 * Source: BDEW Q1 2025.
 */
export const DEFAULT_STROMPREIS_EUR_KWH = 0.30;
