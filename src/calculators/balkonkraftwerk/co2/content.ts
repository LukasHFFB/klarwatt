import type { SeoContent } from '../../../types/content';

export const BalkonkraftwerkCo2Content: SeoContent = {
    intro: 'Wie viel CO₂ spart ein Balkonkraftwerk wirklich ein? Unser Rechner analysiert die gesamte ökologische Bilanz Ihrer Anlage – von den Emissionen bei der Herstellung (CO₂-Rucksack) bis hin zur jährlichen Vermeidung durch die Substitution des deutschen Strommixes.',

    howItWorks: 'Die Berechnung basiert auf dem aktuellen deutschen Strommix (380g CO₂/kWh laut Umweltbundesamt 2024). Dem gegenüber steht der energetische Rucksack der Produktion (ca. 600kg CO₂ pro kWp), der vor allem durch die energieintensive Silizium-Schmelze entsteht. Wir ermitteln den Zeitpunkt, an dem Ihre Anlage "klimapositiv" wird – also mehr CO₂ eingespart hat, als für ihre Entstehung benötigt wurde.',

    faq: [
        {
            question: 'Wann ist ein Balkonkraftwerk ökologisch sinnvoll?',
            answer: 'Ein Balkonkraftwerk ist fast immer ökologisch sinnvoll. In Deutschland liegt die <strong>energetische Amortisationszeit meist zwischen 1,5 und 3 Jahren</strong>. Da die Module über 25 Jahre halten, produziert die Anlage über 90 % ihrer Lebenszeit "sauberen" Strom ohne weitere Emissionen.',
        },
        {
            question: 'Wie hoch ist der CO₂-Rucksack bei der Herstellung?',
            answer: 'Die Produktion von Photovoltaik-Modulen benötigt viel Energie, insbesondere für die Reinigung von Silizium. Bei heutigen Modulen rechnet man mit ca. <strong>600 kg CO₂ pro Kilowatt Peak (kWp)</strong>. Stammen die Module aus einer Produktion mit hohem Anteil an erneuerbaren Energien (z.B. Europa), kann dieser Wert deutlich niedriger liegen.',
        },
        {
            question: 'Wie viele Bäume ersetzt ein Balkonkraftwerk?',
            answer: 'Eine durchschnittliche Buche in Mitteleuropa bindet etwa 12,5 kg CO₂ pro Jahr. Ein Balkonkraftwerk mit 800 Watt Modulleistung spart in Deutschland jährlich etwa 250–300 kg CO₂ ein. Das entspricht der <strong>CO₂-Bindung von ca. 20 bis 25 ausgewachsenen Bäumen</strong>.',
        },
        {
            question: 'Welchen Einfluss hat der deutsche Strommix?',
            answer: 'Je "schmutziger" das öffentliche Stromnetz ist, desto mehr CO₂ spart Ihre Solaranlage ein. Da Deutschland zunehmend Kohlekraftwerke abschaltet und durch Wind- und Solarkraft ersetzt, sinkt der CO₂-Faktor des Netzes (Substitutionseffekt) über die Jahre. Unser Rechner nutzt den aktuellsten Wert von 2024 als konservative Basis.',
        },
        {
            question: 'Ist die Entsorgung der Module in der CO₂-Bilanz enthalten?',
            answer: 'In dieser vereinfachten Berechnung ist der Entsorgungsaufwand nicht explizit enthalten, da Module heute zu über 90 % recycelt werden können (Glas, Aluminium, Silizium). Die CO₂-Emissionen für das Recycling sind im Vergleich zur energieintensiven Primärherstellung marginal.',
        },
    ],
};
