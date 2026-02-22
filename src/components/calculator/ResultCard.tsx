import React from 'react';
import type { OutputField } from '../../types/calculator';
import { Zap, Euro, Clock, Leaf, TrendingUp } from 'lucide-react';

interface ResultCardProps {
    fields: OutputField[];
    results: Record<string, number>;
}

export const ResultCard: React.FC<ResultCardProps> = ({ fields, results }) => {
    const highlightedFields = fields.filter(f => f.highlight);
    const standardFields = fields.filter(f => !f.highlight);

    const formatValue = (val: number | undefined, format: string) => {
        if (val === undefined || isNaN(val)) return '-';
        if (!isFinite(val)) return '–'; // e.g. Infinity when strompreis = 0

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

    const getIcon = (id: string) => {
        switch (id) {
            case 'jahresertrag': return <Zap className="w-5 h-5" />;
            case 'ersparnis': return <Euro className="w-5 h-5" />;
            case 'amortisation': return <Clock className="w-5 h-5" />;
            case 'co2': return <Leaf className="w-5 h-5" />;
            default: return <TrendingUp className="w-5 h-5" />;
        }
    };

    return (
        <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800">
            {/* Hero Highlights Dashboard */}
            <div className="p-8 md:p-10 border-b border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {highlightedFields.map(field => (
                        <div key={field.id} className="space-y-3 group">
                            <div className="flex items-center text-solar-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                <span className="mr-2 p-1.5 bg-solar-500/10 rounded-lg group-hover:bg-solar-500/20 transition-colors">
                                    {getIcon(field.id)}
                                </span>
                                {field.label}
                            </div>
                            <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white tabular-nums flex items-baseline tracking-tight">
                                {formatValue(results[field.id], field.format)}
                                {field.unit && field.format === 'number' && (
                                    <span className="ml-2 text-lg md:text-xl font-bold text-slate-500 uppercase tracking-wide">{field.unit}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Secondary Results Grid */}
            <div className="p-8 bg-slate-900/40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {standardFields.map(field => (
                        <div key={field.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-solar-500/40 hover:bg-white/10 transition-all group">
                            <div className="flex justify-between items-start mb-3">
                                <div className="text-slate-400 text-xs font-bold uppercase tracking-wider group-hover:text-slate-200 transition-colors">
                                    {field.label}
                                </div>
                                <div className="text-solar-500/40 group-hover:text-solar-500 transition-colors">
                                    {getIcon(field.id)}
                                </div>
                            </div>
                            <div className="text-xl md:text-2xl font-black text-white tabular-nums leading-none">
                                {formatValue(results[field.id], field.format)}
                                <span className="ml-1 text-sm font-medium text-slate-500">
                                    {field.format === 'number' ? field.unit : ''}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
