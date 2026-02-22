import type { CalculatorConfig } from '../../../types/calculator';

// --- Constants ---

const PR = 0.75; // Performance Ratio (industry standard for typical system losses)

const CO2_FACTOR = 0.380; // kg CO₂ per kWh (Umweltbundesamt 2024)

/**
 * Azimuth correction factor relative to optimal south-facing (180°).
 * Source: PVGIS-derived typical values for Central Europe.
 */
const AZIMUTH_FACTOR: Record<number, number> = {
    0: 0.60, // N
    45: 0.72, // NO
    90: 0.82, // O
    135: 0.95, // SO
    180: 1.00, // S — optimal
    225: 0.95, // SW
    270: 0.82, // W
    315: 0.72, // NW
};

/**
 * Parabolic tilt correction factor, peak at 32°, clamped to [0.70, 1.00].
 * Formula calibrated so 0° and 90° both return 0.70.
 * Source: approximation of PVGIS optimal tilt curves.
 */
export const getTiltFactor = (tilt: number): number =>
    Math.max(0.70, Math.min(1.00, 1 - 0.0003 * Math.pow(tilt - 32, 2)));

/**
 * Simultaneous-use factor — the fraction of solar yield that actually
 * coincides with household load (i.e. can be self-consumed).
 *
 * A higher annual consumption means the household is drawing power more hours
 * of the day, which increases the overlap with solar generation.
 *
 * Based on HTW Berlin "Photovoltaik-Speicher-Inspektion" research:
 *   ~0.55–0.80 for typical German households with balcony PV
 */
export const getSimultaneousFactor = (jahresverbrauch: number): number =>
    Math.min(0.80, Math.max(0.55, 0.50 + jahresverbrauch / 15_000));

