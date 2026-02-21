import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Homepage } from './components/Homepage';
import { CategoryIndex } from './components/CategoryIndex';
import { LegalPages } from './components/LegalPages';
import { CalculatorShell } from './components/calculator/CalculatorShell';
import { BalkonkraftwerkConfig } from './calculators/balkonkraftwerk/ertrag/config';

// Main Navigation Wrapper
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <nav style={{ background: 'white', borderBottom: '1px solid var(--color-slate-200)', padding: '1rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'var(--color-slate-900)', fontSize: '1.5rem', fontWeight: 800 }}>
          Klar<span style={{ color: 'var(--color-solar-500)' }}>watt</span>
        </Link>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
          <Link to="/balkonkraftwerk" style={{ textDecoration: 'none', color: 'var(--color-slate-600)' }}>Balkonkraftwerk</Link>
          <span style={{ color: 'var(--color-slate-400)' }}>Hausdach</span>
        </div>
      </div>
    </nav>

    <main style={{ flex: 1 }}>
      {children}
    </main>

    <footer style={{ background: 'var(--color-slate-900)', color: 'var(--color-slate-400)', padding: '4rem 0 2rem' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
          <Link to="/impressum" style={{ color: 'var(--color-slate-400)', textDecoration: 'none' }}>Impressum</Link>
          <Link to="/datenschutz" style={{ color: 'var(--color-slate-400)', textDecoration: 'none' }}>Datenschutz</Link>
        </div>
        <div style={{ fontSize: '0.875rem' }}>&copy; 2026 Klarwatt. V1 Architecture Prototype.</div>
      </div>
    </footer>
  </div>
);

export default function App() {
  return (
    <Router>
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
