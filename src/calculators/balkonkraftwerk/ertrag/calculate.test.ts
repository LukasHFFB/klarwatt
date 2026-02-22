import { describe, it, expect } from 'vitest';
import { BalkonkraftwerkConfig, getTiltFactor, getSimultaneousFactor } from './config';

const calc = BalkonkraftwerkConfig.calculate;

describe('getTiltFactor', () => {
    it('peaks at 32°', () => {
        expect(getTiltFactor(32)).toBeCloseTo(1.00, 2);
    });
    it('clamps to 0.70 at 0° (flat)', () => {
        expect(getTiltFactor(0)).toBeCloseTo(0.70, 2);
    });
    it('clamps to 0.70 at 90° (vertical)', () => {
        expect(getTiltFactor(90)).toBeCloseTo(0.70, 2);
    });
    it('returns ~0.95 at 45°', () => {
        expect(getTiltFactor(45)).toBeCloseTo(0.95, 2);
    });
});

describe('getSimultaneousFactor', () => {
    it('clamps at 0.55 for very low consumption (0 kWh)', () => {
        expect(getSimultaneousFactor(0)).toBeCloseTo(0.55, 2);
    });
    it('returns ~0.73 for 3500 kWh (typical household)', () => {
        // 0.50 + 3500/15000 = 0.50 + 0.233 = 0.733
        expect(getSimultaneousFactor(3500)).toBeCloseTo(0.733, 2);
    });
    it('clamps at 0.80 for very high consumption (100000 kWh)', () => {
        expect(getSimultaneousFactor(100_000)).toBeCloseTo(0.80, 2);
    });
});

describe('Balkonkraftwerk calculation', () => {
    // Force a known jahresertrag: 0.8 kWp × 1000 irr × 0.75 PR × 1.0 (Süd) × tiltFactor(32) = 600 kWh
    const BASE = { kwp: 0.8, azimuth: 180, tilt: 32, jahresverbrauch: 3500, strompreis: 0.30, purchase_price: 600 };

    it('calculates jahresertrag correctly', () => {
        const res = calc(BASE, 1000);
        // 0.8 × 1000 × 0.75 × 1.0 × 1.0 = 600
        expect(res.jahresertrag).toBeCloseTo(600, 0);
    });

    it('savings are 0 when strompreis is 0', () => {
        const res = calc({ ...BASE, strompreis: 0 }, 1000);
        expect(res.ersparnis).toBe(0);
    });

    it('amortisation is Infinity when strompreis is 0', () => {
        const res = calc({ ...BASE, strompreis: 0 }, 1000);
        expect(res.amortisation).toBe(Infinity);
    });

    it('savings are 0 when kwp is 0', () => {
        const res = calc({ ...BASE, kwp: 0 }, 1000);
        expect(res.ersparnis).toBe(0);
        expect(res.jahresertrag).toBe(0);
    });

    it('eigenverbrauch cannot exceed jahresverbrauch', () => {
        // Very low consumption: only 100 kWh/year — shouldn't self-consume more than that
        const res = calc({ ...BASE, jahresverbrauch: 100 }, 1000);
        expect(res.eigenverbrauch_kwh).toBeLessThanOrEqual(100);
    });

    it('eigenverbrauch_kwh + einspeisung_kwh == jahresertrag', () => {
        const res = calc(BASE, 1000);
        expect(res.eigenverbrauch_kwh + res.einspeisung_kwh).toBeCloseTo(res.jahresertrag, 6);
    });

    it('eigenverbrauchsquote is 0 when jahresertrag is 0', () => {
        const res = calc({ ...BASE, kwp: 0 }, 1000);
        expect(res.eigenverbrauchsquote).toBe(0);
    });

    it('calculates co2 correctly from jahresertrag', () => {
        const res = calc(BASE, 1000);
        // 600 kWh × 0.380 = 228 kg
        expect(res.co2).toBeCloseTo(600 * 0.380, 1);
    });

    it('calculates accurate ersparnis', () => {
        const res = calc(BASE, 1000);
        // jahresertrag = 600, sfactor = 0.50 + 3500/15000 = 0.733
        // eigenverbrauch = min(600 * 0.733, 3500) = min(440, 3500) = 440
        // ersparnis = 440 * 0.30 = 132
        const sfactor = getSimultaneousFactor(BASE.jahresverbrauch);
        const expected = Math.min(600 * sfactor, BASE.jahresverbrauch) * BASE.strompreis;
        expect(res.ersparnis).toBeCloseTo(expected, 2);
    });

    it('south-facing gives higher yield than north-facing', () => {
        const south = calc({ ...BASE, azimuth: 180 }, 1000);
        const north = calc({ ...BASE, azimuth: 0 }, 1000);
        expect(south.jahresertrag).toBeGreaterThan(north.jahresertrag);
    });
});
