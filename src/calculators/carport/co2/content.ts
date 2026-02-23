import type { SeoContent } from '../../../types/content';

export const CarportCo2Content: SeoContent = {
    metaTitle: 'Solar-Carport CO₂-Rechner | Ökologische Bilanz berechnen',
    metaDescription: 'Berechnen Sie die CO₂-Einsparung Ihres Solar-Carports: Netto-Bilanz, energetische Amortisation und das Äquivalent in gefahrenen Auto-Kilometern.',

    introParagraphs: [
        'Ein Solar-Carport ist nicht nur ein architektonisches Highlight und ein Schattenspender für Ihr Auto – er ist ein essenzieller Baustein der Energiewende. Während ein normales Carport aus Holz oder Stahl Ressourcen verbraucht, ohne etwas zurückzugeben, wird ein Solar-Carport mit jedem Sonnenstrahl zu einem aktiven Klimaschützer.',
        'Doch ab wann ist ein Solar-Carport wirklich klimaneutral? Die Herstellung der Solarmodule und der massiven Tragstruktur (oft aus Stahl oder Holz) verursacht zunächst CO₂-Emissionen – den sogenannten „CO₂-Rucksack“. Sobald die Anlage jedoch in Betrieb geht, produziert sie sauberen Strom und verdrängt fossilen Graustrom (Kohle, Gas) aus dem öffentlichen Netz.',
        'Unser CO₂-Rechner macht diesen Prozess auf Basis wissenschaftlicher Daten (Fraunhofer ISE und Umweltbundesamt 2024) für Ihren spezifischen Standort und Ihr geplantes Carport transparent. Er berechnet die sogenannte energetische Amortisation, die Netto-CO₂-Bilanz über 25 Jahre und veranschaulicht Ihre Ersparnis im Vergleich zur CO₂-Bindung von Bäumen oder dem Ausstoß eines Verbrenner-Autos.'
    ],

    sections: [
        {
            headline: 'Der CO₂-Rucksack: Was kostet die Produktion?',
            paragraphs: [
                'Jede Photovoltaikanlage „kostet“ in der Herstellung Energie. Silizium muss unter hohem Energieaufwand geschmolzen werden, Aluminiumrahmen werden gepresst und die Komponenten oft aus Asien nach Europa transportiert. Das Fraunhofer ISE beziffert diesen CO₂-Rucksack für moderne PV-Systeme auf etwa 600 kg CO₂ pro Kilowatt-Peak (kWp) installierter Leistung.',
                'Bei einem typischen Doppelcarport mit 5 kWp Solarleistung startet die Anlage also mit einem theoretischen Rückstand von rund 3.000 kg CO₂. Dies mag zunächst nach viel klingen, ist jedoch im Vergleich zur langjährigen Lebensdauer und Leistung der Anlage ein verschwindend geringer Wert. (Hinweis: Die Emissionen für das Fundament und Holz/Stahl des Carports selbst werden hier nicht mitgerechnet, da sie bei einem Bau eines Carports ohnehin anfallen würden).'
            ],
            bulletPoints: [
                'CO₂-Rucksack für Module und Wechselrichter: ~600 kg pro installiertem kWp.',
                'Ein 5 kWp Carport startet mit rund 3.000 kg CO₂-Schuld.',
                'Lebensdauer der PV-Module: Mindestens 25 bis 30 Jahre.'
            ]
        },
        {
            headline: 'Die CO₂-Vermeidung: Strommix verdrängen',
            paragraphs: [
                'Der deutsche Strommix ist durch den Anteil an Kohle- und Gaskraftwerken nach wie vor nicht klimaneutral. Das Umweltbundesamt (UBA) ermittelt jährlich den Emissionsfaktor des deutschen Stromnetzes. Aktuell (2024) verursacht jede Kilowattstunde (kWh) Strom aus der Steckdose im Durchschnitt ca. 380 Gramm CO₂.',
                'Sobald Ihr Solar-Carport läuft, produzieren Sie 100 % emissionsfreien Strom. Für jede Kilowattstunde, die Sie selbst nutzen oder ins Netz einspeisen, muss ein konventionelles Kraftwerk weniger Strom produzieren. Die Rechnung ist simpel: Ein 5-kWp-Carport, das an Ihrem Wohnort im Jahr 4.500 kWh erzeugt, vermeidet jährlich rund 1.700 kg CO₂ (4.500 kWh × 0,380 kg CO₂).'
            ],
            bulletPoints: [
                'Deutscher Strommix (2024): ~380 Gramm CO₂ pro Kilowattstunde.',
                '100 % emissionsfreier Ertrag durch das Carport-Dach.',
                'Einspeisung hilft dem gesamten Netz: Auch nicht selbst verbrauchter Strom drückt den fossilen Anteil im Strommix.'
            ]
        },
        {
            headline: 'Energetische Amortisation: Der Point-of-Break-Even',
            paragraphs: [
                'Die spannendste Frage in der Ökobilanz lautet: Wie lange dauert es, bis die Solaranlage genau so viel CO₂ eingespart hat, wie ihre Herstellung verursacht hat? Das ist die sogenannte „energetische Amortisationszeit“ (Energy Payback Time).',
                'In Deutschland liegt dieser Wert für typische PV-Anlagen (inklusive Flachdach-/Carportsysteme) bei etwa 1,5 bis 2,5 Jahren – stark abhängig von Ihrem lokalen Ertrag (Süddeutschland vs. Norddeutschland). Das bedeutet: Wenn Sie heute einen Solar-Carport bauen, betreiben Sie diesen 2 Jahre lang, um „klimaneutral“ zu werden. Danach läuft die Anlage für weitere 23 Jahre absolut klimapositiv und spart Jahr für Jahr massive Mengen Treibhausgase ein.'
            ],
            bulletPoints: [
                'Energetische Amortisation (CO₂-Break-Even): Meist nach 1,5 bis 2,5 Jahren erreicht.',
                'Nach dem Break-Even arbeitet die Anlage rein klimapositiv.',
                'Über 25 Jahre spart ein 5-kWp-Carport locker 40 Tonnen CO₂ netto ein.'
            ]
        },
        {
            headline: 'Der Elektroauto-Effekt',
            paragraphs: [
                'Ein Carport ist der natürliche Parkplatz für ein Auto. Wenn unter dem Solar-Carport ein Elektrofahrzeug (BEV) lädt, wird die CO₂-Bilanz besonders transparent: Ein durchschnittlicher moderner Verbrenner stößt etwa 150 Gramm CO₂ pro gefahrenem Kilometer aus. Der Fahrstrom aus Ihrem Carport ist emissionsfrei (0 Gramm).',
                'Laden Sie 4.000 kWh PV-Strom aus dem Carport in Ihr Elektroauto, entspricht das etwa 20.000 bis 25.000 rein solar gefahrenen Kilometern pro Jahr. Im Gegensatz zu fossilen Treibstoffen, bei denen jeder gefahrene Kilometer das Klima belastet, fahren Sie die Strecken, die aus eigener PV-Produktion gedeckt sind, zu 100 % klimaneutral. Unser CO₂-Rechner zeigt Ihnen direkt an, wie viele „Autofahrt-Kilometer“ Ihre Anlage ausgleicht.'
            ],
            bulletPoints: [
                'Solarstrom ist der sauberste Kraftstoff für die Elektromobilität.',
                'Vergleich: Verbrenner verursachen ca. 150g CO₂/km, PV-Strom 0g CO₂/km.',
                'Das direkte „Überschussladen“ maximiert die ökologische und ökonomische Nutzung des Carports.'
            ]
        }
    ],

    faq: [
        {
            question: 'Wie hoch ist der CO₂-Rucksack eines Solar-Carports?',
            answer: 'Der CO₂-Rucksack der reinen Photovoltaik-Komponenten (Module, Verkabelung, Wechselrichter) liegt bei etwa <strong>600 kg CO₂ pro kWp</strong>. Ein 5 kWp großes Solar-Dach startet also mit rund 3.000 kg Herstellungs-Emissionen.'
        },
        {
            question: 'Wann ist der Solar-Carport klimaneutral?',
            answer: 'Durchschnittlich dauert es in Deutschland <strong>etwa 1,5 bis 2,5 Jahre</strong> (energetische Amortisationsdauer), bis ein Carport so viel CO₂ durch die Stromerzeugung eingespart hat, wie in seiner Herstellung verursacht wurde. Danach läuft die Anlage 20 Jahre und länger rein klimapositiv.'
        },
        {
            question: 'Wie viele Bäume ersetzt ein Solar-Carport?',
            answer: 'Ein ausgewachsener Baum (z. B. eine Buche) bindet pro Jahr durchschnittlich 12,5 kg CO₂. Da ein 5-kWp-Solar-Carport im Jahr etwa 1.700 kg CO₂ einspart, entspricht die Klimawirkung der Anlage in etwa der „Arbeit“ von <strong>über 130 gepflanzten Bäumen</strong>.'
        },
        {
            question: 'Sollte ich Holz oder Aluminium für den Carport wählen?',
            answer: 'Aus einer reinen CO₂-Perspektive ist <strong>Holz (idealerweise aus regionaler, zertifizierter Forstwirtschaft)</strong> das bessere Baumaterial. Ein Holzcarport bindet sogar CO₂ in der Tragstruktur, während Aluminium sehr energieintensiv geschmolzen und verarbeitet werden muss. Qualitativ und statisch können jedoch beide Materialien exzellent für PV-Carports eingesetzt werden.'
        }
    ]
};
