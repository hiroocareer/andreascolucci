import { motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useTranslation } from "@/i18n/useTranslation";
import { useSEO } from "@/hooks/useSEO";

import caseCampovolo from "@/assets/events/campovolo.webp";
import caseMonegros from "@/assets/monegros-new.jpg";
import caseSonar from "@/assets/sonar-new.png";
import caseElrow from "@/assets/case-elrow.jpg";
import caseMotogp from "@/assets/events/motogp.jpg";
import caseOlimpico from "@/assets/events/olimpico.jpg";

const images = [caseCampovolo, caseMonegros, caseSonar, caseElrow, caseMotogp, caseOlimpico];
const imageFits: (("cover" | "contain") | undefined)[] = [undefined, undefined, "contain", undefined, undefined, undefined];

const Work = () => {
  useSEO();
  const { t, language, translations } = useTranslation();
  const w = translations.workPage;
  const cs = translations.caseStudies;

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">{t(w.title)}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{t(w.subtitle)}</p>
        </motion.div>

        <div>
          {cs.cases.map((study, index) => (
            <CaseStudyCard
              key={study.number}
              number={study.number}
              title={t(study.title)}
              highlight={t(study.highlight)}
              context={t(study.context)}
              details={study.details[language]}
              role={t(study.role)}
              outcome={t(study.outcome)}
              image={images[index]}
              index={index}
              imageFit={imageFits[index]}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
