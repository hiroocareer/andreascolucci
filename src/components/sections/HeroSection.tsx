import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const HeroSection = () => {
  const { t, translations } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const h = translations.hero;

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-6 pt-20">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="mb-6">
          <span className="heading-display text-xl md:text-2xl text-muted-foreground">{t(h.name)}</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="max-w-5xl">
          <h1 className="heading-display text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.95] mb-8">
            {t(h.headline1)}
            <br />
            {t(h.headline2)}
          </h1>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-muted-foreground max-w-xl mt-10 mb-6 leading-relaxed">
          {t(h.subtitle)}
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-base md:text-lg text-foreground max-w-xl mb-16 leading-relaxed">
          {t(h.cta_line)}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12">
          <Link
            to={`/${lang || "en"}/contact`}
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
          >
            {t(h.cta_primary)}
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="https://www.linkedin.com/in/andreascolucci" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] border border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors">
            LinkedIn
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="text-sm text-muted-foreground">{t(h.availability)}</p>
          <a href="mailto:hello@andreascolucci.com" className="text-sm text-foreground hover:text-muted-foreground transition-colors story-link">
            hello@andreascolucci.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
