import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { CategoryIndex } from './components/CategoryIndex';
import { LegalPages } from './components/LegalPages';
import { CalculatorShell } from './components/calculator/CalculatorShell';
import { BalkonkraftwerkConfig } from './calculators/balkonkraftwerk/ertrag/config';
import { Sun, Menu } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Main Navigation Wrapper matching prototype
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="" className="flex-shrink-0 flex items-center">
            <Sun className="h-8 w-8 text-solar-500 mr-2" />
            <span className="font-bold text-2xl tracking-tight text-slate-900">Klar<span className="text-solar-500">watt</span></span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="" className="text-slate-500 hover:text-solar-600 font-medium transition-colors">Alle Rechner</Link>
            <a href="#seo-text" className="text-slate-500 hover:text-solar-600 font-medium transition-colors">Solar-Wissen</a>
            <a href="#" className="text-slate-500 hover:text-solar-600 font-medium transition-colors">Über uns</a>
          </nav>
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 text-slate-500" />
          </div>
        </div>
      </div>
    </header>

    <main className="flex-grow">
      {children}
    </main>

    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Sun className="h-6 w-6 text-solar-500 mr-2" />
            <span className="font-bold text-xl text-white">Klar<span className="text-solar-500">watt</span></span>
          </div>
          <p className="text-sm">Unabhängige Solar-Rechner für Deutschland. Berechne Ertrag, Rendite und Autarkie für dein Projekt.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Beliebte Rechner</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="balkonkraftwerk/ertrag" className="hover:text-solar-500 transition-colors">Balkonkraftwerk Ertrag</Link></li>
            <li><a href="#" className="hover:text-solar-500 transition-colors">PV-Anlagen Rendite</a></li>
            <li><a href="#" className="hover:text-solar-500 transition-colors">Speicher Dimensionierung</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="impressum" className="hover:text-white transition-colors">Impressum</Link></li>
            <li><Link to="datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        &copy; 2026 Klarwatt.de. Alle Rechte vorbehalten.
      </div>
    </footer>
  </div>
);

export default function App() {
  return (
    <Router basename="/klarwatt">
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />

          {/* Static Legal Routes */}
          <Route path="/impressum" element={<LegalPages type="impressum" />} />
          <Route path="/datenschutz" element={<LegalPages type="datenschutz" />} />

          {/* Dynamic Category Routes */}
          <Route path="/:categorySlug" element={<CategoryIndex />} />

          {/* Working V1 Calculator Route */}
          <Route
            path="/balkonkraftwerk/ertrag"
            element={<CalculatorShell config={BalkonkraftwerkConfig} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}
