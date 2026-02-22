import type { SeoContent } from '../../../types/content';

export const SolarzaunAmortisationContent: SeoContent = {
    intro: "Ein Solarzaun ist eine Investition, die sich durch die Einsparung von Stromkosten und die staatliche Einspeisevergütung über die Jahre selbst trägt. Besonders bei der Nutzung bifazialer Module in Ost-West-Ausrichtung werden Stromerträge dann generiert, wenn der Eigenverbrauch im Haushalt oft am höchsten ist.",
    howItWorks: "Unser Amortisationsrechner analysiert Ihre Investitionskosten (Netto) im Verhältnis zu den jährlichen Erträgen. Dabei wird die jährliche Strompreissteigerung sowie die EEG-Einspeisevergütung für den nicht selbst verbrauchten Strom berücksichtigt. Wir berechnen den genauen Zeitpunkt der Amortisation und den voraussichtlichen Gesamtgewinn über eine Laufzeit von 25 Jahren.",
    faq: [
        {
            question: "Wann rechnet sich ein Solarzaun?",
            answer: "Je nach Anschaffungskosten und Eigenverbrauchsquote amortisiert sich ein Solarzaun in Deutschland meist nach 10 bis 15 Jahren. Bei hohen Strompreisen und intelligenter Eigennutzung kann dies auch schneller gehen."
        },
        {
            question: "Gibt es eine Einspeisevergütung für Solarzäune?",
            answer: "Ja, Solarzäune gelten nach dem EEG meist als 'bauliche Anlagen' oder können unter bestimmten Bedingungen als Freiflächenanlagen vergütet werden. Im Rechner nutzen wir die aktuellen Sätze für Dachanlagen bis 10 kWp als konservative Schätzung."
        },
        {
            question: "Warum ist die Ost-West-Ausrichtung finanziell attraktiv?",
            answer: "Vertikale Ost-West-Zäune liefern morgens und abends Spitzenerträge. Da dies genau die Zeiten sind, in denen viele Haushalte am meisten Strom verbrauchen (Frühstück/Feierabend), steigt die Eigenverbrauchsquote und damit die Ersparnis deutlich an."
        },
        {
            question: "Kann ich die Investitionskosten steuerlich absetzen?",
            answer: "Seit 2023 gilt für viele Privatkomponenten der PV-Anlage in Deutschland ein Nullsteuersatz (0% MwSt). Dies senkt die Netto-Investitionskosten erheblich und verkürzt die Amortisationszeit."
        }
    ]
};
