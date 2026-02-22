import { resolvePlz } from './plz';

export interface PVGISData {
    annualYield: number;       // kWh/kWp/year (E_y from PVGIS, optimal angles)
    monthlyYields: number[];   // 12 values, kWh/kWp/month (E_m from PVGIS)
    location: { lat: number; lon: number };
}

export const fetchIrradiance = async (
    plz: string,
    tilt?: number,
    azimuth?: number
): Promise<PVGISData | null> => {
    // 1. Check session cache (include tilt/azimuth in key for uniqueness)
    const cacheKey = `pvgis_${plz}_t${tilt ?? 'opt'}_a${azimuth ?? 'opt'}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
        return JSON.parse(cached) as PVGISData;
    }

    // 2. Resolve coordinates via Nominatim
    const coords = await resolvePlz(plz);
    if (!coords) return null;

    // 3. Call PVGIS API via relative path (proxied by Vite in dev, Vercel in prod)
    const pvgisBase = '/api/pvgis/v5_2/PVcalc';

    try {
        const url = new URL(pvgisBase, window.location.origin);
        url.searchParams.append('lat', coords.lat.toString());
        url.searchParams.append('lon', coords.lon.toString());
        url.searchParams.append('peakpower', '1');
        url.searchParams.append('loss', '14');
        url.searchParams.append('outputformat', 'json');

        if (tilt === undefined) {
            url.searchParams.append('optimalangles', '1');
        } else {
            url.searchParams.append('angle', tilt.toString());
            // Map our azimuth (180=South) to PVGIS aspect (0=South, -90=East, 90=West)
            const aspect = azimuth !== undefined ? (azimuth - 180) : 0;
            url.searchParams.append('aspect', aspect.toString());
        }

        url.searchParams.append('pvtechchoice', 'crystSi');
        url.searchParams.append('mountingplace', 'building');

        const response = await fetch(url.toString());
        if (!response.ok) throw new Error(`PVGIS HTTP Error: ${response.status}`);

        const data = await response.json();

        // Yearly yield: E_y
        const annualYield: number = data.outputs.totals.fixed.E_y;
        const monthlyYields: number[] = (data.outputs.monthly.fixed as Array<{ E_m: number }>)
            .map(m => m.E_m);

        const result: PVGISData = {
            annualYield,
            monthlyYields,
            location: coords,
        };

        // 4. Cache and return
        sessionStorage.setItem(cacheKey, JSON.stringify(result));
        return result;

    } catch (err) {
        console.error('PVGIS API Error:', err);
        return null;
    }
};
