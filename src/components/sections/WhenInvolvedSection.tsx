import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const WhenInvolvedSection = () => {
  const { t, language, translations } = useTranslation();
  const w = translations.whenInvolved;
  const triggers = w.triggers[language];

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(w.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(w.title)}</h2>
        </motion.div>

        <div className="max-w-2xl">
          {triggers.map((trigger, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} viewport={{ once: true }} className="border-t border-border py-6">
              <p className="text-base md:text-lg text-foreground">{trigger}</p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default WhenInvolvedSection;
