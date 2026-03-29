import { motion } from "framer-motion";
import WorldMap from "@/components/WorldMap";

const GlobalExperienceSection = () => {
  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20">
          
          <span className="label-text block mb-4">Reach</span>
          <h2 className="heading-display text-3xl md:text-5xl">Global Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl">
          
          <p className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-foreground mb-6">
            300+ events across 20+ countries.
            <br />
            10 years operating in high-complexity environments.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Repeated exposure to high-pressure environments across different countries and systems.
          </p>
        </motion.div>

        <WorldMap />
      </div>
    </section>
  );
};

export default GlobalExperienceSection;