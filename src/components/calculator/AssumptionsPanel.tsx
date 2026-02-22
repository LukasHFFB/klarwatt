import React from 'react';
import type { Assumption } from '../../types/calculator';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface AssumptionsPanelProps {
    assumptions: Assumption[];
}

export const AssumptionsPanel: React.FC<AssumptionsPanelProps> = ({ assumptions }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    if (!assumptions || assumptions.length === 0) return null;

    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-6 py-4 bg-slate-50/50 hover:bg-slate-50 transition-colors text-slate-900 font-bold"
            >
                <div className="flex items-center">
                    <Info className="w-5 h-5 mr-3 text-solar-500" />
                    <span>Annahmen & Quellen</span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>

            {isOpen && (
                <div className="p-0 border-t border-slate-100 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/30">
                            <tr>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Annahme</th>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Wert</th>
                                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Quelle</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {assumptions.map((item, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-slate-600 truncate max-w-[150px]">{item.label}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900 whitespace-nowrap">{item.value}</td>
                                    <td className="px-6 py-4 text-xs text-slate-400 italic font-medium">{item.source || '-'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
