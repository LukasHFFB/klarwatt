import React from 'react';
import type { SeoContent } from '../../types/content';

interface SeoSectionProps {
    content: SeoContent;
}

export const SeoSection: React.FC<SeoSectionProps> = ({ content }) => {
    return (
        <div className="max-w-4xl">
            {/* Intro */}
            <p className="text-lg text-slate-600 leading-relaxed mb-12">
                {content.intro}
            </p>

            {/* How It Works */}
            {content.howItWorks && (
                <div className="mb-12 p-6 rounded-2xl bg-solar-50 border border-solar-100">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                        <span className="w-6 h-6 rounded-full bg-solar-500 text-white text-xs flex items-center justify-center mr-3 flex-shrink-0 font-black">?</span>
                        So funktioniert der Rechner
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{content.howItWorks}</p>
                </div>
            )}

            {/* FAQ */}
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Häufige Fragen</h2>
            <div className="space-y-4">
                {content.faq.map((item, i) => (
                    <details
                        key={i}
                        className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-solar-300 transition-colors"
                    >
                        <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-slate-800 hover:text-slate-900 transition-colors select-none">
                            <span>{item.question}</span>
                            <svg
                                className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                            {/* dangerouslySetInnerHTML allows bold/links in answer strings */}
                            <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
};
