import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    details: ["70,000 attendees", "22-hour continuous event", "Distributed logistics across desert terrain"],
    role: "End-to-end operational coordination across distributed stages, services, and vendor systems. Full control over logistics in an environment where infrastructure is temporary and conditions are extreme.",
    outcome: "Operations remained stable throughout the full 22-hour cycle with no critical disruptions. Coordination held under extreme environmental and logistical pressure.",
    image: caseMonegros,
  },
  {
    number: "02",
    title: "Campovolo — Ligabue 'La Notte di Certe Notti'",
    highlight: "110,000 attendees",
    context: "One of the largest concerts in Italy, with zero margin for error.",
    details: ["110,000 attendees", "Stadium-scale concert", "Zero margin for error"],
    role: "Operational systems oversight — payment systems, access control, and crowd flow management at maximum capacity.",
    outcome: "Seamless execution at full capacity. All systems performed without interruption across the entire event cycle. No operational failures recorded.",
    image: caseCampovolo,
  },
  {
    number: "03",
    title: "elrow Town Madrid",
    highlight: "33,000 attendees/day — 2 days",
    context: "Two consecutive days of high-density operations with 33,000 attendees per day.",
    details: ["33,000 attendees per day", "2 consecutive days", "High-density festival environment"],
    role: "Onsite operations lead. Real-time decision-making across high-density zones, vendor coordination, and crowd flow control under sustained pressure.",
    outcome: "Controlled, stable environment maintained across both days despite extreme density conditions. No escalations or critical incidents.",
    image: caseElrow,
  },
  {
    number: "04",
    title: "Dimensions & Outlook Festival — Pula, Croatia",
    highlight: "14 days — multi-venue — 8,000/day",
    context: "A 14-day multi-venue operation requiring sustained coordination over an extended period.",
    details: ["Multi-day event (14 days)", "Complex multi-venue setup", "8,000 attendees per day"],
    role: "Multi-venue operational management. Systems integration, scheduling, and cross-venue coordination over an extended festival period.",
    outcome: "Sustained operational stability over 14 consecutive days across multiple venues. Consistent service delivery with no systemic failures.",
    image: caseDimensions,
  },
  {
    number: "05",
    title: "MotoGP Catalunya — Hospitality & F&B Area",
    highlight: "High-volume F&B — premium hospitality",
    context: "Premium hospitality operations under high-volume conditions at the Montmeló circuit.",
    details: ["High-volume F&B operations", "Premium hospitality environment", "Montmeló circuit"],
    role: "Operational management of hospitality and food & beverage areas. Payment system deployment and vendor coordination under premium service expectations.",
    outcome: "Premium service standards maintained under high-volume conditions. Payment and service flow operated without interruption.",
    image: caseMotogp,
  },
  {
    number: "06",
    title: "Stadio Olimpico — Football Season",
    context: "Recurring high-volume operations across an entire football season.",
    details: ["Recurring high-volume operations", "Payment system implementation", "F&B vendor integration"],
    role: "Implementation and management of cashless payment systems integrated with F&B vendor operations. Built a repeatable operational framework for match days.",
    outcome: "Reliable, consistent operational framework delivering stable results across the full season. Systems held under recurring high-pressure conditions.",
    image: caseOlimpico,
  },
  {
    number: "07",
    title: "Sónar Festival Barcelona",
    context: "Four days of near-continuous operations across multiple venues with 160,000 total attendees.",
    details: ["4 days", "Multiple venues", "Near 24-hour operations", "160,000 attendees total"],
    role: "Operational coordination across multiple venues and near-continuous scheduling. Systems management, crowd flow, and real-time issue resolution at scale.",
    outcome: "Uninterrupted operations across four days and multiple venues. All critical systems maintained full performance. No operational disruptions despite scale and complexity.",
    image: caseSonar,
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="label-text block mb-4">Selected work</span>
          <h2 className="heading-display text-3xl md:text-5xl">Case Studies</h2>
        </motion.div>

        <div>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.number} {...study} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-base md:text-lg text-foreground">
            Working on something similar? Let's talk.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors self-start"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
