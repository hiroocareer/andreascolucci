import { motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useTranslation } from "@/i18n/useTranslation";
import { useSEO } from "@/hooks/useSEO";

import caseMonegros from "@/assets/monegros-new.jpg";
import caseCampovolo from "@/assets/case-campovolo.jpg";
import caseElrow from "@/assets/case-elrow.jpg";
import caseDimensions from "@/assets/case-dimensions.jpg";
import caseMotogp from "@/assets/case-motogp.jpg";
import caseOlimpico from "@/assets/case-olimpico.jpg";
import caseSonar from "@/assets/sonar-new.png";

const images = [caseCampovolo, caseMonegros, caseSonar, caseElrow, caseMotogp, caseOlimpico];

// Work page has its own case studies order (different from homepage)
const workPageCaseIndices = [1, 0, 3, -1, 4, 5, 2]; // -1 = Dimensions (not in homepage translations)

const Work = () => {
  useSEO();
  const { t, language, translations } = useTranslation();
  const w = translations.workPage;
  const cs = translations.caseStudies;

  // For Work page, we use the homepage case studies + Dimensions which isn't translated yet
  // We'll use the homepage cases in order matching the Work page layout
  const workImages = [caseMonegros, caseCampovolo, caseElrow, caseDimensions, caseMotogp, caseOlimpico, caseSonar];
  
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
              imageFit={index === 2 ? "contain" : undefined}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
