export interface Coordinates {
    lat: number;
    lon: number;
}

export const resolvePlz = async (plz: string): Promise<Coordinates | null> => {
    if (plz.length !== 5) return null;

    try {
        // In production this would be a large bundled JSON
        const response = await fetch('/data/plz-mapping.json');
        if (!response.ok) return null;

        const data: Record<string, Coordinates> = await response.json();
        return data[plz] || null;
    } catch (error) {
        console.error('Failed to resolve PLZ:', error);
        return null;
    }
};
