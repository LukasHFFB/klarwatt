import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';
import * as LucideIcons from 'lucide-react';

export const Homepage: React.FC = () => {
    const [search, setSearch] = useState('');

    const filteredCategories = useMemo(() => {
        if (!search) return CATEGORIES;
        const lowerSearch = search.toLowerCase();
        return CATEGORIES.filter(c =>
            c.title.toLowerCase().includes(lowerSearch) ||
            c.description.toLowerCase().includes(lowerSearch)
        );
    }, [search]);

    const renderIcon = (name: string, className: string = "h-6 w-6") => {
        const IconComponent = (LucideIcons as any)[name] || LucideIcons.HelpCircle;
        return <IconComponent className={className} />;
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section with Suche */}
            <section className="bg-white border-b border-slate-200 pt-16 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Berechne dein <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-500 to-orange-400">Solar-Potenzial</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Kostenlos, werbefrei und unabhängig. Finde den passenden Rechner für dein Projekt – vom Balkonkraftwerk bis zur Wärmepumpe.
                    </p>

                    {/* Suchfeld */}
                    <div className="max-w-xl mx-auto relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <LucideIcons.Search className="h-5 w-5 text-slate-400 group-focus-within:text-solar-500 transition-colors" />
                        </div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="block w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-solar-500 focus:border-solar-500 sm:text-lg shadow-sm transition-all"
                            placeholder="Welchen Rechner suchst du? (z.B. Ertrag Carport)"
                        />
                    </div>
                </div>
            </section>

            {/* Kategorien Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900">Rechner-Kategorien</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCategories.map(cat => (
                        <Link
                            to={`/${cat.slug}`}
                            key={cat.slug}
                            className="group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-solar-500 transition-all cursor-pointer flex flex-col justify-between card-transition"
                        >
                            <div>
                                <div className="bg-solar-50 text-solar-600 rounded-xl w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-solar-500 group-hover:text-white transition-colors">
                                    {renderIcon(cat.iconName)}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-solar-600 transition-colors">{cat.title}</h3>
                                <p className="text-sm text-slate-500">{cat.description}</p>
                            </div>
                        </Link>
                    ))}

                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                        <div className="bg-slate-200 text-slate-400 rounded-xl w-12 h-12 flex items-center justify-center mb-3">
                            <LucideIcons.Plus className="h-6 w-6" />
                        </div>
                        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Weitere Folgen</h3>
                        <p className="text-xs text-slate-400 mt-1 max-w-[150px]">Wir entwickeln ständig neue Tools.</p>
                    </div>
                </div>

                {filteredCategories.length === 0 && (
                    <div className="text-center py-12">
                        <LucideIcons.SearchX className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900">Keine Kategorie gefunden</h3>
                        <p className="text-slate-500">Bitte probiere einen anderen Suchbegriff.</p>
                    </div>
                )}
            </main>


        </div>
    );
};
