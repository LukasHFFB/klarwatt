import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import { REGISTRY } from '../registry';
import * as Icons from 'lucide-react';
import { SeoSection } from './calculator/SeoSection';

export const CategoryIndex: React.FC = () => {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const category = CATEGORIES.find(c => c.slug === categorySlug);

    if (!category) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-3xl font-bold text-slate-900 mb-6">Kategorie nicht gefunden</h1>
                <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-solar-600 hover:bg-solar-700 transition-colors">
                    Zurück zur Startseite
                </Link>
            </div>
        );
    }

    const renderIcon = () => {
        const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;
        return <IconComponent className="w-12 h-12 text-solar-500 mb-6" />;
    };

    // Filter registry for calculators in this category
    const categoryCalculators = REGISTRY.filter(entry => entry.config.category === categorySlug);

    return (
        <div className="bg-slate-50 min-h-screen pb-24">
            {/* Hero Header */}
            <div className="bg-slate-900 py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {renderIcon()}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        {category.title}
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                        {category.description}
                    </p>
                </div>
            </div>

            {/* Calculator Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Working Calculators from Registry */}
                    {categoryCalculators.map(({ config }) => (
                        <Link
                            key={`${config.category}-${config.slug}`}
                            to={`/${config.category}/${config.slug}`}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border-2 border-solar-500 hover:border-solar-600 hover:shadow-md transition-all flex flex-col h-full group"
                        >
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-solar-600 transition-colors">{config.title}</h3>
                            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{config.description}</p>
                            <span className="text-sm font-bold text-solar-600 flex items-center">
                                Rechner starten
                                <Icons.ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    ))}

                    {/* Mocked "Demnächst" cards for remaining count */}
                    {Array.from({ length: Math.max(0, category.calculatorCount - categoryCalculators.length) }).map((_, i) => (
                        <div key={i} className="bg-slate-100/80 rounded-2xl p-6 md:p-8 border border-slate-200/60 relative flex flex-col h-full">
                            <div className="absolute top-4 right-4 bg-slate-200/80 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                Demnächst
                            </div>
                            <h3 className="text-xl font-bold text-slate-400 mb-3 pr-24">Weitere Rechner</h3>
                            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">Dieses Tool befindet sich aktuell noch in der Entwicklung und wird in Kürze veröffentlicht.</p>
                            <span className="text-sm font-semibold text-slate-400 flex items-center">
                                Bald verfügbar
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* SEO Article Section (Injected if available) */}
            {category.seoContent && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                        <SeoSection content={category.seoContent} />
                    </div>
                </div>
            )}
        </div>
    );
};
