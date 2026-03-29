import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslation";

const PositioningSection = () => {
  const { t, translations } = useTranslation();
  const p = translations.positioning;

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-3xl">
          <p className="heading-display text-3xl md:text-5xl leading-[1.15]">{t(p.line1)}</p>
          <p className="heading-display text-3xl md:text-5xl leading-[1.15] text-muted-foreground mt-4">{t(p.line2)}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PositioningSection;
