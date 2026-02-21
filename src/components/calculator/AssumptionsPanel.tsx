import React from 'react';
import type { Assumption } from '../../types/calculator';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AssumptionsPanelProps {
    assumptions: Assumption[];
}

export const AssumptionsPanel: React.FC<AssumptionsPanelProps> = ({ assumptions }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    if (!assumptions || assumptions.length === 0) return null;

    return (
        <div style={{ marginTop: '3rem', border: '1px solid var(--color-slate-200)', borderRadius: '0.5rem', overflow: 'hidden', background: 'white' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.5rem',
                    background: 'var(--color-slate-50)',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                    color: 'var(--color-slate-900)',
                }}
            >
                <span>Annahmen &amp; Quellen</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {isOpen && (
                <div style={{ padding: '0', borderTop: '1px solid var(--color-slate-200)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <thead>
                            <tr style={{ background: 'var(--color-slate-50)', borderBottom: '1px solid var(--color-slate-200)' }}>
                                <th style={{ padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Annahme</th>
                                <th style={{ padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Wert</th>
                                <th style={{ padding: '0.75rem 1.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Quelle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assumptions.map((item, idx) => (
                                <tr key={idx} style={{ borderBottom: '1px solid var(--color-slate-200)' }}>
                                    <td style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}>{item.label}</td>
                                    <td style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.value}</td>
                                    <td style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem', color: 'var(--color-slate-600)' }}>{item.source || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
