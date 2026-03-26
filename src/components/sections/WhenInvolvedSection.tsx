import { motion } from "framer-motion";

const triggers = [
  "When an event scales beyond the original plan",
  "When operational complexity increases",
  "When systems — payments, access, flows — must work seamlessly",
  "When issues arise during execution",
  "When control needs to be re-established quickly",
];

const WhenInvolvedSection = () => {
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
          <span className="label-text block mb-4">When to call</span>
          <h2 className="heading-display text-3xl md:text-5xl">When I get involved</h2>
        </motion.div>

        <div className="max-w-2xl">
          {triggers.map((trigger, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="border-t border-border py-5"
            >
              <p className="text-base md:text-lg text-foreground">{trigger}</p>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default WhenInvolvedSection;
