import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const AvailabilitySection = () => {
  const { t, translations } = useTranslation();
  const a = translations.availability;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
          <span className="label-text block mb-8">{t(a.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">{t(a.title)}</h2>
          <p className="text-base uppercase tracking-[0.2em] text-muted-foreground font-medium">{t(a.subtitle)}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
