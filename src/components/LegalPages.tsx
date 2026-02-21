import React from 'react';

export const LegalPages: React.FC<{ type: 'impressum' | 'datenschutz' }> = ({ type }) => {
    return (
        <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
            {type === 'impressum' ? (
                <>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Impressum</h1>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Angaben gemäß § 5 TMG</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-slate-600)' }}>
                        Lukas Hoffbauer<br />
                        Musterstraße 123<br />
                        80331 München
                    </p>
                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Kontakt</h2>
                    <p style={{ color: 'var(--color-slate-600)' }}>
                        E-Mail: kontakt@klarwatt.de<br />
                        (Platzhalter für echte Daten vor Launch)
                    </p>
                </>
            ) : (
                <>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Datenschutzerklärung</h1>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-slate-600)' }}>
                        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Website speichert standardmäßig keine
                        personenbezogenen Daten in Datenbanken oder Cookies.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>1. Hosting (GitHub Pages)</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-slate-600)' }}>
                        Diese Website wird über GitHub Pages gehostet. Bei der Nutzung werden Verbindungsdaten
                        (wie IP-Adressen) technisch bedingt an Server von GitHub (USA) übertragen.
                    </p>

                    <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>2. Externe APIs (PVGIS)</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-slate-600)' }}>
                        Die Rechner auf unserer Seite nutzen für die Abfrage von Sonneneinstrahlungsdaten
                        die kostenlose Schnittstelle des EU Joint Research Centres (PVGIS). Wenn Sie eine
                        Postleitzahl eingeben, wandeln wir diese lokal in Koordinaten (Breitengrad/Längengrad) um
                        und senden diese an europäische Server zur Abfrage der Wetterdaten.
                    </p>

                    <p style={{ color: 'var(--color-slate-600)' }}>
                        (Platzhalter für vom Anwalt geprüfte DSGVO Textbausteine)
                    </p>
                </>
            )}
        </div>
    );
};
