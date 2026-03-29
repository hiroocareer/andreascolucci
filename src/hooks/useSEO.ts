import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

interface PageMeta {
  title: Record<Language, string>;
  description: Record<Language, string>;
}

const pageMeta: Record<string, PageMeta> = {
  home: {
    title: {
      en: "Andreas Colucci — Senior Event Operations",
      it: "Andreas Colucci — Senior Event Operations",
      es: "Andreas Colucci — Senior Event Operations",
    },
    description: {
      en: "Operational leadership for large-scale events. Real-time execution, critical problem solving, and control in high-complexity environments.",
      it: "Leadership operativa per eventi su larga scala. Esecuzione in tempo reale, problem solving critico e controllo in ambienti ad alta complessità.",
      es: "Liderazgo operativo para eventos a gran escala. Ejecución en tiempo real, resolución de problemas críticos y control en entornos de alta complejidad.",
    },
  },
  work: {
    title: {
      en: "Selected Work — Andreas Colucci",
      it: "Lavori selezionati — Andreas Colucci",
      es: "Trabajos seleccionados — Andreas Colucci",
    },
    description: {
      en: "Case studies from large-scale events where operational control was critical. 300+ events across 20+ countries.",
      it: "Case studies da eventi su larga scala dove il controllo operativo era critico. 300+ eventi in oltre 20 paesi.",
      es: "Casos de estudio de eventos a gran escala donde el control operativo fue crítico. 300+ eventos en más de 20 países.",
    },
  },
  about: {
    title: {
      en: "About — Andreas Colucci",
      it: "Chi sono — Andreas Colucci",
      es: "Sobre mí — Andreas Colucci",
    },
    description: {
      en: "10 years operating in high-complexity event environments. From festivals to stadiums, from 8,000 to 160,000 people.",
      it: "10 anni di operatività in ambienti ad alta complessità. Dai festival agli stadi, da 8.000 a 160.000 persone.",
      es: "10 años operando en entornos de alta complejidad. De festivales a estadios, de 8.000 a 160.000 personas.",
    },
  },
  contact: {
    title: {
      en: "Contact — Andreas Colucci",
      it: "Contatto — Andreas Colucci",
      es: "Contacto — Andreas Colucci",
    },
    description: {
      en: "Get in touch for high-complexity events and critical operational environments.",
      it: "Contattami per eventi ad alta complessità e ambienti operativi critici.",
      es: "Contáctame para eventos de alta complejidad y entornos operativos críticos.",
    },
  },
};

const getPageKey = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
  // segments: [lang] or [lang, page]
  return segments.length <= 1 ? "home" : segments[1];
};

export const useSEO = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const pageKey = getPageKey(location.pathname);
    const meta = pageMeta[pageKey] || pageMeta.home;

    const title = meta.title[language];
    const description = meta.description[language];

    // Document
    document.title = title;
    document.documentElement.lang = language;

    // Meta description
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", description);

    // OG
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Twitter
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://andreascolucci.lovable.app${location.pathname}`;

    // Hreflang alternates
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    const basePath = location.pathname.replace(/^\/(en|it|es)/, "");
    (["en", "it", "es"] as Language[]).forEach(lang => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `https://andreascolucci.lovable.app/${lang}${basePath}`;
      document.head.appendChild(link);
    });
  }, [language, location.pathname]);
};
