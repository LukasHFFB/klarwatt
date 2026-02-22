import type { SeoContent } from '../../../types/content';

export const SolaranlageContent: SeoContent = {
    intro: 'Eine Photovoltaikanlage auf dem Hausdach ist der Klassiker der privaten Energiewende. Mit unserem Ertragsrechner ermitteln Sie für Ihren Standort in Deutschland, wie viel Strom Sie erzeugen können und ab wann sich die Investition durch Eigenverbrauch und Einspeisevergütung rechnet.',

    howItWorks: 'Die Berechnung kombiniert lokale Einstrahlungsdaten von PVGIS mit den aktuellen Vergütungssätzen des Erneuerbare-Energien-Gesetzes (EEG). Wir berücksichtigen dabei, dass Sie einen Teil des Stroms direkt im Haushalt verbrauchen (Strompreis-Ersparnis) und den Rest gegen eine feste Vergütung ins öffentliche Netz einspeisen.',

    faq: [
        {
            question: 'Lohnt sich eine Solaranlage auf dem Hausdach noch?',
            answer: 'Ja, absolut. Zwar ist die Einspeisevergütung gesunken, aber durch die gestiegenen Strompreise ist der <strong>Eigenverbrauch zur wichtigsten Renditequelle</strong> geworden. Jede Kilowattstunde, die Sie nicht für ca. 30 Cent kaufen müssen, spart Ihnen bares Geld. Die Amortisationszeiten liegen heute meist zwischen 8 und 12 Jahren.',
        },
        {
            question: 'Sollte ich mein ganzes Dach vollmachen?',
            answer: 'In den meisten Fällen: Ja. Die Grenzkosten für zusätzliche Module sind gering, da Gerüst und Wechselrichter ohnehin vorhanden sind. Eine größere Anlage produziert zudem bei bewölktem Himmel mehr Strom, was den Eigenverbrauch im Winter erhöht.',
        },
        {
            question: 'Wie hoch ist die Einspeisevergütung 2025?',
            answer: 'Für Anlagen bis 10 kWp erhalten Sie bei Teileinspeisung aktuell ca. <strong>8,0 Cent pro kWh</strong> (fix für 20 Jahre). Bei größeren Anlagen bis 40 kWp sinkt der Satz leicht ab. Wir aktualisieren diese Werte vierteljährlich in unserem Rechner.',
        },
        {
            question: 'Brauche ich zwingend einen Speicher?',
            answer: 'Ein Speicher erhöht die Eigenverbrauchsquote von ca. 30 % auf bis zu 70 %. Ob er sich wirtschaftlich lohnt, hängt vom Aufpreis ab. In unserer Detail-Analyse (siehe Speicher-Rechner) können Sie dies exakt gegenüberstellen.',
        },
        {
            question: 'Welche Rolle spielt die Dachneigung?',
            answer: 'Optimal ist in Deutschland eine Südausrichtung mit 30° bis 35° Neigung. Aber auch Ost-West-Dächer sind sehr attraktiv, da sie den Strom gleichmäßiger über den Tag verteilen und so den Eigenverbrauch am Morgen und Abend unterstützen.',
        },
    ],
};
