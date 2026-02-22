import React from 'react';
import { MapPin } from 'lucide-react';

interface IrradianceChartProps {
    monthlyYields: number[];
    locationLabel?: string;
    /** kWh/kWp/year label for the header */
    annualYield?: number;
}

const MONTH_LABELS = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

export const IrradianceChart: React.FC<IrradianceChartProps> = ({
    monthlyYields,
    locationLabel,
    annualYield,
}) => {
    if (!monthlyYields || monthlyYields.length !== 12) return null;

    const max = Math.max(...monthlyYields);
    const min = Math.min(...monthlyYields);

    // SVG dimensions
    const SVG_W = 800;
    const SVG_H = 220;
    const PADDING_LEFT = 48;
    const PADDING_RIGHT = 16;
    const PADDING_TOP = 16;
    const PADDING_BOTTOM = 40;
    const chartW = SVG_W - PADDING_LEFT - PADDING_RIGHT;
    const chartH = SVG_H - PADDING_TOP - PADDING_BOTTOM;
    const barCount = 12;
    const barGap = 6;
    const barW = (chartW - (barCount - 1) * barGap) / barCount;

    const getY = (val: number) => {
        if (max === 0) return chartH;
        return chartH - (val / max) * chartH * 0.92;
    };

    // Horizontal guide lines at 25%, 50%, 75%, 100% of max
    const guides = [0.25, 0.5, 0.75, 1.0].map(f => max * f);

    return (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-8 pt-8 pb-4 border-b border-slate-800">
                <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                        <h3 className="text-white font-black text-lg tracking-tight">
                            Monatliche Sonneneinstrahlung
                        </h3>
                        {locationLabel && (
                            <div className="flex items-center mt-1 text-slate-400 text-sm font-medium">
                                <MapPin className="w-3.5 h-3.5 mr-1.5 text-solar-500 flex-shrink-0" />
                                {locationLabel}
                            </div>
                        )}
                    </div>
                    {annualYield && (
                        <div className="text-right">
                            <div className="text-xs font-bold uppercase tracking-widest text-solar-500">Jahreswert</div>
                            <div className="text-white font-black text-2xl tabular-nums leading-tight">
                                {Math.round(annualYield).toLocaleString('de-DE')}
                                <span className="text-slate-400 text-sm font-semibold ml-1">kWh/kWp</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Chart */}
            <div className="px-6 py-6">
                <svg
                    viewBox={`0 0 ${SVG_W} ${SVG_H}`}
                    className="w-full h-auto"
                    aria-label="Monatliche Sonneneinstrahlung"
                >
                    {/* Horizontal guide lines */}
                    {guides.map((g, i) => (
                        <g key={i}>
                            <line
                                x1={PADDING_LEFT}
                                y1={PADDING_TOP + getY(g)}
                                x2={SVG_W - PADDING_RIGHT}
                                y2={PADDING_TOP + getY(g)}
                                stroke="rgba(255,255,255,0.06)"
                                strokeWidth="1"
                            />
                            <text
                                x={PADDING_LEFT - 8}
                                y={PADDING_TOP + getY(g) + 4}
                                textAnchor="end"
                                fontSize="11"
                                fill="rgba(255,255,255,0.25)"
                                fontFamily="monospace"
                            >
                                {Math.round(g)}
                            </text>
                        </g>
                    ))}

                    {/* Bars */}
                    {monthlyYields.map((val, i) => {
                        const x = PADDING_LEFT + i * (barW + barGap);
                        const barHeight = chartH - getY(val);
                        const y = PADDING_TOP + getY(val);
                        const isHighest = val === max;
                        const isLowest = val === min;
                        const pct = max > 0 ? val / max : 0;

                        // Color: solar gradient from cool blue (winter) to warm amber (summer)
                        const fill = isHighest
                            ? '#f59e0b' // solar-500 amber for peak month
                            : pct > 0.7
                                ? '#fbbf24'
                                : pct > 0.4
                                    ? '#d97706'
                                    : '#475569'; // slate-600 for low months

                        return (
                            <g key={i}>
                                {/* Bar */}
                                <rect
                                    x={x}
                                    y={y}
                                    width={barW}
                                    height={Math.max(barHeight, 2)}
                                    rx={4}
                                    ry={4}
                                    fill={fill}
                                    opacity={isLowest ? 0.6 : 1}
                                />

                                {/* Value label above bar (only for highest/lowest or every other) */}
                                {(isHighest || isLowest || i % 3 === 1) && (
                                    <text
                                        x={x + barW / 2}
                                        y={y - 6}
                                        textAnchor="middle"
                                        fontSize="10"
                                        fontWeight="700"
                                        fill={isHighest ? '#f59e0b' : 'rgba(255,255,255,0.55)'}
                                        fontFamily="monospace"
                                    >
                                        {Math.round(val)}
                                    </text>
                                )}

                                {/* Month label below */}
                                <text
                                    x={x + barW / 2}
                                    y={PADDING_TOP + chartH + 20}
                                    textAnchor="middle"
                                    fontSize="11"
                                    fontWeight="600"
                                    fill={isHighest ? '#f59e0b' : 'rgba(255,255,255,0.4)'}
                                    fontFamily="system-ui"
                                >
                                    {MONTH_LABELS[i]}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                <p className="text-center text-[11px] text-slate-600 font-medium mt-2 tracking-wide">
                    kWh pro kWp installierter Leistung · Quelle: PVGIS 5.2 (EU JRC) · Mittel 2005–2023
                </p>
            </div>
        </div>
    );
};
