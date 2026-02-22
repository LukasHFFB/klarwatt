/**
 * Physical constants used across all solar calculators.
 * Update here and all calculators inherit the change automatically.
 */

/** Standard performance ratio for typical residential PV systems (wiring, inverter, temp). */
export const PERFORMANCE_RATIO = 0.75;

/** CO₂ emissions factor for German grid electricity. Source: Umweltbundesamt 2024. */
export const CO2_KG_PER_KWH = 0.380;

/** CO₂ 'rucksack' (production emissions) per installed kWp. Average including manufacturing & transport. */
export const CO2_PRODUCTION_KG_PER_KWP = 600;

/** Average annual CO₂ sequestration of a mature beech tree in Central Europe. Source: NW-FVA. */
export const CO2_TREE_KG_PER_YEAR = 12.5;

/** Average CO₂ emissions of a new combustion engine car (ICE) in Germany. Source: KBA 2024. */
export const CO2_ICE_CAR_KG_PER_KM = 0.150;

/** Expected lifetime of modules in years for total calculation. */
export const PV_LIFETIME_YEARS = 25;
