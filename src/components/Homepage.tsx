import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import * as Icons from 'lucide-react';

export const Homepage: React.FC = () => {
    const [search, setSearch] = useState('');

    const filteredCategories = useMemo(() => {
        if (!search) return CATEGORIES;
        const lowerSearch = search.toLowerCase();
        return CATEGORIES.filter(c =>
            c.title.toLowerCase().includes(lowerSearch) ||
            c.description.toLowerCase().includes(lowerSearch)
        );
    }, [search]);

    const renderIcon = (name: string) => {
        const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
        return <IconComponent size={32} style={{ color: 'var(--color-solar-500)', marginBottom: '1rem' }} />;
    };

    return (
        <div>
            {/* Hero Section */}
            <section style={{ background: 'var(--color-slate-900)', color: 'white', padding: '6rem 1rem', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
                        Der ehrliche <span style={{ color: 'var(--color-solar-500)' }}>Solar-Rechner</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-slate-200)', marginBottom: '3rem', lineHeight: 1.6 }}>
                        Kein Vertrieb. Kein Bullshit. Nur präzise, transparente Berechnungen für
                        Ihr Photovoltaik-Projekt. Berechnen Sie Ertrag, Wirtschaftlichkeit und Autarkie.
                    </p>

                    <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '1rem', color: 'var(--color-slate-400)' }}>
                            <Icons.Search size={24} />
                        </div>
                        <input
                            type="text"
                            placeholder="Welches Projekt planen Sie?"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '1.25rem 1.25rem 1.25rem 3.5rem',
                                fontSize: '1.125rem',
                                borderRadius: '9999px',
                                border: 'none',
                                outline: 'none',
                                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* How it works strip */}
            <section style={{ background: 'var(--color-solar-50)', padding: '3rem 1rem', borderBottom: '1px solid var(--color-slate-200)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-solar-500)', marginBottom: '0.5rem' }}>1</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Postleitzahl eingeben</h3>
                        <p style={{ color: 'var(--color-slate-600)' }}>Wir rufen exakte Sonnendaten des EU PVGIS für Ihre Region ab.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-solar-500)', marginBottom: '0.5rem' }}>2</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Rechner wählen</h3>
                        <p style={{ color: 'var(--color-slate-600)' }}>Von Balkonkraftwerk bis Agri-PV haben wir das passende Tool.</p>
                    </div>
                    <div>
                        <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-solar-500)', marginBottom: '0.5rem' }}>3</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sofort-Ergebnis</h3>
                        <p style={{ color: 'var(--color-slate-600)' }}>Ehrliche Zahlen zur Amortisation ohne versteckte Annahmen.</p>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="container" style={{ padding: '6rem 1rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', textAlign: 'center' }}>Unsere Kalkulatoren</h2>

                {filteredCategories.length === 0 ? (
                    <div style={{ textAlign: 'center', color: 'var(--color-slate-600)', padding: '4rem 0' }}>
                        Keine Kategorien für "{search}" gefunden.
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {filteredCategories.map(cat => (
                            <Link
                                to={`/${cat.slug}`}
                                key={cat.slug}
                                className="card"
                                style={{ display: 'block', textDecoration: 'none', transition: 'all 0.2s', color: 'inherit' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                {renderIcon(cat.iconName)}
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{cat.title}</h3>
                                <p style={{ color: 'var(--color-slate-600)', marginBottom: '1.5rem', minHeight: '3rem' }}>{cat.description}</p>
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-solar-600)' }}>
                                    {cat.calculatorCount} Rechner &rarr;
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};
