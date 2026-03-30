import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

import logoUltra from "@/assets/logos/ultra.png";
import logoF1 from "@/assets/logos/f1.png";
import logoElrow from "@/assets/logos/elrow.png";
import logoSonar from "@/assets/logos/sonar.png";
import logoKappaFutur from "@/assets/logos/kappa-futur.svg";
import logoMotogp from "@/assets/logos/motogp.png";
import logoCampovolo from "@/assets/logos/campovolo.png";
import logoMonegros from "@/assets/logos/monegros.png";
import logoRobot from "@/assets/logos/robot-festival.webp";
import logoOlimpico from "@/assets/logos/stadio-olimpico.webp";
import logoMovement from "@/assets/logos/movement.jpg";
import logoOutlook from "@/assets/logos/outlook.png";
import logoDimensions from "@/assets/logos/dimensions.png";
import logoFabrik from "@/assets/logos/fabrik.jpeg";
import logoRotary from "@/assets/logos/rotary.png";
import logoSpringAttitude from "@/assets/logos/spring-attitude.webp";

const baseClass = "brightness-0 opacity-60 hover:opacity-100";
const invertClass = "invert brightness-0 opacity-60 hover:opacity-100";

const logos = [
  { src: logoUltra, alt: "Ultra Music Festival", className: baseClass },
  { src: logoF1, alt: "Formula 1", className: baseClass },
  { src: logoElrow, alt: "elrow", className: baseClass },
  { src: logoSonar, alt: "Sónar", className: baseClass },
  { src: logoKappaFutur, alt: "Kappa Futur Festival", className: baseClass },
  { src: logoMotogp, alt: "MotoGP", className: baseClass },
  { src: logoCampovolo, alt: "Campovolo", className: baseClass },
  { src: logoMonegros, alt: "Monegros Desert Festival", className: baseClass },
  { src: logoRobot, alt: "Robot Festival", className: baseClass },
  { src: logoOlimpico, alt: "Stadio Olimpico", className: baseClass },
  { src: logoMovement, alt: "Movement", className: baseClass },
  { src: logoOutlook, alt: "Outlook Festival", className: invertClass },
  { src: logoDimensions, alt: "Dimensions Festival", className: invertClass },
  { src: logoFabrik, alt: "Fabrik Madrid", className: invertClass },
  { src: logoRotary, alt: "Rotary International", className: baseClass },
  { src: logoSpringAttitude, alt: "Spring Attitude", className: invertClass },
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
      <div className="flex w-max animate-logo-scroll group-hover:[animation-play-state:paused]">
          {allLogos.map((logo, index) => (
            <div key={`${logo.alt}-${index}`} className="flex-shrink-0 flex items-center justify-center px-10 md:px-16 w-[160px] md:w-[220px] h-[60px] md:h-[80px]">
              <img src={logo.src} alt={logo.alt} loading="lazy" className={`max-h-full max-w-full object-contain transition-all duration-500 ${logo.className}`} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LogoStripSection;
