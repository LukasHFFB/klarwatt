import { Link } from 'react-router-dom';
import { REGISTRY } from '../registry';
import { CATEGORIES } from '../data/categories';

/**
 * Public sitemap page that auto-updates as new categories / calculators
 * are added to the registry. Groups calculators by category.
 */
export const SitemapPage = () => {
    // Static pages
    const staticPages = [
        { path: '/', label: 'Startseite' },
        { path: '/ueber-uns', label: 'Über uns' },
        { path: '/impressum', label: 'Impressum' },
        { path: '/datenschutz', label: 'Datenschutz' },
        { path: '/sitemap', label: 'Sitemap' },
    ];

    // Build a map: category slug → calculators[]
    const calcsByCategory = new Map<string, { path: string; title: string }[]>();
    for (const { config } of REGISTRY) {
        const list = calcsByCategory.get(config.category) ?? [];
        list.push({
            path: `/${config.category}/${config.slug}`,
            title: config.title,
        });
        calcsByCategory.set(config.category, list);
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Sitemap</h1>
            <p className="text-slate-500 mb-10">
                Alle Seiten auf Klarwatt.de auf einen Blick.
            </p>

            {/* Static pages */}
            <section className="mb-12">
                <h2 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                    Allgemeine Seiten
                </h2>
                <ul className="space-y-2 pl-4">
                    {staticPages.map((p) => (
                        <li key={p.path}>
                            <Link
                                to={p.path}
                                className="text-solar-600 hover:text-solar-700 hover:underline transition-colors"
                            >
                                {p.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Category pages + their calculators */}
            <section>
                <h2 className="text-lg font-semibold text-slate-800 mb-4 border-b border-slate-200 pb-2">
                    Kategorien &amp; Rechner
                </h2>

                <div className="space-y-8">
                    {CATEGORIES.map((cat) => {
                        const calcs = calcsByCategory.get(cat.slug) ?? [];
                        return (
                            <div key={cat.slug}>
                                <h3 className="font-medium text-slate-700 mb-2">
                                    <Link
                                        to={`/${cat.slug}`}
                                        className="text-solar-600 hover:text-solar-700 hover:underline transition-colors"
                                    >
                                        {cat.title}
                                    </Link>
                                </h3>
                                {calcs.length > 0 && (
                                    <ul className="space-y-1.5 pl-6">
                                        {calcs.map((c) => (
                                            <li key={c.path} className="list-disc list-outside text-slate-400">
                                                <Link
                                                    to={c.path}
                                                    className="text-slate-600 hover:text-solar-600 hover:underline transition-colors"
                                                >
                                                    {c.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};
