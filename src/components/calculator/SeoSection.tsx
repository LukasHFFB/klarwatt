import React, { useEffect } from 'react';
import type { SeoContent } from '../../types/content';

interface SeoSectionProps {
    content: SeoContent;
}

export const SeoSection: React.FC<SeoSectionProps> = ({ content }) => {
    useEffect(() => {
        if (content.metaTitle) {
            document.title = content.metaTitle;
        }
    }, [content.metaTitle]);

    return (
        <div className="max-w-4xl mx-auto container">

            {/* Intro Paragraphs */}
            <div className="prose prose-slate max-w-none mb-16">
                {content.introParagraphs.map((p, i) => (
                    <p key={i} className="text-xl text-slate-600 leading-relaxed mb-6 font-medium">
                        {p}
                    </p>
                ))}
            </div>

            {/* Dynamic Sections */}
            <div className="space-y-16 mb-20">
                {content.sections.map((section, idx) => (
                    <article key={idx} className="scroll-mt-24">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                            {section.headline}
                        </h2>

                        <div className="space-y-6">
                            {section.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className="text-lg text-slate-700 leading-relaxed">
                                    {p}
                                </p>
                            ))}
                        </div>

                        {section.bulletPoints && section.bulletPoints.length > 0 && (
                            <ul className="mt-8 space-y-3 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                                {section.bulletPoints.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start text-slate-700 text-lg">
                                        <span className="w-2 h-2 rounded-full bg-solar-500 mt-2.5 mr-4 flex-shrink-0" />
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </article>
                ))}
            </div>

            {/* FAQ */}
            <div className="bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-200">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">Häufige Fragen (FAQ)</h2>
                    <div className="space-y-4">
                        {content.faq.map((item, i) => (
                            <details
                                key={i}
                                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-solar-300 transition-colors"
                            >
                                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-slate-800 hover:text-slate-900 transition-colors select-none text-lg">
                                    <span>{item.question}</span>
                                    <svg
                                        className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 text-lg">
                                    {/* dangerouslySetInnerHTML allows bold/links in answer strings */}
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
