import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { CategoryIndex } from './components/CategoryIndex';
import { LegalPages } from './components/LegalPages';
import { AboutPage } from './components/AboutPage';
import { SitemapPage } from './components/SitemapPage';
import { CalculatorShell } from './components/calculator/CalculatorShell';
import { REGISTRY } from './registry';
import { CATEGORIES } from './data/categories';
import { Sun, Menu, ChevronDown } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main Navigation Wrapper matching prototype
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Sun className="h-8 w-8 text-solar-500 mr-2" />
              <span className="font-bold text-2xl tracking-tight text-slate-900">Klar<span className="text-solar-500">watt</span></span>
            </Link>
            <nav className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-slate-500 hover:text-solar-600 font-medium transition-colors">Alle Rechner</Link>
              <div className="relative group/nav z-50">
                <button className="flex items-center text-slate-500 hover:text-solar-600 font-medium transition-colors py-2">
                  Kategorien
                  <ChevronDown className="w-4 h-4 ml-1 group-hover/nav:rotate-180 transition-transform" />
                </button>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-slate-200 shadow-xl rounded-xl opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 grid grid-cols-1 overflow-hidden">
                  <div className="max-h-[60vh] overflow-y-auto w-full py-2">
                    {CATEGORIES.map(cat => (
                      <Link key={cat.slug} to={`/${cat.slug}`} className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-solar-600 transition-colors">
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link to="/ueber-uns" className="text-slate-500 hover:text-solar-600 font-medium transition-colors">Über uns</Link>
            </nav>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu" className="p-2 -mr-2">
                <Menu className="h-6 w-6 text-slate-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 shadow-lg absolute w-full max-w-7xl max-h-[80vh] overflow-y-auto">
            <div className="space-y-4 mb-6 border-b border-slate-100 pb-4">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-medium text-lg">Alle Rechner</Link>
              <Link to="/ueber-uns" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-700 font-medium text-lg">Über uns</Link>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Kategorien</div>
              <div className="space-y-3">
                {CATEGORIES.map(cat => (
                  <Link key={cat.slug} to={`/${cat.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="block pl-2 text-slate-600 hover:text-solar-600 font-medium">
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Sun className="h-8 w-8 text-solar-500 mr-2" />
              <span className="font-bold text-2xl text-white tracking-tight">Klar<span className="text-solar-500">watt</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
              Unabhängige Solar-Rechner für Deutschland. Berechne Ertrag, Rendite und Autarkie für dein Projekt komplett kostenlos – ohne Werbung oder versteckte Kosten.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Kategorien</h4>
            <ul className="space-y-3 text-sm">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.slug}>
                  <Link to={`/${cat.slug}`} className="hover:text-solar-500 transition-colors flex items-center">
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/" className="text-solar-500 hover:text-solar-400 transition-colors font-medium">Alle Kategorien ansehen &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Beliebte Rechner</h4>
            <ul className="space-y-3 text-sm">
              {/* Select some featured / functional calculators from the registry to avoid dead links */}
              {REGISTRY.filter(r => ['ertrag', 'amortisation'].includes(r.config.slug)).slice(0, 5).map(({ config }) => (
                <li key={`${config.category}-${config.slug}`}>
                  <Link to={`/${config.category}/${config.slug}`} className="hover:text-solar-500 transition-colors">
                    {config.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Klarwatt</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/ueber-uns" className="hover:text-white transition-colors">Über uns</Link></li>
              <li className="pt-4 mt-4 border-t border-slate-800">
                <Link to="/impressum" className="hover:text-white transition-colors block">Impressum</Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white transition-colors block">Datenschutz</Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-white transition-colors block">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>&copy; 2026 Klarwatt.de. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0 flex items-center">Made with <span className="text-red-500 mx-1">♥</span> in Germany</p>
        </div>
      </footer>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Static Legal Routes */}
          <Route path="/impressum" element={<LegalPages type="impressum" />} />
          <Route path="/datenschutz" element={<LegalPages type="datenschutz" />} />
          <Route path="/ueber-uns" element={<AboutPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />

          {/* Dynamic Calculator Routes — generated from registry/index.ts */}
          {REGISTRY.map(({ config, content }) => (
            <Route
              key={`${config.category}/${config.slug}`}
              path={`/${config.category}/${config.slug}`}
              element={<CalculatorShell config={config} content={content} />}
            />
          ))}

          {/* Dynamic Category Index Route */}
          <Route path="/:categorySlug" element={<CategoryIndex />} />
        </Routes>
      </Layout>
    </Router>
  );
}
