import { motion } from "framer-motion";

const AvailabilitySection = () => {
  return (
    <section className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="label-text block mb-8">Availability</span>
          <h2 className="heading-display text-3xl md:text-5xl mb-6">
            Available for selected projects in 2026
          </h2>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Limited availability
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
