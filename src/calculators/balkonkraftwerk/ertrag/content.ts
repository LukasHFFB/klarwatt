import type { SeoContent } from '../../../types/content';

export const BalkonkraftwerkErtragContent: SeoContent = {
    metaTitle: 'Balkonkraftwerk Ertragsrechner 2026 | Klarwatt',
    metaDescription:
        'Wie viel spart Ihr Balkonkraftwerk wirklich? Ertrag, Amortisation & Eigenverbrauch – kostenlos berechnen. Individuell nach PLZ, Ausrichtung & Strompreis.',

    introParagraphs: [
        'Ein Balkonkraftwerk ist die einfachste Möglichkeit, eigenen Solarstrom zu erzeugen und die Stromrechnung spürbar zu senken – ganz ohne Hauseigentum, Dachmontage oder aufwändige Genehmigungsverfahren. Doch bevor Sie investieren, stellt sich eine entscheidende Frage: Wie viel Ertrag, Ersparnis und CO₂-Einsparung können Sie von Ihrer konkreten Anlage tatsächlich erwarten? Unser Balkonkraftwerk Ertragsrechner liefert Ihnen eine fundierte, standortgenaue Antwort – in Sekunden.',
        'Die Grundlage der Berechnung ist Ihr individueller Solarstandort. Anhand Ihrer Postleitzahl ruft der Rechner die mittlere Jahresstrahlung (kWh/m²) für Ihren Wohnort ab – ein Wert, der in Deutschland erheblich variiert: von rund 950 kWh/m² in Schleswig-Holstein bis über 1.250 kWh/m² im Alpenvorland. Kombiniert mit Ihrer Anlagengröße (kWp), Himmelsrichtung, Modulneigung und Ihrem Jahresstromverbrauch errechnet das Modell nicht nur den Jahresertrag in Kilowattstunden, sondern auch Ihre reale Eigenverbrauchsquote – denn nur der selbst verbrauchte Strom spart bares Geld.',
        'Ob Sie ein klassisches 800-Watt-Plug-in-Gerät auf dem Südbalkon planen oder eine Ost-West-Kombination auf der Terrasse prüfen: Dieser Rechner zeigt Ihnen ehrlich, was Sie erwartet. Kein Marketing, keine Hochglanzversprechen – nur belastbare Physik, transparente Methodik und verständliche Ergebnisse.',
    ],

    sections: [
        {
            headline: 'Wie der Ertragsrechner funktioniert: Schritt für Schritt',
            paragraphs: [
                'Der Rechner folgt einem physikalisch fundierten Modell, das in fünf Schritten vom Sonnenschein zur Euroersparnis führt. Im ersten Schritt wird die standortspezifische Jahresstrahlung (H_glob) aus der PVGIS-5.2-Datenbank des Europäischen Gemeinsamen Forschungszentrums abgerufen. Dieser Wert basiert auf Satellitenmessungen der Jahre 2005 bis 2023 und stellt den zuverlässigsten öffentlich verfügbaren Referenzwert für Deutschland dar.',
                'Im zweiten Schritt wird die Nennleistung Ihrer Anlage (kWp) mit der Jahresstrahlung und einem Performance Ratio von 0,75 multipliziert. Das Performance Ratio berücksichtigt reale Verluste durch Temperaturkoeffizienten, Leitungswiderstände, Wechselrichterwirkungsgrad und Reflexionsverluste. Es ist der Standardwert der Solarbranche und liegt für gut installierte Kleinanlagen in der Praxis zwischen 0,72 und 0,80.',
                'Schritt drei korrigiert den Rohertrag um Ihren spezifischen Azimut- und Neigungsfaktor. Schritt vier bestimmt Ihren Eigenverbrauch anhand des HTW-Berlin-Simultaneous-Use-Modells: Je höher Ihr Jahresverbrauch, desto größer der Anteil der Solarproduktion, der gleichzeitig mit einem Haushaltsbedarf zusammentrifft. Im fünften und letzten Schritt wird der Eigenverbrauch mit Ihrem Strompreis multipliziert – das ergibt Ihre reale jährliche Ersparnis. Die Amortisationszeit folgt aus Anschaffungspreis geteilt durch Jahresersparnis.',
            ],
            bulletPoints: [
                'Strahlungsdaten: PVGIS 5.2 (EU JRC), Mittel 2005–2023',
                'Performance Ratio: 0,75 (Branchenstandard)',
                'Azimut- und Neigungskorrektur für optimale Genauigkeit',
                'Eigenverbrauchsmodell: HTW Berlin „Photovoltaik-Speicher-Inspektion"',
                'Ersparnis nur aus Eigenverbrauch – keine Einspeisevergütung eingerechnet',
            ],
        },
        {
            headline: 'Jahresertrag in Deutschland: Was ist realistisch?',
            paragraphs: [
                'In Deutschland erzeugt ein Balkonkraftwerk mit 800 Wp (zwei Module à 400 Wp) unter optimalen Bedingungen zwischen 650 und 950 kWh pro Jahr. Die Spannbreite ergibt sich aus den erheblichen regionalen Unterschieden in der Sonneneinstrahlung sowie aus der Ausrichtung und Neigung der Module. Ein Haushalt in München mit Südausrichtung und 32° Neigung liegt am oberen Ende, ein Haushalt in Hamburg mit Ostausrichtung und flacher Balkonbrüstung am unteren.',
                'Zum Vergleich: Der durchschnittliche Jahresverbrauch eines Einpersonenhaushalts in Deutschland beträgt etwa 1.500 kWh, ein Zweipersonenhaushalt verbraucht rund 2.500 kWh. Ein gut positioniertes 800-Watt-Balkonkraftwerk kann also zwischen 25 und 50 % des Jahresverbrauchs eines Einpersonenhaushalts abdecken – allerdings nur dann, wenn der Strom auch im Moment seiner Erzeugung im Haushalt gebraucht wird.',
                'Entscheidend ist die Eigenverbrauchsquote. Da Balkonkraftwerke in Deutschland keine Einspeisevergütung erhalten (EEG §9), zählt nur der direkt selbst genutzte Strom für die finanzielle Bilanz. Der Rechner berechnet diese Quote individuell auf Basis Ihres Jahresverbrauchs: Bei einem Haushalt mit 2.500 kWh/Jahr liegt sie typischerweise bei 65–75 %, bei einem Haushalt mit 1.500 kWh/Jahr eher bei 55–65 %.',
            ],
            bulletPoints: [
                '800 Wp Süd, Bayern: ~900–950 kWh/Jahr',
                '800 Wp Süd, Mitteldeutschland: ~800–850 kWh/Jahr',
                '800 Wp Ost/West, Norddeutschland: ~600–680 kWh/Jahr',
                'Eigenverbrauchsquote ohne Speicher: typisch 55–75 %',
                'Einspeisung ist unvergütet – maximaler Eigenverbrauch ist das Ziel',
            ],
        },
        {
            headline: 'Amortisationszeit: Wann rechnet sich ein Balkonkraftwerk?',
            paragraphs: [
                'Die Amortisationszeit ist das wichtigste finanzielle Kriterium für die Kaufentscheidung. Sie gibt an, nach wie vielen Jahren die erzielten Einsparungen den Anschaffungspreis vollständig gedeckt haben. Für ein typisches 800-Watt-Balkonkraftwerk liegen die aktuellen Preise (2025/2026) je nach Ausstattung zwischen 300 und 700 Euro – inklusive zweier Module, Mikrowechselrichter und Anschlusskabel.',
                'Bei einer jährlichen Ersparnis von 150 bis 250 Euro (abhängig von Standort, Ausrichtung und aktuellem Strompreis) ergibt sich eine Amortisationszeit von etwa 2 bis 4 Jahren. Da die Lebensdauer moderner Solarmodule bei mindestens 25 Jahren liegt, rentiert sich die Investition in aller Regel um ein Vielfaches. Selbst bei einem ungünstigen Szenario (Nordbalkon, niedriger Verbrauch, günstiger Tarif) ist die Amortisation typischerweise nach 5 bis 6 Jahren erreicht.',
                'Wichtig für Ihre Berechnung: Der Rechner arbeitet mit statischen Strompreisen. In der Realität steigen Strompreise langfristig, was die Amortisation beschleunigt. Zudem berücksichtigt das Modell keine Degradation der Module (realistisch ca. 0,5 % pro Jahr), was den Ertrag über die Lebensdauer leicht reduziert. Beide Effekte zusammen gleichen sich in der Praxis weitgehend aus.',
            ],
        },
        {
            headline: 'Eigenverbrauch optimieren: So holen Sie das Maximum heraus',
            paragraphs: [
                'Da Balkonkraftwerke keinen Anspruch auf Einspeisevergütung haben, ist eine hohe Eigenverbrauchsquote der Schlüssel zur maximalen Rendite. Der einfachste Hebel: Verschieben Sie stromintensive Haushaltsgeräte in die Mittagsstunden, wenn Ihre Anlage auf Hochtouren läuft. Spülmaschine, Waschmaschine und Trockner lassen sich meist per Zeitschaltuhr oder App in das Produktionsfenster von 10 bis 15 Uhr legen.',
                'Ein intelligenter Stecker (Smart Plug) mit Energiemessung hilft Ihnen, den Eigenverbrauch in Echtzeit zu überwachen und Geräte automatisch zu steuern. Günstige Modelle sind bereits für 15–25 Euro erhältlich und lassen sich mit gängigen Smarthome-Systemen verbinden. Wer konsequent optimiert, kann die Eigenverbrauchsquote ohne Speicher von typischerweise 60 % auf über 75 % steigern.',
                'Eine kleine Hausbatterie (Kapazität 1–2 kWh) kann die Eigenverbrauchsquote auf 80–90 % anheben, indem sie Mittagsüberschüsse für die Abendstunden puffert. Allerdings kostet ein solcher Speicher 300–600 Euro zusätzlich und verlängert die Gesamtamortisationszeit zunächst. Der Rechner erlaubt Ihnen, verschiedene Szenarien zu simulieren und die optimale Konfiguration für Ihren Haushalt zu finden.',
            ],
            bulletPoints: [
                'Zeitschaltuhr für Spülmaschine & Waschmaschine in Mittagsstunden (10–15 Uhr)',
                'Smart Plug mit Energiemessung für Echtzeit-Monitoring',
                'Kühlschrank, Router & Standby-Geräte laufen ohnehin tagsüber – gute Basis',
                'Hausbatterie (1–2 kWh): Eigenverbrauchsquote bis 90 %',
                'E-Auto-Laden tagsüber: massiver Eigenverbrauchsschub möglich',
            ],
        },
        {
            headline: 'Ausrichtung & Neigung: Der größte Einfluss auf Ihren Ertrag',
            paragraphs: [
                'Neben dem Standort ist die Ausrichtung der Module der wichtigste Einflussfaktor auf den Jahresertrag. Südausrichtung (180°) ist das absolute Optimum und erzielt 100 % des maximal möglichen Ertrags. Südost- und Südwestausrichtung (135° bzw. 225°) sind mit 95 % kaum schlechter und haben den Vorteil einer gleichmäßigeren Verteilung der Produktion über den Tag.',
                'Eine reine Ost- oder Westausrichtung (90°/270°) liefert noch rund 82 % des Südwertes. Das klingt nach einer deutlichen Einbuße, hat aber einen praktischen Vorteil: Ost-West-Anlagen produzieren morgens und abends – also genau dann, wenn viele Haushalte ihren Strombedarf haben. Die tatsächliche Eigenverbrauchsquote kann deshalb bei Ost-West-Ausrichtung sogar höher sein als bei reiner Südausrichtung. Diesen Effekt bildet der Rechner über das HTW-Simultaneous-Use-Modell näherungsweise ab.',
                'Die Neigung des Moduls beeinflusst ebenfalls den Ertrag. Das rechnerische Optimum für Deutschland liegt bei rund 32° – ein Kompromiss zwischen dem flachen Wintersonnenstand und dem steilen Sommerstand. Flach liegende Module (z. B. auf einem Flachdach, 10–15°) erreichen noch 90–95 % des Optimalwerts, fast senkrecht montierte Module an einer Balkonbrüstung (80–90°) noch rund 70–75 %. Auch eine ungünstige Neigung macht das Balkonkraftwerk nicht unwirtschaftlich – sie verlängert lediglich die Amortisation leicht.',
            ],
            bulletPoints: [
                'Süd (180°): 100 % – maximaler Jahresertrag',
                'Südost/Südwest (135°/225°): 95 % – kaum Unterschied, gleichmäßigere Produktion',
                'Ost/West (90°/270°): 82 % – besser für morgendliche/abendliche Lastprofile',
                'Nord (0°): 60 % – noch wirtschaftlich, aber längere Amortisation',
                'Optimale Neigung: 30–35°; Balkonbrüstung (90°): ~70–75 % Faktor',
            ],
        },
        {
            headline: 'Anmeldung & Registrierung: Was ist rechtlich zu beachten?',
            paragraphs: [
                'Seit den Gesetzesänderungen der letzten Jahre ist der bürokratische Aufwand für Balkonkraftwerke in Deutschland erheblich gesunken. Grundsätzlich gilt: Jede Erzeugungsanlage – auch ein kleines Balkonkraftwerk – muss im Marktstammdatenregister (MaStR) der Bundesnetzagentur registriert werden. Die Registrierung ist kostenlos, läuft vollständig online und dauert in der Praxis nicht länger als fünf Minuten.',
                'Zusätzlich ist der Netzbetreiber über die Installation zu informieren. Dies ist eine reine Meldepflicht – keine Genehmigungspflicht. Ihr Netzbetreiber kann die Installation nicht untersagen. In der Praxis stellt man dem Netzbetreiber meist ein einfaches Online-Formular zur Verfügung; eine Antwort ist für die rechtmäßige Inbetriebnahme nicht erforderlich.',
                'Für Mieter ist die Rechtslage seit der Gesetzesänderung im Jahr 2024 deutlich entspannter: Balkonkraftwerke gelten seither als sogenannte „privilegierte Maßnahme" im Sinne des Mietrechts. Das bedeutet, Vermieter können die Installation unter bestimmten Bedingungen nicht mehr pauschal verweigern. Sie dürfen jedoch auf eine sachgerechte Montage und die Wiederherstellung des ursprünglichen Zustands bei Auszug bestehen.',
            ],
            bulletPoints: [
                'Registrierung im Marktstammdatenregister (MaStR) ist Pflicht – kostenlos & online',
                'Meldung (nicht Genehmigung) beim Netzbetreiber erforderlich',
                'Technische Grenze: 800 W Wechselrichterausgangsleistung für vereinfachtes Verfahren',
                'Mieter: Privilegierte Maßnahme seit 2024 – Vermieter kann nicht pauschal ablehnen',
                'Zweirichtungszähler: Empfohlen, aber für ≤800 W nicht zwingend vorgeschrieben',
            ],
        },
        {
            headline: 'Förderung & Steuern: Diese Vorteile sollten Sie kennen',
            paragraphs: [
                'Eine bundesweite staatliche Förderung für Balkonkraftwerke existiert derzeit nicht. Jedoch haben viele Städte und Gemeinden eigene Förderprogramme aufgelegt, die Zuschüsse zwischen 50 und 250 Euro je Anlage gewähren. Bekannte Beispiele sind Förderungen in Berlin, München, Köln und vielen kleineren Kommunen. Da sich diese Programme häufig ändern und budgetiert sind, lohnt sich eine aktuelle Anfrage bei Ihrer Gemeindeverwaltung oder Ihrem regionalen Energieversorger.',
                'Steuerlich profitieren Käufer seit dem 1. Januar 2023 von einem erheblichen Vorteil: Für die Lieferung und Installation von Photovoltaikanlagen bis 30 kWp gilt in Deutschland ein Umsatzsteuersatz von 0 % (Nullsteuersatz gemäß § 12 Abs. 3 UStG). Das bedeutet: Beim Kauf eines Balkonkraftwerks fällt keine Mehrwertsteuer an – was einer effektiven Preisersparnis von 19 % im Vergleich zu vor 2023 entspricht und die Amortisationszeit entsprechend verkürzt.',
                'Für Rentner, Geringverdiener und Haushalte mit niedrigem Verbrauch lohnt sich ein Blick auf das Programm „Stromsparcheck" des Deutschen Caritasverbandes und des Deutschen Roten Kreuzes. Dort werden einkommensschwache Haushalte bei der Anschaffung energiesparender Geräte – und seit einigen Jahren auch bei Balkonkraftwerken – gezielt beraten und finanziell unterstützt.',
            ],
        },
        {
            headline: 'Balkonkraftwerk kaufen: Worauf Sie beim Kauf achten sollten',
            paragraphs: [
                'Nicht alle Balkonkraftwerke sind gleich. Beim Kauf sollten Sie auf drei wesentliche Kriterien achten: die Modulqualität, den Wechselrichter und das Sicherheitszertifikat. Hochwertige monokristalline Solarmodule von Tier-1-Herstellern (z. B. Longi, JA Solar, Jinko, Canadian Solar) haben einen Wirkungsgrad von 21–23 % und eine 25-jährige Leistungsgarantie. Günstigere Produkte ohne Herstellernachweis können schlechter abschneiden und haben oft kürzere Garantiebedingungen.',
                'Der Mikrowechselrichter ist das Herzstück des Balkonkraftwerks. Er wandelt den Gleichstrom der Module in netzkompatiblen Wechselstrom um und ist für die Einspeisebegrenzung auf 800 W verantwortlich. Achten Sie auf eine CE-Kennzeichnung, VDE-Konformität und – wenn möglich – eine WLAN-Schnittstelle für die Ertragsüberwachung per App. Etablierte Mikrowechselrichter-Hersteller sind Hoymiles, Enphase und AEconversion.',
                'Für die Montage gibt es diverse Lösungen: Balkongeländer-Halterungen, Flachdach-Aufständerungen und Fassadenhalterungen. Wichtig ist, dass die Konstruktion sturmfest ist (Windlast bis 140 km/h) und die Montage keine dauerhaften Veränderungen am Gebäude erfordert – insbesondere für Mieter. Gute Komplettsets sind inklusive passendem Anschlusskabel (Wieland-Stecker) erhältlich und in weniger als einer Stunde installiert.',
            ],
            bulletPoints: [
                'Module: Monokristallin, Tier-1-Hersteller, ≥21 % Wirkungsgrad, 25 Jahre Leistungsgarantie',
                'Wechselrichter: CE + VDE, Begrenzung auf 800 W, WLAN-Monitoring empfohlen',
                'Bekannte Wechselrichter-Marken: Hoymiles, Enphase, AEconversion',
                'Anschluss: Wieland-Stecker (sicherheitszertifiziert), keine offene Schuko-Verbindung',
                'Montage: sturmfest, rückstandsfrei abbaubar – ideal für Mieter',
            ],
        },
    ],

    faq: [
        {
            question: 'Wie viel Strom erzeugt ein Balkonkraftwerk mit 800 Watt im Jahr?',
            answer:
                'Ein <strong>800-Watt-Balkonkraftwerk</strong> erzeugt in Deutschland je nach Standort und Ausrichtung <strong>650 bis 950 kWh pro Jahr</strong>. In Bayern mit Südausrichtung und optimaler Neigung sind über 900 kWh möglich; in Norddeutschland mit Ost- oder Westausrichtung sind realistische Werte eher 620–700 kWh. Nutzen Sie unseren <a href="/rechner/balkonkraftwerk/ertrag">Ertragsrechner</a>, um den genauen Wert für Ihren Standort zu berechnen.',
        },
        {
            question: 'Wie viel Geld spart ein Balkonkraftwerk pro Jahr?',
            answer:
                'Bei einem Strompreis von <strong>0,30–0,32 €/kWh</strong> (Bundesdurchschnitt 2025) und einem typischen Jahresertrag von 750 kWh mit einer Eigenverbrauchsquote von 65 % ergibt sich eine <strong>jährliche Ersparnis von rund 145–165 Euro</strong>. Bei höherem Verbrauch (mehr Eigenverbrauch) oder teureren Tarifen kann die Ersparnis auch 200–250 Euro pro Jahr betragen. Maßgeblich ist ausschließlich der selbst verbrauchte Anteil – Einspeisung ins Netz wird bei Balkonkraftwerken nicht vergütet.',
        },
        {
            question: 'Wann amortisiert sich ein Balkonkraftwerk?',
            answer:
                'Bei aktuellen Marktpreisen von <strong>300–600 Euro</strong> für ein komplettes 800-Watt-Set und jährlichen Ersparnissen von 150–220 Euro liegt die <strong>Amortisationszeit bei 2 bis 4 Jahren</strong>. Da Solarmodule mindestens 25 Jahre halten, ist das Vielfache der Investition über die Lebensdauer gesichert. Günstig gekaufte Anlagen mit optimalem Standort können sich bereits nach knapp 2 Jahren amortisieren.',
        },
        {
            question: 'Was ist die Eigenverbrauchsquote und warum ist sie so wichtig?',
            answer:
                'Die Eigenverbrauchsquote gibt an, wie viel Prozent des erzeugten Solarstroms direkt im Haushalt verbraucht werden. Da Balkonkraftwerke in Deutschland <strong>keine Einspeisevergütung</strong> erhalten (EEG §9), zählt für die finanzielle Rechnung ausschließlich der selbst genutzte Strom. Eine Eigenverbrauchsquote von 65 % bedeutet: 65 % der erzeugten kWh ersetzen teuren Netzstrom, 35 % fließen unvergütet ins Netz. Je höher der Haushaltsverbrauch und je besser die zeitliche Abstimmung von Produktion und Verbrauch, desto höher die Quote.',
        },
        {
            question: 'Muss ein Balkonkraftwerk angemeldet werden?',
            answer:
                'Ja. Jedes Balkonkraftwerk in Deutschland muss im <strong>Marktstammdatenregister (MaStR)</strong> der Bundesnetzagentur registriert und dem Netzbetreiber gemeldet werden. Die Registrierung ist kostenlos und dauert wenige Minuten online. Eine Genehmigung durch den Netzbetreiber ist nicht notwendig – es handelt sich um eine reine Meldepflicht. Mieter können ihr Balkonkraftwerk seit 2024 als privilegierte Maßnahme leichter geltend machen.',
        },
        {
            question: 'Welche Ausrichtung ist für ein Balkonkraftwerk am besten?',
            answer:
                'Optimal ist eine <strong>Südausrichtung (180°)</strong> mit einer Neigung von etwa 30–35°. Südost und Südwest sind mit nur 5 % Einbuße kaum schlechter und haben den Vorteil einer gleichmäßigeren Produktion. Eine Ost-West-Ausrichtung liefert rund 82 % des Südwertes, erzeugt Strom aber morgens und abends – was gut zu typischen Haushaltsprofilen passt. Selbst ein Nordbalkon lohnt sich in der Regel noch: Er erzielt immerhin 60 % des Optimums und amortisiert sich binnen weniger Jahre.',
        },
        {
            question: 'Gibt es Förderung für Balkonkraftwerke?',
            answer:
                'Eine bundesweite Förderung gibt es aktuell nicht, aber <strong>viele Städte und Gemeinden</strong> bieten eigene Zuschüsse von 50–250 Euro an. Außerdem gilt seit Januar 2023 ein <strong>Nullsteuersatz (0 % MwSt.)</strong> für Kauf und Installation von PV-Anlagen bis 30 kWp – das senkt den Kaufpreis effektiv um 19 %. Informieren Sie sich bei Ihrer Gemeindeverwaltung oder Ihrem Energieversorger über aktuelle lokale Programme.',
        },
    ],
};