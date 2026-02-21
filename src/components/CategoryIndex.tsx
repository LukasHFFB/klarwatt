import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { BalkonkraftwerkConfig } from '../calculators/balkonkraftwerk/ertrag/config';
import * as Icons from 'lucide-react';

export const CategoryIndex: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const category = CATEGORIES.find(c => c.slug === categorySlug);

    if (!category) {
        return (
            <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Kategorie nicht gefunden</h1>
                <Link to="/" className="btn btn-primary">Zurück zur Startseite</Link>
            </div>
        );
    }

    const renderIcon = () => {
        const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;
        return <IconComponent size={48} style={{ color: 'var(--color-solar-500)', marginBottom: '1.5rem' }} />;
    };

    // For V1, we only have one actual calculator built. 
    // The rest are mocked "Demnächst" cards to show architecture capability.
    const isBalkonkraftwerk = category.slug === 'balkonkraftwerk';

    return (
        <div>
            <div style={{ background: 'var(--color-slate-900)', color: 'white', padding: '4rem 1rem' }}>
                <div className="container">
                    {renderIcon()}
                    <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1rem' }}>{category.title}</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-slate-200)', maxWidth: '600px' }}>
                        {category.description}
                    </p>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* The Working Calculator */}
                    {isBalkonkraftwerk && (
                        <Link to={`/${category.slug}/${BalkonkraftwerkConfig.slug}`} className="card" style={{ textDecoration: 'none', color: 'inherit', border: '2px solid var(--color-solar-500)' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{BalkonkraftwerkConfig.title}</h3>
                            <p style={{ color: 'var(--color-slate-600)', marginBottom: '1.5rem' }}>{BalkonkraftwerkConfig.description}</p>
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-solar-600)' }}>Rechner starten &rarr;</span>
                        </Link>
                    )}

                    {/* Placeholder Calculators logic */}
                    {Array.from({ length: isBalkonkraftwerk ? category.calculatorCount - 1 : category.calculatorCount }).map((_, i) => (
                        <div key={i} className="card" style={{ opacity: 0.7, position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-slate-200)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                                Demnächst
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-slate-400)' }}>Weiterer Rechner</h3>
                            <p style={{ color: 'var(--color-slate-400)' }}>Dieses Tool befindet sich aktuell in der Entwicklung.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
