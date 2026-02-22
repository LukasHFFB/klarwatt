/**
 * Structured schema for SEO content on calculator pages.
 *
 * All calculator pages share this exact structure, rendered by SeoSection.tsx.
 *
 * --- LLM PROMPT TEMPLATE FOR NEW CONTENT ---
 * (Copy everything below this line into ChatGPT/Claude along with the calculator config)
 * 
 * Act as an expert SEO copywriter specializing in renewable energy in Germany (Solar, Photovoltaik, Wärmepumpen, etc.).
 * I need a comprehensive, highly optimized SEO article (1500-2000 words) for a new calculator page on Klarwatt.de.
 * Write strictly in German. The tone should be authoritative, trustworthy, easy to understand for homeowners, and helpful.
 *
 * The output MUST be valid TypeScript code formatted exactly according to this `SeoContent` interface:
 * 
 * export interface ContentSection {
 *   headline: string;          // Write an engaging H2/H3 headline optimized for search intent
 *   paragraphs: string[];      // Array of text paragraphs (NO HTML tags here)
 *   bulletPoints?: string[];   // Optional array of bullet points highlighting key facts/benefits
 * }
 * 
 * export interface FaqItem {
 *   question: string;          // Common user question from Google "People also ask"
 *   answer: string;            // The answer. You MAY use <strong> for bolding and <a href="..."> for links here.
 * }
 *
 * export interface SeoContent {
 *   metaTitle: string;         // Clickable SEO Title (max 60 chars) e.g. "Balkonkraftwerk Ertragsrechner 2026 | Klarwatt"
 *   metaDescription: string;   // SEO Meta Description (max 155 chars) focusing on value and action
 *   introParagraphs: string[]; // 2-3 engaging opening paragraphs summarizing what this calculator does and why it's crucial.
 *   sections: ContentSection[]; // Produce 5 to 8 distinct sections to reach the 1500-2000 word count. Cover aspects like:
 *                               // - How the calculation works physically/financially
 *                               // - Typical yields/costs in Germany
 *                               // - Legal requirements / registration
 *                               // - Optimization tips for maximum efficiency
 *                               // - Subsidies / Förderungen
 *   faq: FaqItem[];            // Generate exactly 5-7 highly relevant FAQs with detailed answers.
 * }
 *
 * CRITICAL INSTRUCTIONS:
 * 1. Output ONLY the raw TypeScript code exporting the object `export const [Topic]Content: SeoContent = { ... }`.
 * 2. Do not include markdown codeblocks around the output.
 * 3. Ensure the text is expansive, detailed, and directly relates to the calculator's purpose.
 * 
 * Here is the calculator configuration this text is for:
 * [PASTE CALCULATOR CONFIG HERE]
 * ---------------------------------------------------------------------------
 */

export interface ContentSection {
    headline: string;
    paragraphs: string[];
    bulletPoints?: string[];
}

export interface FaqItem {
    question: string;
    /** Plain text. Supports <strong> bold and <a href> links ONLY. */
    answer: string;
}

export interface SeoContent {
    metaTitle?: string;
    metaDescription?: string;
    /** 2-3 engaging opening paragraphs */
    introParagraphs: string[];
    /** The main body of the article divided into sections */
    sections: ContentSection[];
    /** 5-7 FAQ items targeting common search queries */
    faq: FaqItem[];
}
