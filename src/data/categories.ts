export interface Category {
    slug: string;
    title: string;
    description: string;
    iconName: string; // matches lucide-react icon
    calculatorCount: number;
}

export const CATEGORIES: Category[] = [
    { slug: 'balkonkraftwerk', title: 'Balkonkraftwerk', description: 'Rechnen Sie Ertrag und Amortisation Ihres Steckersolargeräts.', iconName: 'Sun', calculatorCount: 7 },
    { slug: 'hausdach', title: 'Hausdach', description: 'Umfassende Planung für private Dachanlagen mit und ohne Speicher.', iconName: 'Home', calculatorCount: 10 },
    { slug: 'speicher', title: 'Stromspeicher', description: 'Lohnt sich ein Speicherkäfig? Kapazität, Zyklen und Rentabilität.', iconName: 'Battery', calculatorCount: 5 },
    { slug: 'camper-van', title: 'Camper & Van', description: 'Autarkie auf Rädern: Inselsysteme, 12V Batteriebank und Solarkoffer.', iconName: 'Car', calculatorCount: 6 },
    { slug: 'solarzaun', title: 'Solarzaun', description: 'Bifaziale Module als Grundstücksgrenze. Ertragsprofile im Winter.', iconName: 'AlignJustify', calculatorCount: 5 },
    { slug: 'carport', title: 'Solar-Carport', description: 'Parkplatz als Kraftwerk. Optionen für Holz- und Alukonstruktionen.', iconName: 'Warehouse', calculatorCount: 5 },
    { slug: 'gartenhaus', title: 'Gartenhaus', description: 'Inselanlagen für Schrebergärten ohne Netzanschluss.', iconName: 'Tent', calculatorCount: 4 },
    { slug: 'waermepumpe', title: 'Wärmepumpe', description: 'Deckungsgrad einer PV-Anlage für den Betrieb einer Luft-Wasser-WP.', iconName: 'ThermometerSun', calculatorCount: 3 },
    { slug: 'elektroauto', title: 'Elektroauto (Wallbox)', description: 'Überschussladen simulieren. Wann wird mein Auto wirklich voll?', iconName: 'Zap', calculatorCount: 3 },
    { slug: 'agrivoltaik', title: 'Agri-PV', description: 'Landwirtschaftliche Doppelnutzung. Ertrag vs. Verschattungsgrad.', iconName: 'Tractor', calculatorCount: 3 },
    { slug: 'pergola', title: 'Solar-Terrasse', description: 'Lichtdurchlässige Glas-Glas-Module als Terrassenüberdachung.', iconName: 'CloudSun', calculatorCount: 2 },
    { slug: 'bipv', title: 'Gebäudeintegrierte PV', description: 'Solardachziegel und Fassadenmodule: Kosten-Nutzen-Analyse.', iconName: 'Building', calculatorCount: 2 },
    { slug: 'tools', title: 'Universal-Tools', description: 'Sonnenstandsrechner, Leitungsquerschnitte, PLZ-Abfrage.', iconName: 'Wrench', calculatorCount: 1 },
];
