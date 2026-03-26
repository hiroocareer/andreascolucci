import { motion } from "framer-motion";

interface CaseStudyCardProps {
  number: string;
  title: string;
  details: string[];
  role: string;
  outcome: string;
  index: number;
}

const CaseStudyCard = ({ number, title, details, role, outcome, index }: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="border-t border-border py-12 md:py-16 group"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-1">
          <span className="text-sm text-muted-foreground font-medium">{number}</span>
        </div>

        <div className="md:col-span-4">
          <h3 className="heading-display text-2xl md:text-3xl mb-4 group-hover:text-muted-foreground transition-colors duration-300">
            {title}
          </h3>
          <ul className="space-y-1">
            {details.map((detail, i) => (
              <li key={i} className="text-sm text-muted-foreground">{detail}</li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <span className="label-text block mb-2">Role</span>
          <p className="text-sm text-foreground leading-relaxed">{role}</p>
        </div>

        <div className="md:col-span-4">
          <span className="label-text block mb-2">Outcome</span>
          <p className="text-sm text-foreground leading-relaxed">{outcome}</p>
        </div>
      </div>
    </motion.article>
  );
};

export default CaseStudyCard;
