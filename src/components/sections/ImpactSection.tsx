import { motion } from "framer-motion";

const stats = [
  { value: "110,000", label: "attendees managed in a single event" },
  { value: "14", label: "consecutive days of operations" },
  { value: "24h", label: "near-continuous execution cycles" },
  { value: "7+", label: "large-scale events delivered" },
];

const ImpactSection = () => {
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
          <span className="label-text block mb-4">Impact</span>
          <h2 className="heading-display text-3xl md:text-5xl">By the numbers</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8"
            >
              <p className="heading-display text-4xl md:text-6xl lg:text-7xl mb-4">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