export const BalkonkraftwerkConfig: CalculatorConfig = {
    slug: 'ertrag',
    category: 'balkonkraftwerk',
    breadcrumbLabel: 'Balkonkraftwerk',
    title: 'Balkonkraftwerk Ertragsrechner',
    description: 'Berechnen Sie schnell und präzise den Ertrag, die Ersparnis und die Amortisationszeit Ihres Balkonkraftwerks.',
    showIrradianceChart: true,

    inputs: [
        {
            id: 'plz',
            label: 'Postleitzahl',
            type: 'plz',
            default: '80331',
            unit: 'PLZ',
            tooltip: 'Ihre Standort-PLZ – wird zur Ermittlung der lokalen Sonneneinstrahlung via PVGIS verwendet.',
        },
        {
            id: 'kwp',
            label: 'Anlagenleistung',
            type: 'slider',
            default: 0.8,
            min: 0.2,
            max: 2.0,
            step: 0.1,
            unit: 'kWp',
            tooltip: 'Die Spitzenleistung Ihrer Module in Kilowatt Peak (kWp). Typische Balkonkraftwerke: 0.6–0.8 kWp.',
        },
        {
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
        },
        {
            id: 'tilt',
            label: 'Neigungswinkel',
            type: 'slider',
            default: 30,
            min: 0,
            max: 90,
            step: 5,
            unit: '°',
            tooltip: 'Neigung der Module gegenüber der Horizontalen. Optimal: 30–35°. Balkongeländer ≈ 90°.',
        },
        {
            id: 'jahresverbrauch',
            label: 'Jahresstromverbrauch',
            type: 'number',
            default: 3500,
            step: 100,
            unit: 'kWh',
            tooltip: 'Ihr jährlicher Haushaltsstromverbrauch. Durchschnitt in Deutschland: ~2.500 kWh (1 Person) bis ~4.500 kWh (4 Personen).',
        },
        {
            id: 'strompreis',
            label: 'Strompreis',
            type: 'number',
            default: 0.30,
            step: 0.01,
            unit: '€/kWh',
            tooltip: 'Ihr aktueller Arbeitspreis pro kWh. Typisch 2025: 0.27–0.35 €/kWh.',
        },
        {
            id: 'purchase_price',
            label: 'Kaufpreis Anlage',
            type: 'number',
            default: 600,
            step: 10,
            unit: '€',
            tooltip: 'Gesamtkosten inkl. Module, Wechselrichter und Montage.',
        },
    ],

    outputs: [
        { id: 'jahresertrag', label: 'Jahresertrag', unit: 'kWh', format: 'number', highlight: true },
        { id: 'ersparnis', label: 'Jährliche Ersparnis', unit: '', format: 'currency', highlight: true },
        { id: 'amortisation', label: 'Amortisation', unit: '', format: 'years', highlight: false },
        { id: 'eigenverbrauchsquote', label: 'Eigenverbrauchsquote', unit: '%', format: 'number', highlight: false },
        { id: 'eigenverbrauch_kwh', label: 'Eigenverbrauch', unit: 'kWh', format: 'number', highlight: false },
        { id: 'einspeisung_kwh', label: 'Einspeisung (unvergütet)', unit: 'kWh', format: 'number', highlight: false },
        { id: 'co2', label: 'CO₂ gespart pro Jahr', unit: 'kg', format: 'number', highlight: false },
    ],

    assumptions: [
        { label: 'Performance Ratio', value: '75 %', source: 'Standardwert der Branche' },
        { label: 'CO₂-Emissionsfaktor', value: '380 g/kWh', source: 'Umweltbundesamt 2024' },
        { label: 'Einspeisevergütung', value: 'Keine (Balkonkraftwerk)', source: 'EEG §9 – Pflicht zur unvergüteten Einspeisung bei ≤800 W' },
        { label: 'Eigenv.-Modell', value: 'HTW Berlin 2020', source: 'Simultaneous-use factor ~0.55–0.80' },
        { label: 'Einstrahlungsdaten', value: 'PVGIS 5.2', source: 'EU JRC, Mittel 2005–2023' },
        { label: 'Degradation', value: 'Nicht berücksichtigt', source: 'Realistisch: ~0,5 %/Jahr' },
    ],

    seoContent: (
        <article className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Wie berechnet man den Ertrag eines Balkonkraftwerks?</h2>
            <p>
                Ein Balkonkraftwerk (auch Stecker-Solargerät genannt) ist eine Mini-Photovoltaikanlage,
                die mit einem Schuko-Stecker direkt an das häusliche Stromnetz angeschlossen wird.
                Der Jahresertrag hängt von Standort, Ausrichtung, Neigung und Systemverlusten ab.
            </p>
            <h3 id="faktoren" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Welche Faktoren beeinflussen den Ertrag?</h3>
            <ul>
                <li><strong>Standort (Globalstrahlung):</strong> Im Süden Deutschlands scheint die Sonne im Schnitt häufiger und intensiver als im Norden.</li>
                <li><strong>Ausrichtung:</strong> Süd optimal, Ost/West ca. 82 %, Nord ca. 60 % des Optimums.</li>
                <li><strong>Neigungswinkel:</strong> Optimal 30–35°. Senkrecht montiert (90°, z. B. Balkongeländer) ≈ 70 %.</li>
                <li><strong>Performance Ratio:</strong> Leitungsverluste, Wechselrichter, Temperatur – im Schnitt ~75 %.</li>
            </ul>
            <h3 id="eigenverbrauch" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Was bedeutet Eigenverbrauch?</h3>
            <p>
                Beim Balkonkraftwerk wird erzeugter Strom <em>nicht</em> vergütet (EEG §9: unvergütete Einspeisung bei ≤ 800 W).
                Die Ersparnis entsteht ausschließlich durch <strong>Eigenverbrauch</strong> – also durch den Strom,
                der gleichzeitig produziert und verbraucht wird und damit nicht aus dem Netz bezogen werden muss.
                Je höher Ihr Jahresstromverbrauch, desto mehr der erzeugten Kilowattstunden können Sie selbst nutzen.
            </p>
        </article>
    ),

    calculate: (inputs, irradiance = 1000) => {
        // --- Parse & validate inputs ---
        // Use explicit conversion; do NOT use `|| default` pattern because it replaces
        // intentional zero values (e.g. strompreis=0 must stay 0, not fall back to default).
        const kwp = Math.max(0, Number(inputs.kwp));
        const azimuth = Number(inputs.azimuth);
        const tilt = Number(inputs.tilt);
        const jahresverbrauch = Math.max(0, Number(inputs.jahresverbrauch));
        const strompreis = Math.max(0, Number(inputs.strompreis));
        const purchasePrice = Math.max(0, Number(inputs.purchase_price));

        // --- Location & orientation factors ---
        // Fall back to 1.0 only when azimuth is truly not in our lookup table
        const knownAzimuths = [0, 45, 90, 135, 180, 225, 270, 315];
        const aziFactor = knownAzimuths.includes(azimuth)
            ? AZIMUTH_FACTOR[azimuth]
            : 1.0; // should never happen with the select options we provide
        const tFactor = getTiltFactor(tilt);

        // --- Step 1: Gross annual yield ---
        // irradiance is kWh/m²/year at optimal angle (from PVGIS for this PLZ).
        // PR accounts for wiring losses, inverter efficiency, temperature derating, soiling.
        const jahresertrag = kwp * irradiance * PR * aziFactor * tFactor;

        // --- Step 2: Self-consumption calculation ---
        // Simultaneous factor = fraction of production that coincides with household demand.
        // A higher jahresverbrauch means more hours of load, hence better overlap with solar.
        // Based on HTW Berlin research for balcony-scale systems.
        const sfactor = getSimultaneousFactor(jahresverbrauch);

        // Self-consumed kWh: bounded above by total household consumption
        const eigenverbrauch_kwh = Math.min(
            jahresertrag * sfactor,
            jahresverbrauch,  // can't self-consume more than you use total
        );
        const einspeisung_kwh = jahresertrag - eigenverbrauch_kwh;
        const eigenverbrauchsquote = jahresertrag > 0
            ? Math.round((eigenverbrauch_kwh / jahresertrag) * 100)
            : 0;

        // --- Step 3: Annual savings ---
        // IMPORTANT: For Balkonkraftwerk (≤800 W) there is NO Einspeisevergütung.
        // EEG §9 requires small generators to feed in without compensation.
        // Savings = purely avoided grid purchases (eigenverbrauch × your strompreis).
        const ersparnis = eigenverbrauch_kwh * strompreis;

        // --- Step 4: Payback period ---
        // Returns Infinity when strompreis=0 (no savings → never pays back).
        // Returns 0 when purchase_price=0 (already paid off).
        const amortisation = ersparnis > 0 ? purchasePrice / ersparnis : Infinity;

        // --- Step 5: CO₂ offset ---
        // Full yield offsets grid CO₂, regardless of self-consumption.
        const co2 = jahresertrag * CO2_FACTOR;

        return {
            jahresertrag,
            ersparnis,
            amortisation,
            eigenverbrauchsquote,
            eigenverbrauch_kwh,
            einspeisung_kwh,
            co2,
        };
    },
};
