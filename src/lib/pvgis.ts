import { resolvePlz } from './plz';

export interface PVGISResult {
    irradiance: number; // kWh/m²/year
}

export const fetchIrradiance = async (plz: string): Promise<number | null> => {
    // 1. Check Session Cache
    const cacheKey = `pvgis_${plz}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
        return parseFloat(cached);
    }

    // 2. Resolve Coordinates
    const coords = await resolvePlz(plz);
    if (!coords) return null;

    // 3. Call PVGIS EU API
    try {
        const url = new URL('https://re.jrc.ec.europa.eu/api/v5_2/PVcalc');
        url.searchParams.append('lat', coords.lat.toString());
        url.searchParams.append('lon', coords.lon.toString());
        url.searchParams.append('peakpower', '1');
        url.searchParams.append('loss', '14');       // Default standard system losses
        url.searchParams.append('outputformat', 'json');

        // Always use optimized angle for the proxy value (we adjust tilt/azimuth later locally)
        url.searchParams.append('optimalangles', '1');

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(`PVGIS HTTP Error: ${response.status}`);

        const data = await response.json();
        const annualYield = data.outputs.totals.fixed.E_y; // kWh per year for 1 kWp installed

        // 4. Cache and Return
        sessionStorage.setItem(cacheKey, annualYield.toString());
        return annualYield;

    } catch (err) {
        console.error("PVGIS API Error:", err);
        return null;
    }
};
