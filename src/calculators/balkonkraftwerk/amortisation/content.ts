import type { SeoContent } from '../../../types/content';

export const BalkonkraftwerkAmortisationContent: SeoContent = {
    metaTitle: 'Balkonkraftwerk Amortisationsrechner',
    metaDescription: 'Wann hat sich ein Balkonkraftwerk rentiert? Berechnen Sie die Amortisationszeit unter Berücksichtigung von Strompreissteigerungen.',
    introParagraphs: [
        'Wann hat sich mein Balkonkraftwerk bezahlt gemacht? Unser Amortisationsrechner liefert Ihnen die Antwort. Er berücksichtigt nicht nur den aktuellen Ertrag, sondern auch zukünftige Strompreissteigerungen und die lange Lebensdauer moderner Solarmodule.'
    ],
    sections: [
        {
            headline: 'So funktioniert der Rechner',
            paragraphs: [
                'Die Amortisationsrechnung stellt die einmaligen Anschaffungskosten den jährlichen Stromersparnissen gegenüber. Da wir davon ausgehen, dass der Strompreis historisch bedingt um ca. 3 % pro Jahr steigt, verkürzt sich die Amortisationszeit im Vergleich zu einer statischen Rechnung deutlich. Wir berechnen den Punkt, an dem die kumulierte Ersparnis die Investition übersteigt.'
            ]
        }
    ],
    faq: [
        {
            question: 'Was ist eine realistische Amortisationszeit?',
            answer: 'Bei heutigen Preisen für Balkonkraftwerke (ca. 400–600 €) und Strompreisen um 30 Cent amortisiert sich eine Anlage meist nach <strong>4 bis 7 Jahren</strong>. Bei optimaler Ausrichtung und hohem Eigenverbrauch kann dieser Wert sogar noch sinken.',
        },
        {
            question: 'Wie erhöhe ich die Wirtschaftlichkeit?',
            answer: 'Der wichtigste Hebel ist der <strong>Eigenverbrauch</strong>. Nutzen Sie stromintensive Geräte wie Waschmaschine oder Geschirrspüler bevorzugt dann, wenn die Sonne scheint. Jede selbst verbrauchte Kilowattstunde ist etwa das Dreifache wert von dem, was Sie bei großen PV-Anlagen als Einspeisevergütung erhielten.',
        },
        {
            question: 'Lohnt sich ein teures Balkonkraftwerk?',
            answer: 'Ein höherer Anschaffungspreis sollte durch eine bessere Qualität (z.B. längere Garantie, bifaziale Module) oder einen effizienteren Wechselrichter gerechtfertigt sein. Ein Aufpreis von 200 € verlängert die Amortisation oft um 2 bis 3 Jahre, was sich über eine Lebensdauer von 25 Jahren dennoch lohnen kann.',
        },
        {
            question: 'Sind Wartungskosten zu berücksichtigen?',
            answer: 'Balkonkraftwerke sind nahezu wartungsfrei. Lediglich der Wechselrichter könnte theoretisch nach 12–15 Jahren getauscht werden müssen (Kosten ca. 100–150 €). Die meisten modernen Wechselrichter halten jedoch ebenfalls deutlich länger, weshalb wir sie in der Basis-Rechnung vernachlässigen.',
        },
        {
            question: 'Wie wird die Strompreissteigerung berechnet?',
            answer: 'Unser Rechner nutzt einen konservativen Wert von <strong>3 % Steigerung pro Jahr</strong>. Dies entspricht dem langjährigen Mittelwert in Deutschland. Sollte der Strompreis schneller steigen, amortisiert sich Ihre Anlage noch schneller.',
        },
    ],
};
