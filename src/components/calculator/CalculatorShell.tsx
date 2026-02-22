import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CATEGORIES } from '../../data/categories';
import type { CalculatorConfig } from '../../types/calculator';
import type { SeoContent } from '../../types/content';
import type { PVGISData } from '../../lib/pvgis';
import { InputControl } from './InputControl';
import { ResultCard } from './ResultCard';
import { AssumptionsPanel } from './AssumptionsPanel';
import { IrradianceChart } from './IrradianceChart';
import { SeoSection } from './SeoSection';
import { Share2, ChevronRight, Settings, Loader2 } from 'lucide-react';
import { fetchIrradiance } from '../../lib/pvgis';

interface CalculatorShellProps {
    config: CalculatorConfig;
    content?: SeoContent;
}

export const CalculatorShell: React.FC<CalculatorShellProps> = ({ config, content }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Initialize state from URL params or defaults
    const [inputs, setInputs] = useState<Record<string, number | string>>(() => {
        const initial: Record<string, number | string> = {};
        config.inputs.forEach(input => {
            const urlVal = searchParams.get(input.id);
            if (urlVal !== null) {
                if (input.type === 'number' || input.type === 'slider') {
                    initial[input.id] = Number(urlVal);
                } else if (input.type === 'select' && input.options?.[0] && typeof input.options[0].value === 'number') {
                    initial[input.id] = Number(urlVal);
                } else {
                    initial[input.id] = urlVal;
                }
            } else {
                initial[input.id] = input.default;
            }
        });
        return initial;
    });

    // Keep a ref to always access the latest inputs inside async callbacks
    const inputsRef = useRef(inputs);
    useEffect(() => { inputsRef.current = inputs; }, [inputs]);

    const [results, setResults] = useState<Record<string, number>>({});
    const [pvgisData, setPvgisData] = useState<PVGISData | null>(null);
    const [isLoadingLocation, setIsLoadingLocation] = useState(false);
    const [copied, setCopied] = useState(false);

    // Core Pure Calculation Trigger
    const runCalculation = useCallback((currentInputs: Record<string, number | string>, irradiance?: number) => {
        try {
            const res = config.calculate(currentInputs, irradiance);
            setResults(res);
        } catch (e) {
            console.error("Calculation error:", e);
        }
    }, [config]);

    // Handle Input Changes
    const handleInputChange = (id: string, value: string | number) => {
        setInputs(prev => {
            const next = { ...prev, [id]: value };
            runCalculation(next, pvgisData?.annualYield);
            return next;
        });
    };

    // Unified logic to fetch irradiance based on PLZ, tilt, and azimuth
    const updateIrradiance = useCallback(async (plz: string) => {
        if (!plz || plz.length < 5) return;

        setIsLoadingLocation(true);
        try {
            const fetchTilt = config.chartTilt !== undefined
                ? config.chartTilt
                : typeof inputsRef.current.tilt === 'number' ? inputsRef.current.tilt : undefined;

            const fetchAzi = config.chartAzimuth !== undefined
                ? config.chartAzimuth
                : typeof inputsRef.current.azimuth === 'number' ? inputsRef.current.azimuth : undefined;

            const data = await fetchIrradiance(plz, fetchTilt, fetchAzi);
            if (data) {
                setPvgisData(data);
                runCalculation(inputsRef.current, data.annualYield);
            }
        } finally {
            setIsLoadingLocation(false);
        }
    }, [config, runCalculation]);

    const handleInputBlur = async (id: string, _value: string | number) => {
        const fieldConfig = config.inputs.find(i => i.id === id);
        // Trigger fetch on PLZ, tilt, or azimuth change
        if (fieldConfig?.type === 'plz' || id === 'tilt' || id === 'azimuth') {
            const currentPlz = String(inputsRef.current.plz || '');
            updateIrradiance(currentPlz);
        }
    };

    // Run initial calculation and fetch on mount
    useEffect(() => {
        const initialPlz = String(inputsRef.current.plz || '');
        if (initialPlz && initialPlz.length === 5) {
            updateIrradiance(initialPlz);
        } else {
            runCalculation(inputs, pvgisData?.annualYield);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Update URL Query Params for Sharing
    useEffect(() => {
        const params = new URLSearchParams();
        Object.entries(inputs).forEach(([k, v]) => {
            const def = config.inputs.find(i => i.id === k)?.default;
            if (v !== def) params.set(k, String(v));
        });
        setSearchParams(params, { replace: true });
    }, [inputs, config.inputs, setSearchParams]);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Resolve a human-readable location label from PVGIS coords for the chart
    const locationLabel = pvgisData
        ? `${pvgisData.location.lat.toFixed(2)}°N, ${pvgisData.location.lon.toFixed(2)}°E`
        : undefined;

    return (
        <div className="bg-slate-50 min-h-screen pb-20 font-sans antialiased text-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumbs */}
                <nav className="flex items-center mb-8 text-sm font-medium text-slate-500 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
                    <Link to="/" className="hover:text-solar-600 transition-colors flex items-center">
                        Startseite
                    </Link>
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300 flex-shrink-0" />

                    {(() => {
                        const category = CATEGORIES.find(c => c.slug === config.category);
                        return (
                            <Link
                                to={`/${config.category}`}
                                className="hover:text-solar-600 transition-colors"
                            >
                                {category?.title || config.breadcrumbLabel}
                            </Link>
                        );
                    })()}

                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300 flex-shrink-0" />
                    <span className="text-slate-400 font-normal truncate">{config.title}</span>
                </nav>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                        {config.title}
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
                        {config.description}
                    </p>
                </div>

                {/* Main Calculator Grid: 5/12 for Inputs, 7/12 for Results */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Column: Inputs (5/12) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                                <div className="flex items-center">
                                    <Settings className="w-5 h-5 mr-2 text-solar-600" />
                                    Ihre Daten
                                </div>
                                {isLoadingLocation && (
                                    <div className="flex items-center text-sm text-slate-400 font-normal">
                                        <Loader2 className="w-4 h-4 mr-1.5 text-solar-500 animate-spin" />
                                        Standort wird geladen…
                                    </div>
                                )}
                            </h2>
                            <div className="space-y-6">
                                {config.inputs.map(input => (
                                    <InputControl
                                        key={input.id}
                                        config={input}
                                        value={inputs[input.id]}
                                        onChange={handleInputChange}
                                        onBlur={handleInputBlur}
                                    />
                                ))}
                            </div>
                        </div>

                        <AssumptionsPanel assumptions={config.assumptions} />

                        <button
                            onClick={handleShare}
                            className="w-full flex items-center justify-center px-6 py-4 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 hover:border-solar-100 transition-all shadow-sm group"
                        >
                            <Share2 size={18} className="mr-2 text-slate-400 group-hover:text-solar-600 transition-colors" />
                            {copied ? 'Link kopiert!' : 'Ergebnis-Link kopieren'}
                        </button>
                    </div>

                    {/* Right Column: Results Dashboard (7/12) */}
                    <div className="lg:col-span-7 space-y-6">
                        <ResultCard fields={config.outputs} results={results} />

                        {/* Irradiance Chart */}
                        {config.showIrradianceChart && pvgisData && (
                            <IrradianceChart
                                monthlyYields={pvgisData.monthlyYields}
                                annualYield={pvgisData.annualYield}
                                locationLabel={locationLabel}
                            />
                        )}
                    </div>
                </div>

                {/* SEO Content Section */}
                {content && (
                    <div className="mt-24 pt-16 border-t border-slate-200">
                        <SeoSection content={content} />
                    </div>
                )}
            </div>
        </div>
    );
};
