import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const DOMAIN = "https://andreascolucci.com";

interface PageMeta {
  title: Record<Language, string>;
  description: Record<Language, string>;
  ogDescription?: Record<Language, string>;
}

const pageMeta: Record<string, PageMeta> = {
  home: {
    title: {
      en: "Andreas Colucci — Event Operations for High-Pressure Environments",
      it: "Andreas Colucci — Operazioni per Eventi ad Alta Complessità",
      es: "Andreas Colucci — Operaciones para Eventos de Alta Complejidad",
    },
    description: {
      en: "Senior event operations for large-scale, high-pressure environments. 300+ events across 20+ countries. When execution cannot fail.",
      it: "Event operations senior per ambienti ad alta pressione e larga scala. 300+ eventi in oltre 20 paesi. Quando l'esecuzione non può fallire.",
      es: "Operaciones senior para eventos de gran escala y alta presión. 300+ eventos en más de 20 países. Cuando la ejecución no puede fallar.",
    },
    ogDescription: {
      en: "Real-time operations, systems, and execution for large-scale events.",
      it: "Operazioni in tempo reale, sistemi ed esecuzione per eventi su larga scala.",
      es: "Operaciones en tiempo real, sistemas y ejecución para eventos a gran escala.",
    },
  },
  work: {
    title: {
      en: "Selected Work — Andreas Colucci",
      it: "Lavori Selezionati — Andreas Colucci",
      es: "Trabajos Seleccionados — Andreas Colucci",
    },
    description: {
      en: "Case studies from large-scale events: Campovolo, Kappa FuturFestival, Sónar, Monegros, elrow, MotoGP. Operations at 110,000+ attendees.",
      it: "Case studies da eventi su larga scala: Campovolo, Kappa FuturFestival, Sónar, Monegros, elrow, MotoGP. Operazioni per oltre 110.000 partecipanti.",
      es: "Casos de estudio de eventos a gran escala: Campovolo, Kappa FuturFestival, Sónar, Monegros, elrow, MotoGP. Operaciones con más de 110.000 asistentes.",
    },
  },
  about: {
    title: {
      en: "About — Andreas Colucci",
      it: "Chi Sono — Andreas Colucci",
      es: "Sobre Mí — Andreas Colucci",
    },
    description: {
      en: "Andreas Colucci — event operations consultant. 10+ years in high-pressure festival and stadium environments across 20+ countries.",
      it: "Andreas Colucci — consulente operativo per eventi. 10+ anni in ambienti ad alta pressione tra festival e stadi in oltre 20 paesi.",
      es: "Andreas Colucci — consultor de operaciones para eventos. 10+ años en entornos de alta presión en festivales y estadios en más de 20 países.",
    },
  },
  contact: {
    title: {
      en: "Contact — Andreas Colucci",
      it: "Contatto — Andreas Colucci",
      es: "Contacto — Andreas Colucci",
    },
    description: {
      en: "Working on a complex event? Get in touch to discuss operational consulting, onsite management, and critical systems oversight.",
      it: "Stai lavorando a un evento complesso? Contattami per consulenza operativa, gestione onsite e supervisione di sistemi critici.",
      es: "¿Trabajas en un evento complejo? Escríbeme para hablar de consultoría operativa, gestión onsite y supervisión de sistemas críticos.",
    },
  },
};

const getPageKey = (pathname: string): string => {
  const segments = pathname.split("/").filter(Boolean);
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
    const ogDescription = meta.ogDescription?.[language] || description;

    // Document
    document.title = title;
    document.documentElement.lang = language;

    // Meta description
    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", ogDescription);
    setMeta('meta[property="og:url"]', "content", `${DOMAIN}${location.pathname}`);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", ogDescription);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${DOMAIN}${location.pathname}`;

    // Hreflang alternates
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    const basePath = location.pathname.replace(/^\/(en|it|es)/, "");
    (["en", "it", "es"] as Language[]).forEach(lang => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `${DOMAIN}/${lang}${basePath}`;
      document.head.appendChild(link);
    });
    // x-default
    const xDefault = document.createElement("link");
    xDefault.rel = "alternate";
    xDefault.hreflang = "x-default";
    xDefault.href = `${DOMAIN}/en${basePath}`;
    document.head.appendChild(xDefault);
  }, [language, location.pathname]);
};
