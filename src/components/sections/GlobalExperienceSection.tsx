import { motion } from "framer-motion";
import WorldMap from "@/components/WorldMap";

const selectedEvents = [
  "Ultra Music Festival",
  "Formula 1 Abu Dhabi",
  "Kappa Futur Festival (10 editions)",
  "Sónar Barcelona",
  "elrow (multiple locations)",
  "Dubai Rugby 7s",
];

const GlobalExperienceSection = () => {
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
          <span className="label-text block mb-4">Reach</span>
          <h2 className="heading-display text-3xl md:text-5xl">Global Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
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


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mb-16"
        >
          <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Selected Events
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
            {selectedEvents.map((event) => (
              <li
                key={event}
                className="text-base md:text-lg text-foreground font-light leading-relaxed"
              >
                {event}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default GlobalExperienceSection;
