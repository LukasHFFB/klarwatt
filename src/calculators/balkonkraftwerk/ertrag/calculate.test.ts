import { describe, it, expect } from 'vitest';
import { BalkonkraftwerkConfig, getTiltFactor, EINSPEISEVERGÜTUNG } from './config';

describe('Balkonkraftwerk Calculation Logic', () => {
    const calc = BalkonkraftwerkConfig.calculate;

    it('calculates tilt factor correctly (parabola peaking at 32)', () => {
        expect(getTiltFactor(32)).toBeCloseTo(1.00, 2);
        expect(getTiltFactor(0)).toBeCloseTo(0.70, 2); // clamped minimum
        expect(getTiltFactor(90)).toBeCloseTo(0.70, 2); // clamped minimum
        expect(getTiltFactor(45)).toBeCloseTo(0.95, 2);
    });

    it('calculates jahresertrag purely (Südausrichtung, 30 Grad)', () => {
        // 0.8 kWp * 1000 kWh/m2 * 0.75 PR * 1.0 (Süd) * ~1.0 (30°)
        const res = calc({ kwp: 0.8, azimuth: 180, tilt: 30 }, 1000);

        // 0.8 * 1000 * 0.75 * 1.0 * getTiltFactor(30)
        const expectedYield = 0.8 * 1000 * 0.75 * 1.0 * getTiltFactor(30);
        expect(res.jahresertrag).toBeCloseTo(expectedYield, 0);
    });

    it('calculates ersparnis and amortisation accurately', () => {
        // 1000 kWh Ertrag, 50% Eigenverbrauch (500 kWh), 0.30€ Strompreis, 600€ Anlage
        // Ersparnis = (500 * 0.30) + (500 * 0.0795) = 150 + 39.75 = 189.75 €
        // Amortisation = 600 / 189.75 = 3.16 Jahre

        // We force a scenario where Jahresertrag is exactly 1000 by passing specific values
        // Using 1.0 kWp, PR=1.0 (mocked via irradiance compensation), Azimuth=Süd, Tilt=32 (Factor 1.0)
        // To get exactly 1000 with PR 0.75 hardcoded inside, we need Irradiance = 1000 / 0.75 = 1333.333

        const mockIrradiance = 1000 / 0.75;

        const res = calc({
            kwp: 1.0,
            azimuth: 180,
            tilt: 32,
            strompreis: 0.30,
            eigenverbrauch: 50,
            purchase_price: 600
        }, mockIrradiance);

        expect(res.jahresertrag).toBeCloseTo(1000, 1);
        expect(res.eigenverbrauch_kwh).toBeCloseTo(500, 1);
        expect(res.einspeisung_kwh).toBeCloseTo(500, 1);

        const expectedErsparnis = (500 * 0.30) + (500 * EINSPEISEVERGÜTUNG.below10kwp_partial);
        expect(res.ersparnis).toBeCloseTo(expectedErsparnis, 2);

        expect(res.amortisation).toBeCloseTo(600 / expectedErsparnis, 2);
    });

    it('calculates CO2 correctly', () => {
        const mockIrradiance = 1000 / 0.75; // Forces 1000 kWh yield
        const res = calc({ kwp: 1.0, azimuth: 180, tilt: 32 }, mockIrradiance);

        // 1000 kWh * 0.380 kg/kWh = 380 kg
        expect(res.co2).toBeCloseTo(380, 0);
    });
});
