import type { SeoContent } from '../../../types/content';

export const SolarzaunCo2Content: SeoContent = {
    metaTitle: 'Solarzaun CO2-Rechner',
    metaDescription: 'Berechnen Sie die ökologische Amortisation und CO2-Ersparnis Ihres Solarzauns.',
    introParagraphs: [
        "Der Solarzaun ist nicht nur eine funktionale Grundstücksgrenze, sondern ein aktiver Beitrag zum Klimaschutz. Durch die vertikale Aufstellung bifazialer Module wird CO₂ eingespart, während gleichzeitig Flächen doppelt genutzt werden."
    ],
    sections: [
        {
            headline: 'So funktioniert der Rechner',
            paragraphs: [
                "Unser CO₂-Rechner vergleicht den erzeugten Solarstrom mit dem aktuellen deutschen Strommix (Umweltbundesamt). Dabei berücksichtigen wir auch den 'ökologischen Rucksack' der Produktion (ca. 600 kg CO₂ pro kWp) und berechnen die energetische Amortisation – also den Zeitpunkt, ab dem Ihr Zaun mehr CO₂ eingespart hat, als für seine Herstellung emittiert wurde."
            ]
        }
    ],
    faq: [
        {
            question: "Wie viel CO₂ spart ein Solarzaun pro Jahr?",
            answer: "Ein typischer 5 kWp Solarzaun spart in Deutschland etwa 1.800 bis 2.200 kg CO₂ pro Jahr ein, abhängig von der Ausrichtung und dem lokalen Standort."
        },
        {
            question: "Was bedeutet 'ökologischer Rucksack'?",
            answer: "Dies sind die Emissionen, die bei der Herstellung, dem Transport und der Montage der PV-Module und der Zaunkonstruktion anfallen. Moderne Systeme haben diesen Rucksack meist nach 1,5 bis 2,5 Jahren 'abgearbeitet'."
        },
        {
            question: "Sind vertikale Module weniger umweltfreundlich?",
            answer: "Im Gegenteil: Da sie im Winter bei tiefstehender Sonne besonders viel Strom liefern (wenn der Netzstrom oft einen höheren CO₂-Anteil hat), ist ihr ökologischer Nutzen pro erzeugter Kilowattstunde oft sogar höher als bei flach installierten Anlagen."
        },
        {
            question: "Wie viele Bäume ersetzt ein Solarzaun?",
            answer: "Eine Buche bindet etwa 12,5 kg CO₂ pro Jahr. Ein 5 kWp Solarzaun entspricht somit der CO₂-Leistung von über 150 ausgewachsenen Bäumen."
        }
    ]
};
