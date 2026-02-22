import React from 'react';
import { Sun, CheckCircle2, Shield, Zap } from 'lucide-react';

export const AboutPage: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* Hero Section */}
            <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <Sun className="h-16 w-16 text-solar-500 mx-auto mb-6" />
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Über Klar<span className="text-solar-500">watt</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Wir bauen die Werkzeuge, die Deutschland für die persönliche Energiewende braucht.
                        Unabhängig, präzise und für jeden zugänglich.
                    </p>
                </div>

                {/* Subtle Background Decoration */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-solar-500 rounded-full blur-3xl" />
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-slate-500 rounded-full blur-3xl" />
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">

                    <div className="prose prose-slate prose-lg max-w-none">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Die Mission</h2>
                        <p className="text-slate-600 leading-relaxed mb-8">
                            Die Entscheidung für eine Solaranlage — egal ob Balkonkraftwerk, komplettes Hausdach oder Solarzaun — scheitert oft an der Intransparenz des Marktes. Werbematerialien von Herstellern versprechen unrealistische Maximalerträge, während veraltete pauschale Faustformeln die Physik hinter modernen Modulen und komplexen Anlagenprofilen ignorieren.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-12">
                            Klarwatt wurde mit einem klaren Ziel gegründet: Jeder soll in der Lage sein, die Wirtschaftlichkeit, den Ertrag und die CO₂-Einsparung seines Solar-Projekts selbst zu berechnen. Ohne technisches Vorwissen, ohne sich bei Newslettern anmelden zu müssen und ohne in Verkaufsfunnels zu landen.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                                <Shield className="h-10 w-10 text-solar-500 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Unabhängig</h3>
                                <p className="text-slate-600 text-sm">Keine gesponserten Ergebnisse oder versteckte Empfehlungsprovisionen für bestimmte Hersteller.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                                <CheckCircle2 className="h-10 w-10 text-solar-500 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Präzise</h3>
                                <p className="text-slate-600 text-sm">Wir nutzen offizielle Strahlungsdatenbanken (PVGIS) der EU und anerkannte physikalische Modelle.</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                                <Zap className="h-10 w-10 text-solar-500 mx-auto mb-4" />
                                <h3 className="font-bold text-slate-900 mb-2">Kostenlos</h3>
                                <p className="text-slate-600 text-sm">Alle Rechner und Tools auf dieser Plattform sind und bleiben zu 100 % kostenlos zugänglich.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight mt-12">Die Technik dahinter</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Die Werkzeuge auf Klarwatt sind keine simplen Taschenrechner. Im Hintergrund laufen hochkomplexe Algorithmen, die eine Vielzahl von Variablen in Echtzeit verarbeiten:
                        </p>
                        <ul className="space-y-4 mb-8 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100">
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-solar-500 mt-2.5 mr-4 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Standortspezifisches Klima:</strong> Lokale Sonneneinstrahlungsdaten basierend auf exakten Geokoordinaten (abgeleitet aus der Postleitzahl).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-solar-500 mt-2.5 mr-4 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Physikalische Modelle:</strong> Detaillierte Berechnung von Azimut-Abweichungen (Himmelsrichtung) und Neigungswinkel-Effizienzen.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 rounded-full bg-solar-500 mt-2.5 mr-4 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Wirtschaftsmathematik:</strong> Integration dynamischer Strompreise, Eigenverbrauchsquoten-Schätzungen (basierend auf HTW-Berlin Forschung) und aktuellen EEG-Vergütungssätzen.</span>
                            </li>
                        </ul>
                        <p className="text-slate-600 leading-relaxed">
                            Wir erweitern das Portfolio kontinuierlich. Ziel ist es, für jedes Nischenprojekt — vom 400W Off-Grid Solar Setup am Gartenhaus bis hin zur 30kWp Anlage mit Wärmepumpen-Kopplung — das passende Berechnungstool bereitzustellen.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
