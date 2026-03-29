import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const WorkWithMeSection = () => {
  const { t, language, translations } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const w = translations.workWithMe;
  const engagements = w.engagements[language];

  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
            <span className="label-text block mb-4">{t(w.label)}</span>
            <h2 className="heading-display text-3xl md:text-5xl">{t(w.title)}</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <p className="text-base md:text-lg text-foreground mb-8 leading-relaxed">{t(w.intro)}</p>
            <ul className="space-y-4 mb-10">
              {engagements.map((item) => (
                <li key={item} className="text-base md:text-lg text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-foreground mb-10 leading-relaxed">{t(w.body)}</p>
            <Link to={`/${lang || "en"}/contact`} className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors self-start">
              {t(w.cta)}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;
