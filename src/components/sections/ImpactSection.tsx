import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const ImpactSection = () => {
  const { t, language, translations } = useTranslation();
  const imp = translations.impact;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-20">
          <span className="label-text block mb-4">{t(imp.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl">{t(imp.title)}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {imp.stats.map((stat, index) => (
            <motion.div key={stat.value} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="border-t border-border pt-8">
              <p className="heading-display text-4xl md:text-6xl lg:text-7xl mb-4">{stat.value}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{t(stat.label)}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} viewport={{ once: true }} className="mt-20 pt-10 border-t border-border max-w-3xl">
          <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
            {t(imp.statement1)}
            <br />
            <span className="text-muted-foreground">{t(imp.statement2)}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
