import React, { useState, useEffect, useCallback } from 'react';
import type { CalculatorConfig } from '../../types/calculator';
import { InputControl } from './InputControl';
import { ResultCard } from './ResultCard';
import { AssumptionsPanel } from './AssumptionsPanel';
import { Share2 } from 'lucide-react';
import { fetchIrradiance } from '../../lib/pvgis';

interface CalculatorShellProps {
    config: CalculatorConfig;
}

export const CalculatorShell: React.FC<CalculatorShellProps> = ({ config }) => {
    // Initialize state from URL params or defaults
    const [inputs, setInputs] = useState<Record<string, number | string>>(() => {
        const params = new URLSearchParams(window.location.search);
        const initial: Record<string, number | string> = {};
        config.inputs.forEach(input => {
            const urlVal = params.get(input.id);
            if (urlVal !== null) {
                initial[input.id] = (input.type === 'number' || input.type === 'slider') ? Number(urlVal) : urlVal;
            } else {
                initial[input.id] = input.default;
            }
        });
        return initial;
    });

    const [results, setResults] = useState<Record<string, number>>({});
    const [irradiance, setIrradiance] = useState<number | undefined>(undefined);
    const [copied, setCopied] = useState(false);

    // Core Pure Calculation Trigger
    const runCalculation = useCallback((currentInputs: Record<string, number | string>, currentIrradiance?: number) => {
        try {
            const res = config.calculate(currentInputs, currentIrradiance);
            setResults(res);
        } catch (e) {
            console.error("Calculation error:", e);
        }
    }, [config]);

    // Handle Input Changes
    const handleInputChange = (id: string, value: string | number) => {
        setInputs(prev => {
            const next = { ...prev, [id]: value };
            runCalculation(next, irradiance);
            return next;
        });
    };

    const handleInputBlur = async (id: string, value: string | number) => {
        const fieldConfig = config.inputs.find(i => i.id === id);
        if (fieldConfig?.type === 'plz' && String(value).length === 5) {
            console.log("Fetching PVGIS for PLZ:", value);
            const yieldData = await fetchIrradiance(String(value));
            if (yieldData) {
                setIrradiance(yieldData);
                runCalculation(inputs, yieldData);
            }
        }
    };

    // Initial Calculation Run
    useEffect(() => {
        runCalculation(inputs, irradiance);
    }, [inputs, irradiance, runCalculation]);

    // Update URL Query Params for Sharing
    useEffect(() => {
        const params = new URLSearchParams();
        Object.entries(inputs).forEach(([k, v]) => {
            const def = config.inputs.find(i => i.id === k)?.default;
            if (v !== def) params.set(k, String(v));
        });
        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        window.history.replaceState({}, '', newUrl);
    }, [inputs, config.inputs]);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container" style={{ padding: '3rem 1rem' }}>

            {/* Header */}
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.025em' }}>
                    {config.title}
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--color-slate-600)', maxWidth: '800px' }}>
                    {config.description}
                </p>
            </div>

            {/* Main Grid: 40% Inputs / 60% Outputs Desktop */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                {/* Left Col: Inputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="card">
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-slate-200)' }}>
                            Ihre Daten
                        </h2>
                        {config.inputs.map(input => (
                            <InputControl
                                key={input.id}
                                config={input}
                                value={inputs[input.id]}
                                onChange={handleInputChange}
                                onBlur={handleInputBlur}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Col: Outputs */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <ResultCard fields={config.outputs} results={results} />

                    <button onClick={handleShare} className="btn" style={{ background: 'white', border: '1px solid var(--color-slate-200)', color: 'var(--color-slate-900)', width: '100%' }}>
                        <Share2 size={18} style={{ marginRight: '0.5rem' }} />
                        {copied ? 'Link kopiert!' : 'Ergebnis-Link kopieren'}
                    </button>

                    <AssumptionsPanel assumptions={config.assumptions} />
                </div>

            </div>
        </div>
    );
};
