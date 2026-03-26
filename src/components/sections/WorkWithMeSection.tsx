import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const engagements = [
  "Scale is high",
  "Operations are critical",
  "Execution cannot fail",
];

const WorkWithMeSection = () => {
  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="label-text block mb-4">Engagement</span>
            <h2 className="heading-display text-3xl md:text-5xl">Work with me</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-base md:text-lg text-foreground mb-8 leading-relaxed">
              I typically get involved in projects where:
            </p>
            <ul className="space-y-4 mb-10">
              {engagements.map((item) => (
                <li key={item} className="text-base md:text-lg text-muted-foreground flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base md:text-lg text-foreground mb-10 leading-relaxed">
              If you're facing a complex setup or want a second opinion on your operations, feel free to reach out.
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
      </div>
    </section>
  );
};

export default WorkWithMeSection;
