import { motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";

import caseMonegros from "@/assets/case-monegros.jpg";
import caseCampovolo from "@/assets/case-campovolo.jpg";
import caseElrow from "@/assets/case-elrow.jpg";
import caseDimensions from "@/assets/case-dimensions.jpg";
import caseMotogp from "@/assets/case-motogp.jpg";
import caseOlimpico from "@/assets/case-olimpico.jpg";
import caseSonar from "@/assets/case-sonar.jpg";

const caseStudies = [
  {
    number: "01",
    title: "Monegros Desert Festival",
    highlight: "70,000 attendees — 22 hours",
    context: "A 22-hour continuous event in a remote, high-complexity environment.",
    details: ["70,000 attendees", "22-hour continuous event", "High complexity, distributed logistics"],
    role: "End-to-end operational coordination across distributed stages, services, and vendor systems in a remote desert environment.",
    outcome: "Operations remained stable throughout the full 22-hour cycle with no critical disruptions.",
    image: caseMonegros,
  },
  {
    number: "02",
    title: "Campovolo — Ligabue 'La Notte di Certe Notti'",
    highlight: "110,000 attendees",
    context: "One of the largest concerts in Italy, with zero margin for error.",
    details: ["110,000 attendees", "Stadium-scale concert", "Zero margin for error"],
    role: "Operational systems oversight. Payment systems, access control, and crowd flow management.",
    outcome: "Seamless execution at maximum capacity. All systems performed without interruption.",
    image: caseCampovolo,
  },
  {
    number: "03",
    title: "elrow Town Madrid",
    highlight: "33,000 attendees/day — 2 days",
    context: "Two consecutive days of high-density operations with 33,000 attendees per day.",
    details: ["33,000 attendees per day", "2 consecutive days", "High-density environment"],
    role: "Onsite operations lead. Real-time decision-making, vendor coordination, and crowd flow control.",
    outcome: "Controlled, stable environment maintained across both days. No escalations or critical incidents.",
    image: caseElrow,
  },
  {
    number: "04",
    title: "Dimensions & Outlook Festival — Pula, Croatia",
    context: "A 14-day multi-venue operation requiring sustained coordination.",
    details: ["Multi-day event (14 days)", "Complex multi-venue setup", "8,000 attendees per day"],
    role: "Multi-venue operational management. Systems integration, scheduling, and cross-venue coordination.",
    outcome: "Sustained operational stability over 14 consecutive days across multiple venues.",
    image: caseDimensions,
  },
  {
    number: "05",
    title: "MotoGP Catalunya — Hospitality & F&B Area",
    context: "Premium hospitality operations under high-volume conditions.",
    details: ["High-volume F&B operations", "Premium hospitality environment", "Montmeló circuit"],
    role: "Operational management of hospitality and food & beverage areas. Payment system deployment.",
    outcome: "Premium service standards maintained under high-volume conditions without interruption.",
    image: caseMotogp,
  },
  {
    number: "06",
    title: "Stadio Olimpico — Football Season",
    context: "Recurring high-volume operations across an entire football season.",
    details: ["Recurring high-volume operations", "Payment system implementation", "F&B vendor integration"],
    role: "Implementation and management of cashless payment systems integrated with F&B vendor operations.",
    outcome: "Reliable operational framework delivering stable results across the full season.",
    image: caseOlimpico,
  },
  {
    number: "07",
    title: "Sónar Festival Barcelona",
    context: "Four days of near-continuous operations across multiple venues with 160,000 total attendees.",
    details: ["4 days", "Multiple venues", "Near 24-hour operations", "160,000 attendees total"],
    role: "Operational coordination across multiple venues and near-continuous scheduling.",
    outcome: "Uninterrupted operations across four days. All critical systems maintained full performance.",
    image: caseSonar,
  },
];

const Work = () => {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">
            Selected Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Large-scale events where operational control was critical. 
            No fake metrics — just reliability, execution, and results.
          </p>
        </motion.div>

        <div>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.number} {...study} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Work;
