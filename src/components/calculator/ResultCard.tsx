import React from 'react';
import type { OutputField } from '../../types/calculator';

interface ResultCardProps {
    fields: OutputField[];
    results: Record<string, number>;
}

export const ResultCard: React.FC<ResultCardProps> = ({ fields, results }) => {
    const highlightedFields = fields.filter(f => f.highlight);
    const standardFields = fields.filter(f => !f.highlight);

    const formatValue = (val: number | undefined, format: string) => {
        if (val === undefined || isNaN(val)) return '-';

        switch (format) {
            case 'currency':
                return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(val);
            case 'percent':
                return new Intl.NumberFormat('de-DE', { style: 'percent', maximumFractionDigits: 1 }).format(val);
            case 'years':
                return `${new Intl.NumberFormat('de-DE', { maximumFractionDigits: 1 }).format(val)} Jahre`;
            case 'number':
            default:
                return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(val);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Hero Highlight Cards */}
            {highlightedFields.length > 0 && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {highlightedFields.map(field => (
                        <div key={field.id} className="card card-amber" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-solar-600)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                                {field.label}
                            </div>
                            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-slate-900)', lineHeight: 1 }}>
                                {formatValue(results[field.id], field.format)}
                            </div>
                            {field.unit && field.format === 'number' && (
                                <div style={{ fontSize: '1rem', color: 'var(--color-slate-600)', marginTop: '0.25rem' }}>{field.unit}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Secondary Results */}
            {standardFields.length > 0 && (
                <div className="card" style={{ padding: '0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <tbody>
                            {standardFields.map((field, idx) => (
                                <tr key={field.id} style={{ borderBottom: idx !== standardFields.length - 1 ? '1px solid var(--color-slate-200)' : 'none' }}>
                                    <td style={{ padding: '1rem 1.5rem', fontWeight: 500, color: 'var(--color-slate-600)' }}>
                                        {field.label}
                                    </td>
                                    <td style={{ padding: '1rem 1.5rem', textAlign: 'right', fontWeight: 700, color: 'var(--color-slate-900)' }}>
                                        {formatValue(results[field.id], field.format)} {field.format === 'number' ? field.unit : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
