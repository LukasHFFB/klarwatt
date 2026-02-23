import type { SeoContent } from '../../../types/content';

export const CarportAmortisationContent: SeoContent = {
    metaTitle: 'Solar-Carport Amortisation 2026 | Wirtschaftlichkeit prüfen',
    metaDescription: 'Lohnt sich ein PV-Carport finanziell? Berechnen Sie Ihre persönliche Amortisationsdauer, Rendite (ROI) und den Gewinn auf Basis der Strompreisentwicklung.',

    introParagraphs: [
        'Die Investition in einen Solar-Carport ist eine doppelte: Sie schaffen eine schützende Infrastruktur für Ihr Fahrzeug und installieren gleichzeitig ein eigenes Kraftwerk. Die Frage der Amortisation – wann hat sich diese Gesamtinvestition durch gesparte Stromkosten abbezahlt – erfordert daher einen genauere Betrachtung als bei einer einfachen Dachanlage.',
        'Unser Amortisationsrechner simuliert die finanziellen Zahlungsflüsse (Cashflows) Ihres Solar-Carports über eine Laufzeit von 25 Jahren. Er verknüpft Ihren errechneten PV-Ertrag mit dem aktuellen Strompreis und einer realistisch geschätzten jährlichen Strompreissteigerung. Ausgehend von Ihren Investitionskosten ermittelt der Rechner auf den Monat genau, wann Sie den Break-Even-Point erreichen.',
        'Geben Sie dazu einfach Ihre geplanten Gesamtkosten (Netto) sowie Ihren Jahresstromverbrauch und den aktuellen Arbeitspreis ein. Vergessen Sie nicht: Wenn Sie ohnehin planen, ein neues Carport (ohne PV) bauen zu lassen, macht es für die reine Wirtschaftlichkeitsrechnung der PV-Anlage Sinn, nur die PV-Mehrkosten (Module, Verkabelung, Wechselrichter) in das Kaufpreis-Feld einzutragen.'
    ],

    sections: [
        {
            headline: 'Welche Faktoren bestimmen die Amortisation?',
            paragraphs: [
                'Grob gesagt: Hoher Ertrag plus hoher Eigenverbrauch führt zu einer kurzen Amortisation. Konkret spielen diese drei Hebel die größte Rolle:',
                'Die <strong>Strompreisentwicklung (Inflation)</strong>: Momentan ersetzen Sie beim Eigenverbrauch Strom für ca. 30 Cent/kWh. Steigt der Strompreis historisch bedingt um z.B. 3 % pro Jahr, liegt er in 10 Jahren bei rund 40 Cent. Damit erhöht sich der Wert des Solarstroms aus Ihrem Carport jedes Jahr ganz automatisch. Diesen Zinseszins-Effekt („Grid Parity“) bildet der Rechner präzise ab.',
                'Die <strong>Eigenverbrauchsquote</strong>: Ein nach Ost/West geneigtes Flachdach oder ein sehr smart gesteuertes Wallbox-System (E-Auto-Laden am hellichten Tag) erhöhen Ihren Deckungsgrad enorm. Da die Einspeisevergütung gesetzlich festgeschrieben ist (ca. 8 Cent), der eingekaufte Strom aber viermal so teuer ist, lohnt sich jede selbstverbrauchte Kilowattstunde massiv.',
                'Die <strong>Anschaffungskosten (CAPEX)</strong>: Gerade bei Carports variieren die Baukosten extrem. Ein High-End Design-Carport aus Aluminium mit integrierter LED-Beleuchtung und Glas-Glas-Modulen ist ein großartiges Premiumprodukt, treibt aber die Amortisationsjahre natürlich in die Höhe im Vergleich zu einer standardisierten Überdachung aus Konstruktionsvollholz (KVH).'
            ],
            bulletPoints: [
                'Je mehr kWh Solarstrom Sie selbst verbrauchen, desto schneller amortisiert sich die Anlage.',
                'Die erwartbare Strompreissteigerung beschleunigt die Gewinnzone jedes Jahr weiter.',
                'Investitionskosten: Rechnen Sie fair – wenn das Carport ohnehin gebaut worden wäre, kalkulieren Sie nur die PV-Aufpreise.'
            ]
        },
        {
            headline: 'Rendite (ROI): Ist ein Solar-Carport ein gutes Investment?',
            paragraphs: [
                'Betrachtet man einen Solar-Carport isoliert als Finanzprodukt, schneidet er in vielen Szenarien (bereinigt um die reinen Carportbaukosten) sehr gut ab. Ein ROI (Return on Investment) von über 100 % in 25 Jahren Laufzeit ist keine Seltenheit. Das bedeutet: Sie bekommen Ihr eingesetztes Kapital plus noch einmal denselben Betrag als reinen Gewinn (durch nicht gezahlte Stromrechnungen) zurück.',
                'Zudem ist es ein weitgehend risiko-freies Investment: Die Sonnenenergie steht lokal immer zur Verfügung und die gesetzlich fixierte Einspeisevergütung für den überschüssigen Strom sichert Ihnen 20 Jahre lang verlässlich einen Mindest-Cashflow zu (nach EEG 2024).'
            ],
            bulletPoints: [
                'Sichere und nachhaltige Rendite, oft zweistellig bei isolierter Betrachtung der PV-Kosten.',
                'Gesetzlich verankerte Fördersicherheit (EEG) über volle 20 Jahre (ab Datum Inbetriebnahme).',
                'Wertsteigerung der Immobilie: Ein moderner Solar-Parkplatz mit Wallbox wertet Ihr Eigenheim monetär spürbar auf.'
            ]
        },
        {
            headline: 'Mit oder ohne Speicherbau? Einfluss auf die Kasse',
            paragraphs: [
                'Spielen Sie mit dem Rechner das Szenario durch, einen Akku-Speicher hinzuzufügen. Das bedeutet konkret: Sie erhöhen die Investitionskosten (z.B. + 4.000 Euro) drastisch, dafür verringern Sie aber die Stromrechnung weiter (indem Sie den simulierten Eigenverbrauch hochsetzen).',
                'Speicher lohnen sich für Carports heute vor allem dann lukrativ, wenn das Elektroauto nicht tagsüber in der Sonne laden kann. Pendler, die ihr Auto erst um 18 Uhr unter das Dach stellen, können die Mittagssonne (gespeichert im Akku) am Abend in den Autotank überführen. Die Amortisationszeit des Gesamtsystems verschiebt sich dadurch aber aufgrund des höheren Kaufpreises fast immer leicht nach hinten.'
            ],
            bulletPoints: [
                'Stromspeicher erhöhen den Eigenverbrauch und die Autarkie spürbar.',
                'Durch die extra Kosten (Akku-Preise) amortisiert sich die Anlage als Ganzes in der Regel erst etwas später.',
                'Ideal für Pendler oder als Ergänzung zu stark zeitlich versetzten Haushaltslasten.'
            ]
        }
    ],

    faq: [
        {
            question: 'Wann hat sich ein typischer Solar-Carport bezahlt gemacht?',
            answer: 'Rechnet man die gesamten Bau- und PV-Kosten eines schlüsselfertigen Systems (ca. 10.000–15.000 Euro), liegt die Amortisation meist zwischen <strong>12 und 18 Jahren</strong>. Zieht man jedoch die Kosten für das bloße Tragwerk ab (die ja ohnehin als Parkplatzüberdachung angefallen wären), rentiert sich der PV-Teil oft schon nach <strong>6 bis 9 Jahren</strong>.'
        },
        {
            question: 'Sollte ich 0% Strompreissteigerung im Rechner eintragen?',
            answer: 'Das wäre eine sehr konservative kaufmännische Rechnung, die Sie machen können. Wenn Sie "0 %" angeben, frieren Sie den aktuellen Strompreis (z.B. 30 Cent) für die nächsten 25 Jahre ein. Historisch gesehen steigt Energie (durch Inflation und Netzausbaukosten) langfristig jedoch mit etwa <strong>2,5 bis 3,5 % pro Jahr</strong>. Wir empfehlen, die Voreinstellung von 3 % zu belassen, um ein realistischeres Bild der Inflationseffekte abzubilden.'
        },
        {
            question: 'Wie hoch ist die Einspeisevergütung beim Solar-Carport?',
            answer: 'Ein am Haus angeschlossener PV-Carport zählt formal nicht als Freiflächenanlage, sondern fällt in der Regel in die Standard-EEG-Vergütung für PV-Anlagen im Wohnumfeld. Für Anlagen bis 10 kWp sind das aktuell (2024/2025) <strong>knapp über 8 Cent pro Kilowattstunde</strong>. Dieser Wert gilt gesetzlich garantiert für 20 Kalenderjahre.'
        },
        {
            question: 'Müssen Reparaturen (z. B. Wechselrichter-Austausch) mit einberechnet werden?',
            answer: 'Die meisten Rechner – so auch dieser – arbeiten vereinfachend ohne die Anlage von Rücklagen für Reparaturen. In der Praxis sollten Sie damit rechnen, dass der elektronische <strong>Wechselrichter nach etwa 12 bis 15 Jahren einmal ausgetauscht werden muss</strong> (Kostenfaktor ca. 1.000 bis 1.500 Euro inkl. Montage). PV-Module selbst halten meist problemlos über 25 Jahre.'
        }
    ]
};
