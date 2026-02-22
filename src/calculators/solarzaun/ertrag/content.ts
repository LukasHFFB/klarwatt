import type { SeoContent } from '../../../types/content';

export const SolarzaunErtragContent: SeoContent = {
    metaTitle: 'Solarzaun Ertragsrechner 2026 | Klarwatt',
    metaDescription: 'Jahresertrag, Eigenverbrauch & Amortisation Ihres Solarzauns berechnen – PLZ-genau, mit Bifazial-Bonus & EEG 2024. Kostenlos kalkulieren.',

    introParagraphs: [
        'Ein Solarzaun ist mehr als ein Sichtschutz – er ist eine vollwertige Photovoltaikanlage, die Ihren Gartenzaun in einen leisen, wartungsfreien Stromerzeuger verwandelt. Doch wie viel Strom erzeugt ein Solarzaun wirklich, und was bringt er finanziell? Der Solarzaun-Ertragsrechner von Klarwatt beantwortet diese Fragen mit einer standortgenauen, physikalisch fundierten Kalkulation: Jahresertrag in kWh, Eigenverbrauchsquote, Einspeisevergütung nach EEG 2024, Amortisationsdauer und CO₂-Ersparnis – alles in einer Berechnung.',
        'Entscheidend für ein realistisches Ergebnis sind drei Faktoren, die unser Rechner vollständig berücksichtigt: die tatsächliche Globalstrahlung an Ihrem Standort (abgerufen über Ihre Postleitzahl), der bifaziale Mehrertrag von 20 % durch Rückseitenreflexion bei vertikal montierten Modulen, sowie die erhöhte Eigenverbrauchsquote von Ost-West-Zäunen durch ihr morgendlich-abendliches Ertragsprofil. Das macht den Unterschied zwischen einer pauschalen Schätzung und einer Zahl, auf die Sie Ihre Kaufentscheidung stützen können.',
        'Geben Sie Ihre Postleitzahl, die geplante Anlagenleistung in kWp und die Ausrichtung des Zauns ein – der Rechner liefert Ihnen sofort alle relevanten Kennzahlen. Ob Sie eine 3-kWp-Anlage als Sichtschutz am Gartenrand planen oder ein 10-kWp-System als Grundstückseinfriedung: Sie erhalten eine ehrliche, nachvollziehbare Grundlage für Ihre Entscheidung.',
    ],

    sections: [
        {
            headline: 'Wie funktioniert die Ertragsberechnung eines Solarzauns?',
            paragraphs: [
                'Die Ertragsberechnung eines Solarzauns basiert auf denselben physikalischen Prinzipien wie die einer klassischen Dachanlage – mit zwei wichtigen Besonderheiten: der vertikalen Montage und dem Einsatz bifazialer Module. Der Jahresertrag ergibt sich aus der installierten Peakleistung (kWp) multipliziert mit der jährlichen Globalstrahlung am Standort, ergänzt um den bifazialen Mehrertrag. Der Performance Ratio – ein Sammelfaktor für alle realen Systemverluste – fließt implizit in die standortbezogenen Einstrahlungsdaten ein, die für vertikal montierte Anlagen (Neigung 90°) aus PVGIS-Datensätzen abgeleitet werden.',
                'Der bifaziale Mehrertrag ist der entscheidende Unterschied zum klassischen Monofazial-Modul. Bifaziale Module nehmen Sonnenlicht nicht nur von der Vorderseite auf, sondern auch von der Rückseite durch reflektiertes Streulicht vom Boden, Gebäudeflächen oder hellen Belägen. Bei vertikaler Aufstellung und geeigneter Umgebungsreflexion – etwa auf Kiesflächen, hellem Pflaster oder Rasenflächen – beträgt dieser Rückseitengewinn in der Praxis 15 bis 25 %. Unser Rechner setzt ihn konservativ mit 20 % an, was dem Mittelwert für typische deutsche Installationssituationen entspricht.',
                'Die Globalstrahlung für vertikal montierte Flächen unterscheidet sich deutlich von der für geneigte Dachanlagen. Eine vertikale Fläche in Südausrichtung empfängt im Sommer weniger direkte Strahlung als eine 32°-Dachanlage, profitiert aber im Winter stärker vom flachen Sonnenstand. Eine Ost-West-Ausrichtung verteilt die Einstrahlung gleichmäßig über den Tag: Morgens trifft die Sonne die Ostseite, nachmittags die Westseite. Unser Rechner bezieht für die gewählte Azimutausrichtung die korrekte standortspezifische Einstrahlungsmenge für Tilt 90°.',
            ],
            bulletPoints: [
                'Jahresertrag = kWp × Globalstrahlung (tilt=90°, standortgenau) × Bifazial-Faktor (1,20)',
                'Bifazial-Mehrertrag: +20 % durch Rückseitenreflexion (Boden, Gebäude, Belag)',
                'Vertikale Montage: weniger Mittagsstrahlung im Sommer, mehr Winterstrahlung',
                'Ost-West-Zäune: gleichmäßigeres Tagesprofil als Südanlage',
                'PLZ-genaue Strahlungsdaten für Neigung 90° als Berechnungsgrundlage',
            ],
        },
        {
            headline: 'Wie viel Strom erzeugt ein Solarzaun pro Jahr in Deutschland?',
            paragraphs: [
                'Der konkrete Jahresertrag eines Solarzauns hängt vom Standort, der Ausrichtung und der installierten Leistung ab. Als Orientierungswert gilt: Ein 5-kWp-Solarzaun in Ost-West-Ausrichtung erzeugt in Deutschland je nach Region zwischen 4.000 und 6.500 kWh pro Jahr. Dabei gilt, dass ein bifazialer Solarzaun trotz vertikaler Montage erstaunlich nah an den Ertrag einer klassischen Südanlage herankommt – der bifaziale Mehrertrag von 20 % kompensiert einen Großteil des geometrischen Verlusts durch die steile Montage.',
                'Regional variiert der Ertrag erheblich: In Bayern und Baden-Württemberg mit Globalstrahlungswerten von über 1.150 kWh/m² pro Jahr liegt der Jahresertrag eines 5-kWp-Ost-West-Solarzauns bei rund 5.500 bis 6.500 kWh. An norddeutschen Standorten mit 950 bis 1.050 kWh/m² sind es eher 4.000 bis 5.200 kWh. Der Standortvorteil Süddeutschlands gegenüber Norddeutschland beträgt damit rund 20 bis 30 % – ein Faktor, der bei pauschalen Online-Rechnern ohne PLZ-Einbindung komplett verloren geht.',
                'Für die Praxis bedeutet das: Ein gut dimensionierter 5-kWp-Solarzaun kann bei einem Haushalt mit 4.000 bis 5.000 kWh Jahresverbrauch einen substanziellen Anteil des Strombedarfs decken. Kombiniert mit einer Dachanlage kann ein Solarzaun die Gesamtanlagekapazität sinnvoll ergänzen und das Ertragsprofil über den Tag glätten – besonders wenn die Dachanlage Südausrichtung hat und der Zaun in Ost-West-Richtung verläuft.',
            ],
            bulletPoints: [
                '5-kWp-Solarzaun Ost-West: 4.000–6.500 kWh/Jahr je nach Standort',
                'Bayern/BW: ~5.500–6.500 kWh; Norddeutschland: ~4.000–5.200 kWh',
                'Pro kWp: ~800–1.300 kWh Jahresertrag (Ost-West, vertikal, bifazial)',
                'Bifazial-Faktor hebt Ertrag um 20 % gegenüber monofazialem Vergleichsmodul',
                'Süd-Ausrichtung: etwas höherer Gesamtertrag, aber schlechteres Tagesprofil',
            ],
        },
        {
            headline: 'Eigenverbrauch beim Solarzaun: Der unterschätzte Renditetreiber',
            paragraphs: [
                'Die Eigenverbrauchsquote ist bei einem Solarzaun oft höher als viele erwarten – und das ist einer seiner größten finanziellen Vorteile. Der Grund liegt im Ertragsprofil: Ein Ost-West-Solarzaun produziert morgens früher und abends länger als eine Südanlage, die ihren Peak um die Mittagszeit hat. Dieser Verlauf deckt sich gut mit dem typischen Haushaltslastgang: Morgens beim Frühstück, abends beim Kochen und in der Freizeit ist der Verbrauch am höchsten – genau dann, wenn der Ost-West-Zaun seinen Strom liefert.',
                'Unser Rechner setzt für Ost-West-Zäune einen Simultanfaktor von 45 % an – das bedeutet, dass 45 % des erzeugten Solarstroms im Moment seiner Erzeugung direkt im Haushalt verbraucht wird. Bei einer Südausrichtung liegt dieser Wert bei 35 %. Zum Vergleich: Eine typische Süddachanlage ohne Batteriespeicher erreicht eine Eigenverbrauchsquote von 20 bis 30 %. Der Solarzaun in Ost-West-Richtung übertrifft diese Werte strukturell – ohne dass ein Speicher erforderlich wäre.',
                'Was bedeutet das finanziell? Strom, der selbst verbraucht wird, spart den Haushaltsstrompreis von rund 28 bis 32 Cent pro kWh. Strom, der eingespeist wird, erzielt nach EEG 2024 nur etwa 8,11 Cent pro kWh. Der Eigenverbrauchsanteil ist damit rund drei- bis viermal so wertvoll wie der eingespeiste Anteil. Eine höhere Eigenverbrauchsquote beim Solarzaun führt direkt zu einer kürzeren Amortisation und einer höheren Gesamtrendite – selbst bei identischer Gesamtproduktion.',
            ],
            bulletPoints: [
                'Eigenverbrauchsquote Ost-West-Solarzaun: ~45 % (ohne Speicher)',
                'Eigenverbrauchsquote Süd-Solarzaun: ~35 % (ohne Speicher)',
                'Zum Vergleich: Süddachanlage ohne Speicher: 20–30 %',
                'Eigenverbrauch spart ~30 ct/kWh vs. 8,11 ct/kWh Einspeisevergütung',
                'Höherer Eigenverbrauch = kürzere Amortisation ohne Speicherinvestition',
            ],
        },
        {
            headline: 'Wirtschaftlichkeit: Was bringt ein Solarzaun finanziell?',
            paragraphs: [
                'Die finanzielle Bilanz eines Solarzauns setzt sich aus zwei Einnahmequellen zusammen: der Stromkostenersparnis durch Eigenverbrauch und der Einspeisevergütung für den überschüssigen Strom. Im ersten Betriebsjahr ergibt sich für einen typischen 5-kWp-Ost-West-Solarzaun an einem mitteldeutschen Standort bei 30 Cent Strompreis eine Gesamtersparnis von rund 600 bis 900 Euro. Davon entfallen etwa 60 bis 70 % auf die Strompreisersparnis und 30 bis 40 % auf die Einspeisevergütung.',
                'Unser Rechner simuliert die finanzielle Entwicklung jahresweise über 25 Jahre und berücksichtigt dabei einen jährlichen Strompreisanstieg von 3 % (einstellbar). Da die Einspeisevergütung für 20 Jahre gesetzlich fixiert ist (EEG-Garantie), der Wert des Eigenverbrauchs durch steigende Strompreise aber jedes Jahr zunimmt, beschleunigt sich die Amortisation im Zeitverlauf. Wer heute in einen Solarzaun investiert, profitiert also doppelt: sichere Einspeiseerträge und wachsender Eigenverbrauchswert.',
                'Die typische Amortisationsdauer eines Solarzauns liegt in Deutschland je nach Standort und Ausrichtung zwischen 10 und 16 Jahren. Wer die eingesparten Kosten einer anderweitig geplanten Einfriedung gegenrechnet, erreicht oft schon bei 8 bis 12 Jahren die Gewinnschwelle. Die restlichen 9 bis 15 Jahre der Anlagenlebensdauer sind dann Reingewinn – in Form von gespartem Strom und Einspeiseerträgen.',
            ],
            bulletPoints: [
                'Jahresersparnis Jahr 1 (5 kWp, Mitteldeutschland): ~600–900 €',
                'Amortisation: typisch 10–16 Jahre, mit Zaun-Kostenverrechnung 8–12 Jahre',
                'Einspeisevergütung EEG 2024: 8,11 ct/kWh für Anlagen bis 10 kWp, 20 Jahre fix',
                '25-Jahres-Gewinn: ~5.000–15.000 € je nach Standort und Strompreisentwicklung',
                'ROI über 25 Jahre: typisch 80–150 % bei guten Bedingungen',
            ],
        },
        {
            headline: 'Solarzaun installieren: Kosten, Anmeldung und rechtliche Anforderungen',
            paragraphs: [
                'Die Investitionskosten eines Solarzauns liegen 2024 je nach Hersteller, Modulqualität, Zaunlänge und Montageaufwand zwischen 1.200 und 2.000 Euro pro kWp installierter Leistung. Eine schlüsselfertige 5-kWp-Anlage kostet damit typischerweise zwischen 6.000 und 10.000 Euro netto. Dabei lohnt sich ein Direktvergleich: Wer ohnehin eine neue Einfriedung für sein Grundstück plant, kann die Kosten für Zaun und Photovoltaikanlage zusammenrechnen. In dieser kombinierten Betrachtung reduzieren sich die spezifischen PV-Mehrkosten erheblich.',
                'Seit Januar 2023 gilt für die Lieferung und Installation von Photovoltaikanlagen auf Wohngebäuden und in deren Umgebung ein Umsatzsteuersatz von 0 % (§ 12 Abs. 3 UStG). Solarzäune als PV-Anlage im Umfeld eines Wohngebäudes fallen in der Regel unter diese Regelung – sprechen Sie dies zur Sicherheit mit Ihrem Installateur ab. Die Umsatzsteuerbefreiung spart rund 19 % der Nettokosten.',
                'Rechtlich ist beim Solarzaun mehr zu beachten als bei einer klassischen Dachanlage. Da er als Einfriedung gilt, gelten je nach Bundesland baurechtliche Vorschriften für Zaunhöhen: Anlagen unter 1,0 bis 2,0 Meter sind in den meisten Ländern genehmigungsfrei, darüber kann eine Baugenehmigung notwendig sein. Bebauungspläne können Gestaltungsvorschriften für Einfriedungen enthalten. Unabhängig davon ist wie bei jeder PV-Anlage die Anmeldung beim Netzbetreiber und die Registrierung im Marktstammdatenregister (MaStR) innerhalb eines Monats nach Inbetriebnahme gesetzlich verpflichtend.',
            ],
            bulletPoints: [
                'Kosten 2024: 1.200–2.000 €/kWp (schlüsselfertig, inkl. Wechselrichter)',
                '5-kWp-Anlage: ~6.000–10.000 € netto',
                '0 % Umsatzsteuer seit Januar 2023 (§ 12 Abs. 3 UStG)',
                'Baugenehmigung: je nach Bundesland und Zaunhöhe prüfen',
                'MaStR-Registrierung: Pflicht innerhalb 1 Monat nach Inbetriebnahme',
                'Netzbetreiber-Anmeldung vor Inbetriebnahme erforderlich',
            ],
        },
        {
            headline: 'Solarzaun optimieren: So holen Sie das Maximum aus Ihrer Anlage heraus',
            paragraphs: [
                'Die wichtigste Optimierungsentscheidung beim Solarzaun ist die Ausrichtung. Eine Ost-West-Ausrichtung (Zaunlängsseite verläuft von Nord nach Süd) ist in den meisten Fällen die wirtschaftlich optimale Wahl: Sie erzeugt ein gleichmäßiges Tagesprofil, erhöht die Eigenverbrauchsquote auf rund 45 % und macht den Solarzaun zum idealen Ergänzungsprodukt für Haushalte, die morgens und abends viel Strom verbrauchen. Wenn Ihr Grundstück eine Ost-West-Ausdehnung hat, ist der Nordzaun – mit nach Osten und Westen zeigenden Modulseiten – ideal.',
                'Der Bodenbelag unter und vor dem Solarzaun beeinflusst den bifazialen Mehrertrag. Helle Materialien wie weißer Kies, helles Pflaster oder reflektierender Beton erhöhen die Rückseitenreflexion und damit den Bifazial-Bonus. Dunkler Untergrund oder dichte Vegetation reduzieren ihn. Wer beim Bodenbelag ohnehin neu gestaltet, kann mit einer hellen Lösung den Ertrag des Solarzauns messbar verbessern – ohne Mehrkosten bei der Anlage selbst.',
                'Ein Batteriespeicher kann die Eigenverbrauchsquote des Solarzauns von rund 45 % auf 65 bis 80 % erhöhen und damit die Amortisationsdauer weiter verkürzen. Besonders sinnvoll ist ein Speicher, wenn die Anlage deutlich mehr Strom erzeugt als der Haushalt tagsüber verbraucht – also bei großen Anlagen oder niedrigem Tagesverbrauch. Unser Amortisationsrechner für Solarzäune hilft Ihnen, die Wirtschaftlichkeit mit und ohne Speicher zu vergleichen.',
            ],
            bulletPoints: [
                'Ost-West-Ausrichtung: optimales Tagesprofil, höchste Eigenverbrauchsquote',
                'Heller Bodenbelag (Kies, Pflaster): erhöht bifazialen Mehrertrag spürbar',
                'Batteriespeicher: Eigenverbrauch von 45 % auf 65–80 % steigerbar',
                'Kombination mit Dachanlage: komplementäre Ertragsprofile, maximale Autarkie',
                'Modul-Monitoring: Ertragsabweichungen frühzeitig erkennen und beheben',
            ],
        },
        {
            headline: 'Förderungen für Solarzäune 2024: Was wird bezuschusst?',
            paragraphs: [
                'Solarzäune profitieren von denselben Bundesförderungen wie alle anderen Photovoltaikanlagen. Die wichtigste Förderung ist die seit Januar 2023 geltende Umsatzsteuerbefreiung: 0 % MwSt. auf Lieferung und Installation von PV-Anlagen auf Wohngebäuden und in deren unmittelbarem Umfeld. Für Solarzäune auf Privatgrundstücken gilt diese Regelung in der Regel, was die Bruttokosten direkt um 19 % reduziert.',
                'Die KfW fördert Photovoltaikanlagen und Stromspeicher über das Programm 270 (Erneuerbare Energien – Standard) mit zinsgünstigen Krediten für die Gesamtinvestition. Solarzäune sind als Teil einer PV-Anlage förderfähig. Die Einspeisevergütung nach EEG 2024 gilt selbstverständlich auch für Solarzäune: 8,11 ct/kWh für Anlagen bis 10 kWp, gesetzlich gesichert für 20 Jahre nach Inbetriebnahme. Seit 2023 ist diese Vergütung zudem für Anlagen bis 30 kWp einkommensteuerbefreit.',
                'Auf Landes- und Kommunalebene gibt es zusätzliche Förderprogramme, die je nach Region variieren. Bayern, Thüringen, Nordrhein-Westfalen und andere Bundesländer bieten Zuschüsse für Batteriespeicher, die in Kombination mit einem Solarzaun installiert werden. Stadtwerke und regionale Energieversorger bieten teils eigene Bonusprogramme für Netzeinspeisende an. Es lohnt sich, vor dem Kauf die BMWK-Förderdatenbank sowie die Website Ihres regionalen Energieversorgers zu prüfen.',
            ],
            bulletPoints: [
                '0 % Umsatzsteuer auf Solarzaun-Installation (§ 12 Abs. 3 UStG seit Jan. 2023)',
                'KfW 270: zinsgünstiger Kredit für Anlage inkl. optionalem Speicher',
                'Einspeisevergütung: 8,11 ct/kWh bis 10 kWp, 20 Jahre garantiert (EEG 2024)',
                'Steuerfrei: Einspeisevergütung für Anlagen bis 30 kWp seit 2023',
                'Länderförderungen: Speicherzuschüsse in Bayern, Thüringen, NRW u.a.',
                'BMWK-Förderdatenbank für regionale Programme vorab prüfen',
            ],
        },
        {
            headline: 'CO₂-Einsparung durch den Solarzaun: Der ökologische Mehrwert',
            paragraphs: [
                'Ein Solarzaun leistet über seine Lebensdauer einen messbaren Beitrag zum Klimaschutz. Jede erzeugte Kilowattstunde Solarstrom verdrängt eine Kilowattstunde aus dem öffentlichen Netz und vermeidet damit den anteiligen CO₂-Ausstoß des deutschen Strommixes. Nach dem aktuellen Emissionsfaktor des Umweltbundesamts (UBA 2024) von rund 380 bis 400 Gramm CO₂ pro Kilowattstunde vermeidet eine 5-kWp-Anlage an einem mitteldeutschen Standort rund 2.000 bis 2.600 kg CO₂ pro Jahr.',
                'Über die Anlagenlebensdauer von 25 Jahren summiert sich diese Einsparung auf etwa 50 bis 65 Tonnen CO₂ – netto, also nach Abzug des Produktions-CO₂-Rucksacks von rund 4.000 kg (Fraunhofer ISE 2023). Das entspricht dem CO₂-Jahresausstoß von rund 3 bis 4 durchschnittlichen deutschen Bürgerinnen und Bürgern oder dem Äquivalent von über 170 gepflanzten Bäumen pro Jahr. Für eine detaillierte ökologische Bilanz steht Ihnen auf Klarwatt der spezialisierte Solarzaun-CO₂-Rechner zur Verfügung.',
                'Der ökologische Mehrwert ist dabei nicht abstrakt, sondern direkt an den finanziellen Nutzen gekoppelt: Je mehr Strom der Solarzaun erzeugt, desto mehr CO₂ vermeidet er – und desto höher sind Stromkostenersparnis und Einspeisevergütung. Nachhaltigkeit und Wirtschaftlichkeit zeigen beim Solarzaun in dieselbe Richtung.',
            ],
            bulletPoints: [
                'CO₂-Vermeidung 5 kWp: ~2.000–2.600 kg pro Jahr',
                'Über 25 Jahre: ~50–65 Tonnen CO₂ netto vermieden',
                'CO₂-Faktor Strommix DE (UBA 2024): ~380–400 g/kWh',
                'Bifazial-Mehrertrag erhöht CO₂-Vermeidung proportional',
                'Detaillierte Ökobilanz: Solarzaun-CO₂-Rechner auf Klarwatt',
            ],
        },
    ],

    faq: [
        {
            question: 'Wie viel Strom erzeugt ein Solarzaun pro Jahr?',
            answer: 'Ein <strong>5-kWp-Solarzaun in Ost-West-Ausrichtung</strong> erzeugt in Deutschland je nach Standort zwischen <strong>4.000 und 6.500 kWh pro Jahr</strong>. Dabei sorgt der <strong>bifaziale Mehrertrag von ~20 %</strong> durch Rückseitenreflexion dafür, dass der Ertrag trotz vertikaler Montage erstaunlich nah an den einer klassischen Dachanlage herankommt. In Bayern und Baden-Württemberg sind Erträge von 5.500–6.500 kWh realistisch, in Norddeutschland eher 4.000–5.200 kWh. Pro kWp ergibt sich damit ein Jahresertrag von <strong>800 bis 1.300 kWh</strong>. Berechnen Sie Ihren standortgenauen Wert mit unserem <a href="/solarzaun/ertrag">Solarzaun-Ertragsrechner</a>.',
        },
        {
            question: 'Lohnt sich ein Solarzaun finanziell?',
            answer: 'Ja, in den meisten Fällen lohnt sich ein Solarzaun finanziell – besonders wenn ohnehin eine neue Einfriedung geplant ist. Die Amortisationsdauer liegt typischerweise bei <strong>10 bis 16 Jahren</strong>, bei Anrechnung der eingesparten Zaunkosten oft bei <strong>8 bis 12 Jahren</strong>. Da die Anlagenlebensdauer <strong>25 Jahre</strong> beträgt, verbleiben 9 bis 15 Jahre Reingewinn. Der finanzielle Vorteil des Solarzauns liegt besonders in seiner <strong>hohen Eigenverbrauchsquote von ~45 %</strong> bei Ost-West-Ausrichtung – der selbst genutzte Strom spart rund 30 ct/kWh vs. 8,11 ct/kWh Einspeisevergütung. Unser <a href="/solarzaun/amortisation">Amortisationsrechner</a> liefert die genauen Zahlen für Ihre Situation.',
        },
        {
            question: 'Welche Ausrichtung ist für einen Solarzaun am sinnvollsten?',
            answer: 'Für Solarzäune ist eine <strong>Ost-West-Ausrichtung</strong> (Azimut 90° oder 270°, Zaun verläuft in Nord-Süd-Richtung) in den meisten Fällen die wirtschaftlich optimale Wahl. Sie erzeugt ein <strong>gleichmäßiges Tagesprofil</strong> mit höherem Ertrag morgens und abends – passend zum typischen Haushaltslastgang. Die Eigenverbrauchsquote liegt bei <strong>~45 %</strong>, gegenüber ~35 % bei Südausrichtung. Eine <strong>Südausrichtung</strong> erzielt zwar den höchsten Gesamtjahresertrag, aber mit stärkerem Mittagsschwerpunkt und niedrigerem Eigenverbrauch. Für Haushalte, die tagsüber wenig Strom verbrauchen, kann Süd dennoch besser sein – der Rechner hilft Ihnen, beide Szenarien zu vergleichen.',
        },
        {
            question: 'Brauche ich eine Genehmigung für einen Solarzaun?',
            answer: 'Das hängt vom Bundesland und der Zaunhöhe ab. In den meisten Bundesländern sind Einfriedungen bis <strong>1,0 bis 2,0 m Höhe genehmigungsfrei</strong> – ein Solarzaun unter dieser Höhe ist dann ebenfalls genehmigungsfrei. Darüber kann eine <strong>Baugenehmigung</strong> notwendig sein. In <strong>Bebauungsplangebieten</strong> können Gestaltungsvorschriften für Einfriedungen gelten, die Solarzäune einschränken. In <strong>Denkmalschutzgebieten</strong> ist fast immer eine gesonderte Genehmigung erforderlich. Klären Sie die Situation vorab mit Ihrer Gemeindeverwaltung. Unabhängig davon ist die <strong>Anmeldung beim Netzbetreiber und die MaStR-Registrierung</strong> gesetzlich verpflichtend.',
        },
        {
            question: 'Was ist der Unterschied zwischen Solarzaun und Balkonkraftwerk?',
            answer: 'Ein <strong>Balkonkraftwerk</strong> (Stecker-Solar) ist eine kleine Plug-in-PV-Anlage mit maximal <strong>800 W Einspeiseleistung</strong>, die ohne Genehmigung betrieben werden kann und primär für Mieter geeignet ist. Ein <strong>Solarzaun</strong> ist eine vollwertige Photovoltaikanlage mit typisch <strong>3 bis 15 kWp</strong>, die als Grundstückseinfriedung installiert wird, beim Netzbetreiber anzumelden ist und die volle EEG-Einspeisevergütung erhält. Der Solarzaun erzeugt deutlich mehr Strom, erfordert aber eine professionelle Installation und ist an Wohneigentum gebunden. Für Eigentümer ist der Solarzaun die substanziell wirkungsvollere Lösung – besonders wenn kein geeignetes Dach vorhanden ist.',
        },
        {
            question: 'Wie hoch ist die Einspeisevergütung für einen Solarzaun 2024?',
            answer: 'Die gesetzliche Einspeisevergütung nach <strong>EEG 2024</strong> beträgt für Neuanlagen bis 10 kWp <strong>8,11 Cent pro kWh</strong>. Für Anlagen zwischen 10 und 40 kWp gilt ein leicht niedrigerer Satz. Die Vergütung ist für <strong>20 Jahre</strong> ab Inbetriebnahme garantiert und wird für Neuanlagen halbjährlich angepasst – wer früher installiert, sichert sich den höheren Satz. Seit 2023 ist die Einspeisevergütung für Anlagen bis 30 kWp <strong>einkommensteuerbefreit</strong>. Da der bifaziale Solarzaun eine höhere Eigenverbrauchsquote hat als eine typische Dachanlage, macht die Einspeisevergütung beim Solarzaun anteilig einen kleineren Teil des Gesamtertrags aus – was die Anlage weniger abhängig von Vergütungsänderungen macht.',
        },
        {
            question: 'Kann ich einen Solarzaun mit einer Dachanlage kombinieren?',
            answer: 'Ja, und diese Kombination ist aus mehreren Gründen attraktiv. Eine <strong>Südausrichtung der Dachanlage</strong> kombiniert mit einem <strong>Ost-West-Solarzaun</strong> ergibt ein besonders gleichmäßiges Tagesprofil: Die Dachanlage liefert ihren Peak mittags, der Zaun morgens und abends. Das erhöht die Gesamteigenverbrauchsquote und reduziert Spitzeneinspeisung. Außerdem können beide Anlagen <strong>gemeinsam über einen Hybridwechselrichter</strong> betrieben werden. Die Gesamtanlagenleistung erhöht sich, was besonders bei geplanter Wärmepumpe oder Elektroauto sinnvoll ist. Beide Anlagen werden getrennt beim Netzbetreiber und im MaStR gemeldet, können aber unter einem Einspeisevertrag zusammengefasst werden.',
        },
    ],
};