import { motion } from "framer-motion";
import WorldMap from "@/components/WorldMap";
import { useTranslation } from "@/i18n/useTranslation";

const GlobalExperienceSection = () => {
  const { t, translations } = useTranslation();
  const g = translations.globalExperience;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(g.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(g.title)}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
          <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-foreground mb-6">
            {t(g.stat1)}
            <br />
            {t(g.stat2)}
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t(g.description)}</p>
        </motion.div>

        <WorldMap />
      </div>
    </section>
  );
};

export default GlobalExperienceSection;
