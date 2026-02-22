import React from 'react';

export const LegalPages: React.FC<{ type: 'impressum' | 'datenschutz' }> = ({ type }) => {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            <div className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-extrabold text-white tracking-tight">
                    {type === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'}
                </h1>
            </div>

            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
                    {type === 'impressum' ? (
                        <div className="prose prose-slate prose-lg max-w-none">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Angaben gemäß § 5 TMG</h2>
                            <p className="text-slate-700 leading-relaxed mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                                Lukas Hoffbauer<br />
                                Aboulevard 59B<br />
                                Frederiksberg C<br />
                                Dänemark
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Kontakt</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                E-Mail: <a href="mailto:kontakt@klarwatt.de" className="text-solar-600 hover:text-solar-700 font-medium">kontakt@klarwatt.de</a>
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                            <p className="text-slate-700 leading-relaxed mb-8 text-sm">
                                Lukas Hoffbauer (Anschrift wie oben)
                            </p>

                            <h2 className="text-xl font-bold text-slate-900 mb-4 mt-12">Haftung für Inhalte</h2>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                            </p>
                        </div>
                    ) : (
                        <div className="prose prose-slate prose-lg max-w-none">
                            <p className="text-slate-700 leading-relaxed font-semibold mb-8">
                                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Website behandelt Ihre Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">1. Datenerfassung auf dieser Website</h2>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Cookies & Analytics</h3>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Diese Website nutzt bewusst <strong>keine</strong> Cookies zur Verbindungsnachverfolgung und <strong>keine</strong> Third-Party-Tracking-Tools wie Google Analytics oder Meta Pixel. Die reine Nutzung der Website (Lesen von Artikeln, Klicken von Links) erfolgt vollständig anonym.
                            </p>

                            <h3 className="text-xl font-bold text-slate-800 mb-3">Server-Log-Dateien (Hosting)</h3>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Diese Website wird über Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-700">
                                <li>Browsertyp und Browserversion</li>
                                <li>verwendetes Betriebssystem</li>
                                <li>Referrer URL</li>
                                <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
                                <li>Uhrzeit der Serveranfrage</li>
                            </ul>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">2. Externe APIs (Solar-Rechner)</h2>
                            <p className="text-slate-700 leading-relaxed mb-6">
                                Das Kernstück unserer Website bilden die interaktiven Solar-Rechner. Um die standortspezifischen Sonneneinstrahlungswerte präzise zu kalkulieren, binden wir die API der Datenbank PVGIS des Europäischen Gemeinsamen Forschungszentrums (EU JRC) ein.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-8">
                                <h4 className="font-bold text-slate-900 mb-2">Wie Ihre Daten verarbeitet werden:</h4>
                                <ul className="space-y-3 text-sm text-slate-700">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-solar-500 mt-2 mr-3 flex-shrink-0" />
                                        <span>Wenn Sie eine deutsche Postleitzahl in einen unserer Rechner eingeben, wandelt Ihr lokaler Browser diese Postleitzahl zunächst im Hintergrund in geografische Koordinaten (Längen- und Breitengrad) um. Diese Umwandlung erfolgt lokal durch eine der Website beiliegenden Geo-JSON Datei. Ihre Postleitzahl wird <strong>nicht</strong> an externe Server gesendet.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-solar-500 mt-2 mr-3 flex-shrink-0" />
                                        <span>Anschließend sendet unser Vercel-Server (als Proxy) lediglich die anonymen geografischen Koordinaten an die Server der EU JRC (PVGIS), um die Strahlungsdaten abzufragen.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-solar-500 mt-2 mr-3 flex-shrink-0" />
                                        <span>Wir speichern diese Daten nicht in Datenbanken. Nach Abschluss der Berechnung in Ihrem Browser werden alle eingegebenen Daten wie Stromverbrauch und Postleitzahl sofort verworfen.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">3. Kontaktaufnahme per E-Mail</h2>
                            <p className="text-slate-700 leading-relaxed mb-8">
                                Wenn Sie uns per E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus der E-Mail inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            </p>

                            <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-8">4. Ihre Rechte</h2>
                            <p className="text-slate-700 leading-relaxed">
                                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an die im Impressum angegebene Adresse wenden.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
