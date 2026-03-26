import { motion } from "framer-motion";
import CaseStudyCard from "@/components/CaseStudyCard";

const caseStudies = [
  {
    number: "01",
    title: "Monegros Desert Festival",
    details: ["70,000 attendees", "22-hour continuous event", "High complexity, distributed logistics"],
    role: "End-to-end operational coordination across distributed stages, services, and vendor systems in a remote desert environment.",
    outcome: "Full operational continuity across 22 hours with zero critical failures. Stable coordination under extreme environmental and logistical pressure.",
  },
  {
    number: "02",
    title: "Campovolo — Ligabue 'La Notte di Certe Notti'",
    details: ["110,000 attendees", "Stadium-scale concert", "Zero margin for error"],
    role: "Operational systems oversight for one of Italy's largest single-artist concerts. Payment systems, access control, and crowd flow management.",
    outcome: "Seamless execution at maximum capacity. All systems performed without interruption across the full event cycle.",
  },
  {
    number: "03",
    title: "elrow Town Madrid",
    details: ["33,000 attendees per day", "2 consecutive days", "High-density festival environment"],
    role: "Onsite operations lead. Real-time decision-making across high-density zones, vendor coordination, and crowd flow control.",
    outcome: "Controlled, stable environment maintained across both days despite extreme density conditions.",
  },
  {
    number: "04",
    title: "Dimensions & Outlook Festival — Pula, Croatia",
    details: ["Multi-day event (14 days)", "Complex multi-venue setup", "8,000 attendees per day"],
    role: "Multi-venue operational management across an extended festival period. Systems integration, scheduling, and cross-venue coordination.",
    outcome: "Sustained operational stability over 14 consecutive days across multiple venues with consistent service delivery.",
  },
  {
    number: "05",
    title: "MotoGP Catalunya — Hospitality & F&B Area",
    details: ["High-volume F&B operations", "Premium hospitality environment", "Montmeló circuit"],
    role: "Operational management of hospitality and food & beverage areas. Payment system deployment and vendor coordination.",
    outcome: "Premium service standards maintained under high-volume conditions. Efficient payment and service flow throughout the event.",
  },
  {
    number: "06",
    title: "Stadio Olimpico — Football Season",
    details: ["Recurring high-volume operations", "Payment system implementation", "F&B vendor integration"],
    role: "Implementation and management of cashless payment systems integrated with F&B vendor operations across the football season.",
    outcome: "Reliable, repeatable operational framework delivering consistent results across multiple match days.",
  },
  {
    number: "07",
    title: "Sónar Festival Barcelona",
    details: ["4 days", "Multiple venues", "Near 24-hour operations", "160,000 attendees total"],
    role: "Operational coordination across multiple venues and near-continuous scheduling. Systems management, crowd flow, and real-time issue resolution.",
    outcome: "Uninterrupted operations across four days and multiple venues. All critical systems maintained full performance throughout.",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="label-text block mb-4">Selected work</span>
          <h2 className="heading-display text-3xl md:text-5xl">Case Studies</h2>
        </motion.div>

        <div>
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.number} {...study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
