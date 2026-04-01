import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const AboutSection = () => {
  const { t, translations } = useTranslation();
  const a = translations.aboutSection;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(a.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(a.title)}</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="max-w-2xl space-y-8">
          <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">{t(a.intro)}</p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">{t(a.body1)}</p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t(a.body2)}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
