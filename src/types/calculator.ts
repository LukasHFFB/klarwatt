
export interface InputField {
  id: string;
  label: string; // German
  unit: string;
  type: 'number' | 'select' | 'plz' | 'slider';
  default: number | string;
  min?: number;
  max?: number;
  step?: number;
  options?: { label: string; value: string | number }[];
  tooltip?: string;
}

export interface OutputField {
  id: string;
  label: string;
  unit: string;
  format: 'number' | 'currency' | 'percent' | 'years';
  highlight?: boolean; // show in large hero result card
}

export interface Assumption {
  label: string;
  value: string;
  source?: string; // e.g. "PVGIS 5.2", "BNetzA Q1 2025"
}

export interface CalculatorConfig {
  slug: string;
  category: string;
  breadcrumbLabel: string;
  title: string;
  description: string;
  inputs: InputField[];
  outputs: OutputField[];
  assumptions: Assumption[];
  /** Set true to display the monthly PVGIS irradiance chart on this calculator. */
  showIrradianceChart?: boolean;
  /** Fixed tilt for the chart (overrides input if defined) */
  chartTilt?: number;
  /** Fixed azimuth for the chart (overrides input if defined) */
  chartAzimuth?: number;
  calculate: (
    inputs: Record<string, number | string>,
    irradiance?: number // kWh/m²/year from PVGIS, injected by shell
  ) => Record<string, number>;
}
