import type { SeoContent } from '../../../types/content';

/**
 * SEO content for the Balkonkraftwerk Ertragsrechner.
 *
 * To update this content, edit the strings below or regenerate
 * using the LLM prompt template in src/types/content.ts.
 */
export const BalkonkraftwerkContent: SeoContent = {
    intro: 'Ein Balkonkraftwerk (auch Stecker-Solargerät oder Plug-in-PV genannt) ist eine Mini-Photovoltaikanlage, die sich mit einem einfachen Schuko-Stecker ans Hausnetz anschließen lässt. Unser Ertragsrechner ermittelt auf Basis Ihrer PLZ, Modulleistung und Ausrichtung, wie viel Strom Ihre Anlage realistisch produziert – und wie schnell sie sich amortisiert.',

    howItWorks: 'Der Rechner bezieht historische Einstrahlungsdaten (Mittel 2005–2023) direkt von der PVGIS-Datenbank des EU Joint Research Centre für Ihren genauen Standort. Die Rohleistung wird mit dem Performance Ratio (75 %) korrigiert, der Wärme-, Wechselrichter- und Leitungsverluste abbildet. Den Eigenverbrauchsanteil schätzt das Modell auf Basis Ihres Jahresverbrauchs nach der HTW-Berlin-Methodik: Je höher Ihr Verbrauch, desto mehr der erzeugten Kilowattstunden treffen auf laufende Lasten im Haushalt.',

    faq: [
        {
            question: 'Was ist ein Balkonkraftwerk?',
            answer: 'Ein Balkonkraftwerk ist eine kleine Photovoltaikanlage mit einer Leistung von üblicherweise 300–800 Watt, die per Schuko-Stecker in eine normale Haushaltssteckdose eingesteckt wird. Der erzeugte Strom wird direkt ins Hausnetz eingespeist und reduziert den Bezug vom Energieversorger. Seit 2024 sind Anlagen bis 800 W in Deutschland ohne separate Baugenehmigung zulässig und müssen nur noch beim Netzbetreiber (Marktstammdatenregister) angemeldet werden.',
        },
        {
            question: 'Wie hoch ist der typische Jahresertrag eines Balkonkraftwerks?',
            answer: 'Als Faustregel gilt: Eine Anlage mit <strong>800 Wp bei Südausrichtung und 30° Neigung</strong> erzeugt in Deutschland zwischen 650 kWh (Hamburg/Norden) und 850 kWh (München/Süden) pro Jahr. Bei Ost-/Westausrichtung oder senkrechter Montage am Geländer sind es 15–30 % weniger. Unser Rechner verwendet PVGIS-Satellitendaten für Ihre exakte PLZ, sodass Sie kein generisches Mittel, sondern standortgenaue Werte erhalten.',
        },
        {
            question: 'Gibt es eine Einspeisevergütung für Balkonkraftwerke?',
            answer: 'Nein. Gemäß <strong>EEG §9 schreibt der Gesetzgeber für Anlagen bis 800 W die unvergütete Einspeisung</strong> vor: Überschüssiger Strom fließt ins Netz, wird aber nicht bezahlt. Die Ersparnis entsteht ausschließlich durch Eigenverbrauch – also durch den Anteil des Solarstroms, den Sie gleichzeitig im Haushalt verbrauchen und damit nicht aus dem Netz kaufen müssen.',
        },
        {
            question: 'Wann amortisiert sich ein Balkonkraftwerk?',
            answer: 'Bei einem Kaufpreis von ca. 400–700 € und einer typischen Ersparnis von 100–200 €/Jahr ergibt sich eine Amortisationszeit von <strong>3 bis 6 Jahren</strong>. Da die meisten Module 20–25 Jahre halten, bleiben danach viele Jahre kostenloser Strom. Entscheidend ist Ihr Strompreis: Bei 0,30 €/kWh amortisiert die Anlage etwa 40 % schneller als bei 0,20 €/kWh.',
        },
        {
            question: 'Muss ich mein Balkonkraftwerk anmelden?',
            answer: 'Ja – aber es ist einfach. Seit dem Solarpaket I (2024) genügt eine vereinfachte Registrierung im <strong>Marktstammdatenregister (MaStR)</strong> der Bundesnetzagentur. Eine Genehmigung des Netzbetreibers ist nicht mehr erforderlich. Die Anmeldung dauert etwa 10 Minuten und ist kostenlos.',
        },
        {
            question: 'Welche Ausrichtung ist optimal?',
            answer: 'Die beste Ausrichtung ist <strong>Süd mit einem Neigungswinkel von 30–35°</strong> – das entspricht ca. 100 % des maximalen Jahresertrags. Ost und West liegen bei etwa 82 %, was für den Eigenverbrauchsanteil sogar vorteilhafter sein kann, da Strom morgens und abends erzeugt wird. Nord ist weniger empfehlenswert (ca. 60 %), aber selbst dort lohnt sich eine Anlage bei günstigen Strompreisen.',
        },
    ],
};
