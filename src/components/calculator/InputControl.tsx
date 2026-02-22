import React from 'react';
import type { InputField } from '../../types/calculator';
import { Info } from 'lucide-react';

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
    };

    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center">
                <label htmlFor={config.id} className="block text-sm font-semibold text-slate-700">
                    {config.label}
                    {config.unit && !['slider', 'number'].includes(config.type) && (
                        <span className="ml-1 text-slate-400 font-normal">({config.unit})</span>
                    )}
                </label>
                {config.type === 'slider' && (
                    <span className="text-solar-600 font-bold tabular-nums text-sm bg-solar-50 px-2 py-0.5 rounded-lg border border-solar-100">
                        {value} {config.unit}
                    </span>
                )}
            </div>

            {config.type === 'select' && config.options ? (
                <div className="relative">
                    <select
                        {...commonProps}
                        className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-solar-500/20 focus:border-solar-500 focus:bg-white transition-all sm:text-sm"
                    >
                        {config.options.map(opt => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                </div>
            ) : config.type === 'slider' ? (
                <div className="pt-2">
                    <input
                        {...commonProps}
                        type="range"
                        min={config.min}
                        max={config.max}
                        step={config.step}
                        className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-solar-500 hover:accent-solar-600 transition-all"
                    />
                    <div className="flex justify-between mt-2 text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                        <span>Min: {config.min} {config.unit}</span>
                        <span>Max: {config.max} {config.unit}</span>
                    </div>
                </div>
            ) : (
                <div className="relative">
                    <input
                        {...commonProps}
                        type={config.type === 'number' ? 'number' : 'text'}
                        min={config.min}
                        max={config.max}
                        step={config.step}
                        className={`block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-solar-500/20 focus:border-solar-500 focus:bg-white transition-all sm:text-sm${config.unit ? ' pr-10' : ''}`}
                        placeholder={String(config.default)}
                    />
                    {config.unit && (
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-slate-400 text-sm font-medium">
                            {config.unit}
                        </div>
                    )}
                </div>
            )}

            {config.tooltip && (
                <p className="text-xs text-slate-500 leading-relaxed mt-1 flex items-center">
                    <Info className="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
                    {config.tooltip}
                </p>
            )}
        </div>
    );
};
