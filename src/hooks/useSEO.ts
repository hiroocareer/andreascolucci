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
      en: "Event operations, real-time control, and systems management for large-scale events. Trusted in complex, high-pressure environments.",
      it: "Operazioni per eventi, controllo in tempo reale e gestione sistemi per eventi su larga scala. Affidabilità comprovata in ambienti complessi e ad alta pressione.",
      es: "Operaciones para eventos, control en tiempo real y gestión de sistemas para eventos a gran escala. Confianza demostrada en entornos complejos y de alta presión.",
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
      en: "Case studies from large-scale events where real-time operations and systems control were critical. 300+ events across 20+ countries.",
      it: "Case studies da eventi su larga scala dove operazioni in tempo reale e controllo sistemi erano critici. 300+ eventi in oltre 20 paesi.",
      es: "Casos de estudio de eventos a gran escala donde las operaciones en tiempo real y el control de sistemas fueron críticos. 300+ eventos en más de 20 países.",
    },
  },
  about: {
    title: {
      en: "About — Andreas Colucci",
      it: "Chi Sono — Andreas Colucci",
      es: "Sobre Mí — Andreas Colucci",
    },
    description: {
      en: "10 years operating in high-complexity event environments. From festivals to stadiums, cashless systems to access control, across 20+ countries.",
      it: "10 anni di operatività in ambienti ad alta complessità. Dai festival agli stadi, sistemi cashless e controllo accessi, in oltre 20 paesi.",
      es: "10 años operando en entornos de alta complejidad. De festivales a estadios, sistemas cashless y control de acceso, en más de 20 países.",
    },
  },
  contact: {
    title: {
      en: "Contact — Andreas Colucci",
      it: "Contatto — Andreas Colucci",
      es: "Contacto — Andreas Colucci",
    },
    description: {
      en: "Get in touch for large-scale event operations, systems management, and real-time execution in high-pressure environments.",
      it: "Contattami per operazioni su larga scala, gestione sistemi ed esecuzione in tempo reale in ambienti ad alta pressione.",
      es: "Contáctame para operaciones a gran escala, gestión de sistemas y ejecución en tiempo real en entornos de alta presión.",
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
