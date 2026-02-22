/**
 * Central calculator registry.
 *
 * To add a new calculator:
 * 1. Create src/calculators/[category]/[slug]/config.ts
 * 2. Create src/calculators/[category]/[slug]/content.ts
 * 3. Add one entry to REGISTRY below — that's it.
 *    Routes, SEO sections, and the calculator shell all wire up automatically.
 */
import type { CalculatorConfig } from '../types/calculator';
import type { SeoContent } from '../types/content';
import { BalkonkraftwerkConfig } from '../calculators/balkonkraftwerk/ertrag/config';
import { BalkonkraftwerkErtragContent } from '../calculators/balkonkraftwerk/ertrag/content';
import { BalkonkraftwerkCo2Config } from '../calculators/balkonkraftwerk/co2/config';
import { BalkonkraftwerkCo2Content } from '../calculators/balkonkraftwerk/co2/content';
import { BalkonkraftwerkAmortisationConfig } from '../calculators/balkonkraftwerk/amortisation/config';
import { BalkonkraftwerkAmortisationContent } from '../calculators/balkonkraftwerk/amortisation/content';
import { SolaranlageConfig } from '../calculators/hausdach/ertrag/config';
import { SolaranlageErtragContent } from '../calculators/hausdach/ertrag/content';
import { SolarzaunConfig } from '../calculators/solarzaun/ertrag/config';
import { SolarzaunErtragContent } from '../calculators/solarzaun/ertrag/content';
import { SolarzaunCo2Config } from '../calculators/solarzaun/co2/config';
import { SolarzaunCo2Content } from '../calculators/solarzaun/co2/content';
import { SolarzaunAmortisationConfig } from '../calculators/solarzaun/amortisation/config';
import { SolarzaunAmortisationContent } from '../calculators/solarzaun/amortisation/content';

export interface RegistryEntry {
    config: CalculatorConfig;
    content: SeoContent;
}

export const REGISTRY: RegistryEntry[] = [
    { config: BalkonkraftwerkConfig, content: BalkonkraftwerkErtragContent },
    { config: BalkonkraftwerkCo2Config, content: BalkonkraftwerkCo2Content },
    { config: BalkonkraftwerkAmortisationConfig, content: BalkonkraftwerkAmortisationContent },
    { config: SolaranlageConfig, content: SolaranlageErtragContent },
    { config: SolarzaunConfig, content: SolarzaunErtragContent },
    { config: SolarzaunCo2Config, content: SolarzaunCo2Content },
    { config: SolarzaunAmortisationConfig, content: SolarzaunAmortisationContent },

    // --- Add new calculators here, one line each ---
    // { config: PvAnlageRenditeConfig, content: PvAnlageRenditeContent },
    // { config: SpeicherConfig,        content: SpeicherContent },
];
