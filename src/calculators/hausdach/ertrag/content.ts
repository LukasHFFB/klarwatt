import type { SeoContent } from '../../../types/content';

export const SolaranlageErtragContent: SeoContent = {
    metaTitle: 'Solaranlage Ertragsrechner 2026 | Klarwatt',
    metaDescription: 'Jahresertrag, Eigenverbrauch & Amortisation Ihrer Dachanlage berechnen – PLZ-genau, kostenlos & aktuell nach EEG 2024. Jetzt kalkulieren.',

    introParagraphs: [
        'Eine Photovoltaikanlage auf dem Hausdach gehört zu den rentabelsten Investitionen, die Hausbesitzer in Deutschland heute tätigen können – vorausgesetzt, die Planung basiert auf realistischen Zahlen statt auf Verkäuferversprechen. Der Solaranlage-Ertragsrechner von Klarwatt liefert Ihnen genau das: eine standortgenaue, physikalisch fundierte Kalkulation von Jahresertrag, Eigenverbrauchsquote, Einspeisevergütung und Amortisationsdauer – kostenlos und ohne Registrierung.',
        'Geben Sie einfach Ihre Postleitzahl, die geplante Anlagenleistung in kWp, die Dachausrichtung und den Neigungswinkel ein – der Rechner zieht daraus die tatsächliche Globalstrahlung an Ihrem Standort und berechnet in Sekunden, wie viel Strom Ihre Anlage über 25 Jahre erzeugen wird, wie viel davon Sie selbst nutzen und wie viel Sie zu den aktuellen EEG-2024-Vergütungssätzen ins Netz einspeisen.',
        'Ob 5-kWp-Anlage auf dem Reihenhaus oder 15-kWp-System auf dem Einfamilienhaus mit Wärmepumpe: Dieser Rechner gibt Ihnen die Grundlage, um Angebote von Installateuren kritisch zu hinterfragen, den optimalen Eigenverbrauch zu planen und fundiert zu entscheiden, ob und wann ein Batteriespeicher wirtschaftlich sinnvoll ist.',
    ],

    sections: [
        {
            headline: 'Wie berechnet sich der Jahresertrag einer Solaranlage?',
            paragraphs: [
                'Der Jahresertrag einer Photovoltaikanlage ergibt sich aus dem Produkt der installierten Peakleistung (kWp), der jährlichen Globalstrahlung am Standort (kWh/m²) und dem sogenannten Performance Ratio (PR). Der Performance Ratio beschreibt, wie effizient eine reale Anlage im Vergleich zu einer idealen Anlage unter Laborbedingungen arbeitet. Er fasst alle realen Verluste zusammen: Wechselrichterwirkungsgrad, Temperaturkoeffizient der Module, Leitungswiderstände, Modulverschmutzung, Teilabschattung und die graduelle Degradation der Module über die Betriebszeit. Ein typischer PR-Wert für moderne Dachanlagen in Deutschland liegt bei etwa 80 %.',
                'In Deutschland schwankt die jährliche Globalstrahlung erheblich je nach Standort. Während in Bayern und Baden-Württemberg Werte von über 1.150 bis 1.250 kWh/m² pro Jahr erreicht werden, liegen norddeutsche Standorte wie Hamburg oder Schleswig-Holstein häufig bei nur 950 bis 1.050 kWh/m². Der Unterschied zwischen dem sonnenreichsten und dem sonnenärmsten deutschen Standort beträgt damit bis zu 25 % – ein Faktor, der in pauschalen Online-Rechnern oft ignoriert wird. Unser Ertragsrechner bezieht die Einstrahlungsdaten direkt über Ihre Postleitzahl und gibt Ihnen so ein realistisches Bild der tatsächlichen Ertragserwartung.',
                'Neben Standort und PR ist die Dachausrichtung der dritte zentrale Parameter. Eine nach Süden ausgerichtete Anlage mit einem Neigungswinkel von rund 32° erzielt in Deutschland den maximalen Jahresertrag und wird im Rechner mit einem Azimutfaktor von 1,00 bewertet. Ost- und Westdächer erzielen rund 82 % des Maximums, Südost- und Südwestdächer etwa 95 %. Auch der Neigungswinkel beeinflusst den Ertrag: Zu flache oder zu steile Dächer weichen vom Optimum ab, wobei der Effekt erst bei großen Abweichungen spürbar wird. Der Rechner modelliert diesen Zusammenhang über eine quadratische Formel um den optimalen Winkel von 32°.',
            ],
            bulletPoints: [
                'Formel: Jahresertrag = kWp × Globalstrahlung × Performance Ratio × Azimutfaktor × Neigungsfaktor',
                'Performance Ratio moderner Dachanlagen: ~80 %',
                'Globalstrahlung Deutschland: 950 kWh/m² (Norddeutschland) bis 1.250 kWh/m² (Bayern)',
                'Optimale Südausrichtung (180°) = 100 % Ertragsfaktor',
                'Optimaler Neigungswinkel in Deutschland: ~32°',
                'Ost-/Westdach: ca. 82 % des Süddach-Ertrags',
            ],
        },
        {
            headline: 'Eigenverbrauch optimieren: Wann lohnt sich selbst erzeugter Strom am meisten?',
            paragraphs: [
                'Der wirtschaftliche Kern einer Photovoltaikanlage ist der Eigenverbrauch. Strom, den Sie selbst aus Ihrer Anlage verbrauchen, erspart Ihnen den Kauf von Netzstrom zum Haushaltsstrompreis – der in Deutschland 2024 im Bundesdurchschnitt bei rund 28 bis 32 Cent pro kWh liegt. Strom, den Sie ins Netz einspeisen, wird nach EEG 2024 mit deutlich niedrigeren Sätzen vergütet. Der Eigenverbrauch ist damit finanziell rund zwei- bis dreimal so wertvoll wie die Einspeisung.',
                'Die Eigenverbrauchsquote gibt an, welcher Anteil des erzeugten Solarstroms direkt im Haushalt verbraucht wird. Sie hängt vom Verhältnis zwischen Ihrem Jahresverbrauch und dem Jahresertrag der Anlage ab. Ein typischer Haushalt ohne Batteriespeicher und ohne besondere Verbraucher wie Wärmepumpe oder Elektroauto erreicht eine Eigenverbrauchsquote von 20 bis 35 %. Wer tagsüber viel zu Hause ist oder flexible Lasten wie Geschirrspüler, Waschmaschine oder Warmwasserspeicher gezielt in die Sonnenstunden verschiebt, kann die Eigenverbrauchsquote auf 35 bis 50 % steigern.',
                'Unser Rechner ermittelt die Eigenverbrauchsquote dynamisch auf Basis des Verhältnisses von Jahresverbrauch zu Jahresertrag. Je größer Ihr Haushaltsstromverbrauch im Verhältnis zur Anlagengröße, desto mehr Solarstrom können Sie direkt nutzen. Eine 5-kWp-Anlage in einem Haushalt mit 5.000 kWh Jahresverbrauch liefert eine deutlich höhere Eigenverbrauchsquote als dieselbe Anlage in einem Haushalt mit nur 2.500 kWh Verbrauch. Dieser Zusammenhang erklärt, warum es bei großem Verbrauch – zum Beispiel durch eine Wärmepumpe oder ein E-Auto – besonders lohnend ist, die Anlagenleistung entsprechend zu dimensionieren.',
            ],
            bulletPoints: [
                'Eigenverbrauch spart ~30 ct/kWh vs. ~8 ct/kWh Einspeisevergütung (EEG 2024)',
                'Ohne Speicher: typische Eigenverbrauchsquote 20–35 %',
                'Mit Batteriespeicher: Eigenverbrauchsquote steigt auf 50–80 %',
                'Mit Wärmepumpe oder E-Auto: deutlich mehr Eigenverbrauch möglich',
                'Lastverschiebung (Waschmaschine, Spülmaschine) hebt Quote ohne Speicher',
            ],
        },
        {
            headline: 'Einspeisevergütung 2024: Was bringt überschüssiger Solarstrom?',
            paragraphs: [
                'Strom, den Ihre Photovoltaikanlage erzeugt, aber den Sie nicht selbst verbrauchen, wird ins öffentliche Stromnetz eingespeist. Dafür erhalten Sie nach dem Erneuerbare-Energien-Gesetz (EEG) eine gesetzlich festgelegte Einspeisevergütung. Diese Vergütung gilt für 20 Jahre ab Inbetriebnahme der Anlage und wird jeweils für Neuanlagen halbjährlich angepasst.',
                'Für Anlagen bis 10 kWp liegt die Einspeisevergütung nach EEG 2024 bei 8,11 Cent pro kWh für die Volleinspeisung. Für Anlagen zwischen 10 und 40 kWp gilt ein leicht reduzierter Satz. Wichtig zu verstehen: Die Vergütung ist pro eingespeister Kilowattstunde, nicht pro erzeugter. Wer also mehr selbst verbraucht, erhält zwar weniger Einspeisevergütung, spart aber deutlich mehr durch den vermiedenen Stromeinkauf. Der Rechner bildet dieses Verhältnis korrekt ab und weist Einspeisevergütung und Strompreisersparnis als separate Positionen aus.',
                'Seit dem Solar-Paket I 2024 gibt es zudem die Möglichkeit, überschüssigen Solarstrom über sogenannte Gemeinschaftliche Gebäudeversorgung oder Mieterstrom-Modelle lokal zu verteilen. Für die typische Eigenheim-Anlage ist die klassische Einspeisung ins Netz jedoch weiterhin der Standardweg. Wer keine Vergütung möchte oder nicht in Anspruch nehmen kann, kann die Anlage auch als Nulleinspeisung betreiben – dies erfordert jedoch einen Einspeisemanagementbaustein und ist bei kleinen Anlagen wirtschaftlich in der Regel nachteilig.',
            ],
            bulletPoints: [
                'Einspeisevergütung bis 10 kWp (EEG 2024): 8,11 ct/kWh',
                'Einspeisevergütung 10–40 kWp (EEG 2024): leicht reduziert',
                'Vergütungsdauer: 20 Jahre ab Inbetriebnahme',
                'Vergütung wird halbjährlich für Neuanlagen abgesenkt – frühere Installation lohnt sich',
                'Volleinspeisung vs. Eigenverbrauch: in der Regel ist Eigenverbrauch wirtschaftlich vorteilhafter',
            ],
        },
        {
            headline: 'Amortisation einer Solaranlage: Wann hat sich die Investition bezahlt gemacht?',
            paragraphs: [
                'Die Amortisationsdauer ist neben dem Jahresertrag die wichtigste Kennzahl für die Wirtschaftlichkeit einer Photovoltaikanlage. Sie gibt an, nach wie vielen Jahren die kumulierten Erträge – also Stromkostenersparnis plus Einspeisevergütung – die ursprünglichen Investitionskosten übersteigen. Moderne Dachanlagen in Deutschland amortisieren sich je nach Standort, Dachausrichtung und Eigenverbrauchsquote typischerweise in 8 bis 14 Jahren.',
                'Unser Rechner berechnet die Amortisation nicht mit einer simplen Payback-Formel, sondern über einen Jahres-für-Jahr-Simulationsansatz über die gesamte Anlagenlebensdauer von 25 Jahren. Dabei wird der Haushaltsstrompreis jährlich um den von Ihnen eingegebenen Strompreisanstieg erhöht – standardmäßig mit 3 % pro Jahr, was dem historischen Mittelwert der letzten Jahrzehnte entspricht. Je stärker die Strompreise steigen, desto früher amortisiert sich die Anlage, da der gesparte Netzstrom immer wertvoller wird.',
                'Typische Investitionskosten für eine schlüsselfertige 10-kWp-Anlage inklusive Wechselrichter und Montage liegen 2024 zwischen 12.000 und 18.000 Euro netto – also rund 1.200 bis 1.800 Euro pro kWp. Günstigere Angebote unter 1.000 Euro/kWp sind möglich, gehen jedoch oft auf Kosten der Modulqualität oder der Gewährleistungsbedingungen. Der Rechner nutzt standardmäßig 15.000 Euro als Investitionsbasis für eine 10-kWp-Anlage, was dem aktuellen Marktdurchschnitt entspricht. Passen Sie diesen Wert auf Ihr tatsächliches Angebot an, um eine präzise Amortisationsberechnung zu erhalten.',
            ],
            bulletPoints: [
                'Typische Amortisation: 8–14 Jahre je nach Standort und Eigenverbrauch',
                'Anlagenlebensdauer: 25–30 Jahre (Modulgarantien meist 25 Jahre)',
                'Kostenbenchmark 2024: ~1.200–1.800 €/kWp inkl. Montage und Wechselrichter',
                'Strompreissteigerung von 3 %/Jahr erhöht die Wirtschaftlichkeit über die Zeit',
                'Nach Amortisation: ~10–17 Jahre nahezu kostenloser Eigenstrom',
            ],
        },
        {
            headline: 'Solaranlage richtig dimensionieren: Wie viel kWp brauche ich wirklich?',
            paragraphs: [
                'Eine häufige Frage beim Kauf einer Photovoltaikanlage lautet: Wie groß soll die Anlage sein? Die Antwort hängt von mehreren Faktoren ab: dem jährlichen Haushaltsstromverbrauch, dem verfügbaren Dachplatz, dem Budget und der geplanten künftigen Nutzung wie Wärmepumpe oder Elektroauto. Als Faustregel gilt: Pro 1.000 kWh Jahresverbrauch empfehlen Experten etwa 1 kWp installierte Leistung, um eine Eigenverbrauchsquote von rund 30 % zu erzielen.',
                'Ein Einfamilienhaus mit 4.000 kWh Jahresverbrauch wäre demnach mit einer 4- bis 5-kWp-Anlage gut versorgt, wenn der Fokus auf hohem Eigenverbrauch liegt. Wer jedoch plant, in den nächsten Jahren ein Elektroauto anzuschaffen oder eine Wärmepumpe einzubauen, sollte die Anlage von vornherein größer dimensionieren – in diesen Fällen sind 10 bis 15 kWp sinnvoll, um den erhöhten Strombedarf abzudecken. Eine Wärmepumpe erhöht den Jahresverbrauch eines typischen Einfamilienhauses um 3.000 bis 5.000 kWh, ein Elektroauto bei durchschnittlicher Fahrleistung um weitere 2.000 bis 3.000 kWh.',
                'Wichtig ist auch die Begrenzung durch den verfügbaren Dachplatz. Ein modernes 400-Wp-Modul benötigt etwa 1,7 bis 2,0 m² Dachfläche. Für eine 10-kWp-Anlage aus 25 Modulen sind demnach etwa 45 bis 50 m² nutzbarer Dachfläche erforderlich. Schattenwurf durch Kamine, Dachgauben oder benachbarte Gebäude sollte unbedingt berücksichtigt werden – modernes Modul-Monitoring und Optimierer können Ertragseinbußen durch Teilabschattung erheblich reduzieren.',
            ],
            bulletPoints: [
                'Faustregel: 1 kWp pro 1.000 kWh Jahresverbrauch für ~30 % Eigenverbrauch',
                'Wärmepumpe: +3.000–5.000 kWh Mehrverbrauch pro Jahr einplanen',
                'Elektroauto: +2.000–3.000 kWh Mehrverbrauch pro Jahr einplanen',
                'Platzbedarf: ~2 m² pro 400-Wp-Modul (10 kWp = ~50 m²)',
                'Größere Anlage + Speicher = maximale Autarkie und Wirtschaftlichkeit',
            ],
        },
        {
            headline: 'Förderungen und Finanzierung: So senken Sie die Investitionskosten',
            paragraphs: [
                'Wer eine Photovoltaikanlage auf dem Eigenheim installiert, kann von einer Reihe staatlicher Förderungen und steuerlicher Vorteile profitieren. Die wichtigste Förderung ist die Umsatzsteuerbefreiung nach § 12 Abs. 3 UStG: Seit Januar 2023 gilt für die Lieferung und Installation von Photovoltaikanlagen auf Wohngebäuden ein Umsatzsteuersatz von 0 %. Das bedeutet, dass Privatpersonen auf die Anlage keine Mehrwertsteuer mehr zahlen – eine sofortige Kosteneinsparung von rund 19 % gegenüber dem früheren Regelsteuersatz.',
                'Auf Bundesebene bietet die KfW-Bank attraktive Finanzierungskonditionen für Photovoltaikanlagen und Stromspeicher über das Programm „Erneuerbare Energien – Standard" (KfW 270). Dieser Kredit ermöglicht eine zinsgünstige Finanzierung der Gesamtinvestition mit Laufzeiten von bis zu 30 Jahren. Insbesondere in Zeiten gestiegener Bauzinsen kann der KfW-270-Kredit die monatliche Belastung erheblich reduzieren und die Wirtschaftlichkeit verbessern.',
                'Zusätzlich zur Bundesförderung bieten viele Bundesländer und Kommunen eigene Förderprogramme für Solaranlagen und Batteriespeicher an. Bayern fördert Speicher über das Bayerische Solarspeicherprogramm, Thüringen über die Thüringer Aufbaubank, und zahlreiche Stadtwerke und Energieversorger bieten eigene Zuschüsse für Netzkunden. Es lohnt sich daher immer, vor dem Kauf die regionalen Fördermöglichkeiten zu prüfen – oft lassen sich 500 bis 3.000 Euro zusätzlich einsparen.',
            ],
            bulletPoints: [
                '0 % Umsatzsteuer auf PV-Anlagen und Speicher seit Januar 2023 (§ 12 Abs. 3 UStG)',
                'KfW 270: zinsgünstiger Kredit für PV-Anlagen und Batteriespeicher',
                'Einspeisevergütung ist nach EEG 2024 einkommensteuerbefreit für Anlagen bis 30 kWp',
                'Länderförderungen: Bayern, Thüringen, NRW u.a. bieten Speicherzuschüsse',
                'Kommunale Förderprogramme und Stadtwerke-Zuschüsse prüfen',
            ],
        },
        {
            headline: 'Anmeldung und Inbetriebnahme: Was müssen Hausbesitzer beachten?',
            paragraphs: [
                'Die Installation einer Photovoltaikanlage ist in Deutschland mit einigen bürokratischen Schritten verbunden, die Ihr Installateur in der Regel übernimmt oder begleitet. Zunächst muss die Anlage beim zuständigen Netzbetreiber angemeldet werden, bevor sie in Betrieb genommen werden darf. Der Netzbetreiber prüft die technische Verträglichkeit mit dem Netz und tauscht gegebenenfalls den Zweirichtungszähler aus, der sowohl den bezogenen als auch den eingespeisten Strom misst.',
                'Nach der Inbetriebnahme muss die Anlage zwingend im Marktstammdatenregister (MaStR) der Bundesnetzagentur registriert werden. Diese Registrierung ist gesetzlich vorgeschrieben und muss innerhalb eines Monats nach Inbetriebnahme erfolgen. Die Registrierung ist kostenlos und kann online über das Portal der Bundesnetzagentur vorgenommen werden. Ohne Registrierung kann der Anspruch auf Einspeisevergütung erlöschen – ein häufig übersehenes Detail.',
                'Für Anlagen bis 10 kWp auf Einfamilienhäusern entfällt in den meisten Bundesländern die Baugenehmigungspflicht, sofern die Anlage auf dem bestehenden Dach montiert wird und keine anderen baurechtlichen Besonderheiten vorliegen. In denkmalgeschützten Gebäuden oder besonderen Schutzgebieten können jedoch Ausnahmen gelten. Ihr Installateur sollte Sie über die lokalen baurechtlichen Anforderungen informieren – fragen Sie explizit danach.',
            ],
            bulletPoints: [
                'Anmeldung beim Netzbetreiber vor Inbetriebnahme erforderlich',
                'Registrierung im Marktstammdatenregister (MaStR) innerhalb 1 Monat nach Inbetriebnahme',
                'Zweirichtungszähler wird vom Netzbetreiber gestellt (kostenlos)',
                'Baugenehmigung: meist nicht erforderlich für Dachanlagen bis 10 kWp',
                'Denkmalschutz: individuelle Genehmigung kann notwendig sein',
                'Installateur übernimmt in der Regel die Anmeldung beim Netzbetreiber',
            ],
        },
        {
            headline: 'CO₂-Bilanz und Klimaschutz: Der ökologische Mehrwert Ihrer Solaranlage',
            paragraphs: [
                'Neben der finanziellen Rendite leistet eine Photovoltaikanlage auf dem Hausdach einen messbaren Beitrag zum Klimaschutz. Jede Kilowattstunde Solarstrom, die Sie selbst nutzen oder ins Netz einspeisen, vermeidet die Erzeugung dieser Strommenge aus fossilen Quellen. Nach dem aktuellen Emissionsfaktor des Umweltbundesamts (UBA) für den deutschen Strommix liegt die vermiedene CO₂-Emission bei rund 380 bis 400 Gramm pro Kilowattstunde.',
                'Eine 10-kWp-Anlage an einem durchschnittlichen deutschen Standort erzeugt rund 9.000 bis 10.000 kWh Strom pro Jahr. Das entspricht einer jährlichen CO₂-Einsparung von etwa 3.500 bis 4.000 Kilogramm – oder dem CO₂-Äquivalent von rund 20.000 bis 25.000 gefahrenen Kilometern mit einem Benzin-PKW. Über die 25-jährige Anlagenlebensdauer summiert sich diese Einsparung auf 85 bis 100 Tonnen CO₂ pro Anlage.',
                'Dieser ökologische Mehrwert gewinnt zunehmend auch wirtschaftliche Relevanz: Im Rahmen des europäischen Emissionshandels (EU-ETS) steigen die CO₂-Preise langfristig, was fossilbasierte Energieerzeugung weiter verteuert und die relative Wirtschaftlichkeit von Solarstrom zusätzlich stärkt. Hausbesitzer, die heute in Photovoltaik investieren, profitieren damit doppelt: als Klimaschützer und als vorausschauende Energieproduzenten.',
            ],
            bulletPoints: [
                'CO₂-Faktor Strommix Deutschland (UBA 2024): ~380–400 g/kWh',
                '10-kWp-Anlage spart ~3.500–4.000 kg CO₂ pro Jahr',
                'Über 25 Jahre: ~85–100 Tonnen CO₂ pro Anlage',
                'Entspricht ~20.000–25.000 km Fahrtstrecke eines Benziners – jährlich vermieden',
                'Steigende CO₂-Preise machen Solarstrom langfristig noch attraktiver',
            ],
        },
    ],

    faq: [
        {
            question: 'Wie viel kWh erzeugt eine 10-kWp-Solaranlage pro Jahr in Deutschland?',
            answer: 'Eine <strong>10-kWp-Solaranlage</strong> erzeugt in Deutschland je nach Standort, Dachausrichtung und Neigungswinkel zwischen <strong>8.500 und 11.000 kWh pro Jahr</strong>. In Bayern oder Baden-Württemberg mit optimaler Südausrichtung sind Erträge von über 10.500 kWh realistisch, während norddeutsche Standorte mit Ost-West-Dächern eher bei 8.500 bis 9.500 kWh liegen. Unser <a href="/hausdach/ertrag">Solaranlage-Ertragsrechner</a> berechnet den standortgenauen Ertrag auf Basis Ihrer Postleitzahl und Dachparameter.',
        },
        {
            question: 'Wann amortisiert sich eine Solaranlage auf dem Hausdach?',
            answer: 'Die Amortisationsdauer einer Photovoltaikanlage auf dem Hausdach liegt in Deutschland typischerweise bei <strong>8 bis 14 Jahren</strong>. Entscheidend sind die Investitionskosten, der Standort (Globalstrahlung), die Eigenverbrauchsquote und die künftige Strompreisentwicklung. Da moderne Solaranlagen eine Lebensdauer von <strong>25 bis 30 Jahren</strong> haben, verbleiben nach der Amortisation noch 12 bis 20 Jahre nahezu kostenloser Eigenstrom. Unser Rechner simuliert die Amortisation jahresgenau unter Berücksichtigung steigender Strompreise.',
        },
        {
            question: 'Wie hoch ist die Einspeisevergütung für Solaranlagen 2024?',
            answer: 'Die gesetzliche Einspeisevergütung nach <strong>EEG 2024</strong> beträgt für Neuanlagen bis 10 kWp derzeit <strong>8,11 Cent pro kWh</strong>. Für Anlagen zwischen 10 und 40 kWp gilt ein leicht niedrigerer Satz. Die Vergütung wird für <strong>20 Jahre</strong> ab Inbetriebnahme garantiert und für Neuanlagen halbjährlich angepasst. Da die Sätze sinken, lohnt sich eine frühere Inbetriebnahme. Wichtig: Seit 2023 ist die Einspeisevergütung für Anlagen bis 30 kWp <strong>einkommensteuerbefreit</strong>.',
        },
        {
            question: 'Wie groß sollte meine Solaranlage für ein Einfamilienhaus sein?',
            answer: 'Für ein typisches Einfamilienhaus mit einem Jahresverbrauch von <strong>3.500 bis 5.000 kWh</strong> empfehlen Experten eine Anlagenleistung von <strong>5 bis 8 kWp</strong>, wenn kein Speicher geplant ist. Mit Batteriespeicher oder bei Zusatzverbrauchern wie Wärmepumpe oder Elektroauto sind <strong>10 bis 15 kWp</strong> wirtschaftlich sinnvoll. Als Faustregel gilt: 1 kWp pro 1.000 kWh Jahresverbrauch für eine Eigenverbrauchsquote von etwa 30 %. Unser <a href="/hausdach/ertrag">Ertragsrechner</a> hilft Ihnen, die optimale Anlagengröße für Ihren konkreten Verbrauch zu finden.',
        },
        {
            question: 'Brauche ich eine Baugenehmigung für eine Solaranlage auf dem Dach?',
            answer: 'In den meisten Bundesländern ist für <strong>Photovoltaikanlagen auf Wohngebäuden keine Baugenehmigung</strong> erforderlich, solange die Anlage auf der bestehenden Dachfläche montiert wird und keine baulichen Veränderungen am Tragwerk vorgenommen werden. Ausnahmen gelten bei <strong>denkmalgeschützten Gebäuden</strong> oder in bestimmten Schutzgebieten – hier ist eine individuelle Genehmigung notwendig. Unabhängig von der Baugenehmigung ist jedoch die <strong>Anmeldung beim Netzbetreiber</strong> und die Registrierung im <strong>Marktstammdatenregister</strong> gesetzlich verpflichtend.',
        },
        {
            question: 'Wie viel CO₂ spart eine Solaranlage pro Jahr?',
            answer: 'Eine <strong>10-kWp-Solaranlage</strong> spart an einem durchschnittlichen deutschen Standort etwa <strong>3.500 bis 4.000 kg CO₂ pro Jahr</strong>. Grundlage ist der CO₂-Emissionsfaktor des deutschen Strommixes von rund <strong>380–400 g/kWh</strong> (Umweltbundesamt 2024). Über die gesamte Anlagenlebensdauer von 25 Jahren summiert sich das auf rund <strong>85 bis 100 Tonnen vermiedenes CO₂</strong> – vergleichbar mit dem Jahresausstoß von vier bis fünf Durchschnittsbürgern in Deutschland. Unser Rechner zeigt die CO₂-Einsparung Ihrer konkreten Anlagenkonfiguration direkt im Ergebnis.',
        },
        {
            question: 'Lohnt sich ein Batteriespeicher zur Solaranlage?',
            answer: 'Ein Batteriespeicher steigert die Eigenverbrauchsquote einer Solaranlage von typischerweise <strong>20–35 % auf 50–80 %</strong> und erhöht damit den Anteil des selbst genutzten Solarstroms erheblich. Wirtschaftlich lohnt sich ein Speicher vor allem dann, wenn die Strompreise hoch sind und die Anlage deutlich mehr produziert als tagsüber verbraucht wird. Die Investitionskosten für Heimspeicher liegen 2024 bei etwa <strong>800 bis 1.200 Euro pro kWh nutzbarer Kapazität</strong>. Bei einem 10-kWh-Speicher sind das 8.000 bis 12.000 Euro Zusatzinvestition – die Amortisation liegt dann oft bei 12 bis 18 Jahren. Mit dem <a href="/hausdach/speicher">Speicher-Rechner auf Klarwatt</a> können Sie die Wirtschaftlichkeit gezielt für Ihre Situation prüfen.',
        },
    ],
};