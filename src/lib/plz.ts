export interface Coordinates {
    lat: number;
    lon: number;
}

export const resolvePlz = async (plz: string): Promise<Coordinates | null> => {
    if (plz.length !== 5 || !/^\d{5}$/.test(plz)) return null;

    // Check sessionStorage cache first
    const cacheKey = `plz_coords_${plz}`;
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) {
        return JSON.parse(cached) as Coordinates;
    }

    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(plz)},Germany&format=json&limit=1&countrycodes=de`;
        const response = await fetch(url, {
            headers: {
                // Required by Nominatim usage policy
                'Accept': 'application/json',
            }
        });
        if (!response.ok) return null;

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) return null;

        const coords: Coordinates = {
            lat: parseFloat(data[0].lat),
            lon: parseFloat(data[0].lon),
        };

        sessionStorage.setItem(cacheKey, JSON.stringify(coords));
        return coords;
    } catch (error) {
        console.error('Nominatim geocoding error:', error);
        return null;
    }
};
