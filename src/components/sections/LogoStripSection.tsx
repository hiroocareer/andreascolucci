import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

import logoUltra from "@/assets/logos/ultra.png";
import logoF1 from "@/assets/logos/f1.png";
import logoElrow from "@/assets/logos/elrow.png";
import logoSonar from "@/assets/logos/sonar.png";
import logoKappaFutur from "@/assets/logos/kappa-futur.png";
import logoMotogp from "@/assets/logos/motogp.png";
import logoCampovolo from "@/assets/logos/campovolo.png";
import logoMonegros from "@/assets/logos/monegros.png";

const logos = [
  { src: logoUltra, alt: "Ultra Music Festival" },
  { src: logoF1, alt: "Formula 1" },
  { src: logoElrow, alt: "elrow" },
  { src: logoSonar, alt: "Sónar" },
  { src: logoKappaFutur, alt: "Kappa Futur Festival" },
  { src: logoMotogp, alt: "MotoGP" },
  { src: logoCampovolo, alt: "Campovolo" },
  { src: logoMonegros, alt: "Monegros Desert Festival" },
];

const LogoStripSection = () => {
  const { t, translations } = useTranslation();
  const allLogos = [...logos, ...logos];

  return (
    <section className="py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            {t(translations.logoStrip.label)}
          </span>
          <h2 className="heading-display text-2xl md:text-3xl">
            {t(translations.logoStrip.title)}
          </h2>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="relative group">
      <div className="flex animate-logo-scroll group-hover:[animation-play-state:paused]">
          {allLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="flex-shrink-0 flex items-center justify-center px-8 md:px-12">
              <img src={logo.src} alt={logo.alt} loading="lazy" className="h-12 md:h-16 w-auto object-contain grayscale brightness-0 opacity-60 hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LogoStripSection;
