import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const ReferencesSection = () => {
  const { t, translations } = useTranslation();
  const r = translations.references;

  return (
    <section className="py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">{t(r.label)}</span>
          <h2 className="heading-display text-3xl md:text-5xl leading-[1]">{t(r.title)}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {r.items.map((ref, index) => (
            <motion.div key={ref.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className="relative">
              <div className="mb-6">
                <span className="text-6xl leading-none text-muted-foreground/20 font-serif select-none">"</span>
              </div>
              <blockquote className="text-base md:text-lg leading-relaxed text-foreground mb-8 -mt-4">{t(ref.quote)}</blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{ref.name}</p>
                <p className="text-base text-muted-foreground">{t(ref.role)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
