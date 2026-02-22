/**
 * Structured schema for SEO content on calculator pages.
 *
 * All calculator pages share this exact structure, rendered by SeoSection.tsx.
 * This makes it easy to prompt an LLM to fill in new content using a fixed template.
 *
 * --- LLM PROMPT TEMPLATE ---
 * Fill in this TypeScript object for a [TOPIC] calculator on Klarwatt.de.
 * Write in German. Target length: 800-1200 words total.
 *
 * export const [Name]Content: SeoContent = {
 *   intro: "2-3 sentences explaining [TOPIC] and why this calculator helps.",
 *   howItWorks: "1 paragraph on how the calculation works and what data it uses.",
 *   faq: [
 *     { question: "Was ist [TOPIC]?",                     answer: "..." },
 *     { question: "Wie berechnet man [KEY_METRIC]?",       answer: "..." },
 *     { question: "Lohnt sich [TOPIC] in Deutschland?",   answer: "..." },
 *     { question: "Welche Förderungen gibt es?",           answer: "..." },
 *     { question: "Wie lange dauert die Amortisation?",   answer: "..." },
 *   ],
 * };
 */
export interface FaqItem {
    question: string;
    /** Plain text. Supports <strong> bold and <a href> links only. */
    answer: string;
}

export interface SeoContent {
    /** 2-3 sentence overview of the topic for the intro paragraph. */
    intro: string;
    /** Optional explanation of the calculation methodology. */
    howItWorks?: string;
    /** 4-6 FAQ items targeting common search queries. */
    faq: FaqItem[];
}
