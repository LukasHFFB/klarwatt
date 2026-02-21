import React from 'react';
import type { InputField } from '../../types/calculator';

interface InputControlProps {
    config: InputField;
    value: string | number;
    onChange: (id: string, value: string | number) => void;
    onBlur?: (id: string, value: string | number) => void;
}

export const InputControl: React.FC<InputControlProps> = ({ config, value, onChange, onBlur }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let val: string | number = e.target.value;
        if (config.type === 'number' || config.type === 'slider') {
            val = val === '' ? '' : Number(val);
        }
        onChange(config.id, val);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (onBlur) {
            let val: string | number = e.target.value;
            if (config.type === 'number' || config.type === 'slider') {
                val = val === '' ? '' : Number(val);
            }
            onBlur(config.id, val);
        }
    };

    const commonProps = {
        id: config.id,
        value: value,
        onChange: handleChange,
        onBlur: handleBlur,
        className: 'input-field',
    };

    return (
        <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor={config.id} style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem', color: 'var(--color-slate-900)' }}>
                {config.label}
                {config.unit && <span style={{ color: 'var(--color-slate-600)', marginLeft: '0.25rem', fontWeight: 400 }}>({config.unit})</span>}
            </label>

            {config.tooltip && (
                <p style={{ fontSize: '0.875rem', color: 'var(--color-slate-600)', marginBottom: '0.5rem' }}>
                    {config.tooltip}
                </p>
            )}

            {config.type === 'select' && config.options ? (
                <select {...commonProps}>
                    {config.options.map(opt => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : config.type === 'slider' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <input
                        {...commonProps}
                        type="range"
                        min={config.min}
                        max={config.max}
                        step={config.step}
                        style={{ flex: 1 }}
                    />
                    <span style={{ minWidth: '4rem', textAlign: 'right', fontWeight: 600 }}>{value}</span>
                </div>
            ) : (
                <input
                    {...commonProps}
                    type={config.type === 'number' ? 'number' : 'text'}
                    min={config.min}
                    max={config.max}
                    step={config.step}
                    placeholder={String(config.default)}
                />
            )}
        </div>
    );
};
