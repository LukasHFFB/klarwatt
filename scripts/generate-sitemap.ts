/**
 * Build-time sitemap.xml generator.
 *
 * Run with:  npx tsx scripts/generate-sitemap.ts
 *
 * It imports REGISTRY and CATEGORIES so the sitemap automatically
 * includes every page the app knows about — zero manual maintenance.
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// We can't import .tsx registry directly, but the data is re-exported
// from plain .ts files, so tsx handles it fine.
import { REGISTRY } from '../src/registry/index.js';
import { CATEGORIES } from '../src/data/categories.js';

const SITE = 'https://klarwatt.de';
const TODAY = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

interface SitemapEntry {
    loc: string;
    changefreq: string;
    priority: string;
}

const entries: SitemapEntry[] = [
    // Static pages
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/ueber-uns', changefreq: 'monthly', priority: '0.5' },
    { loc: '/impressum', changefreq: 'yearly', priority: '0.3' },
    { loc: '/datenschutz', changefreq: 'yearly', priority: '0.3' },
    { loc: '/sitemap', changefreq: 'weekly', priority: '0.3' },
];

// Category index pages
for (const cat of CATEGORIES) {
    entries.push({
        loc: `/${cat.slug}`,
        changefreq: 'weekly',
        priority: '0.7',
    });
}

// Calculator pages
for (const { config } of REGISTRY) {
    entries.push({
        loc: `/${config.category}/${config.slug}`,
        changefreq: 'monthly',
        priority: '0.8',
    });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
        .map(
            (e) => `  <url>
    <loc>${SITE}${e.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        )
        .join('\n')}
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ sitemap.xml written to ${outPath}  (${entries.length} URLs)`);
