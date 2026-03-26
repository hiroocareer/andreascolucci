import { motion } from "framer-motion";

const services = [
  {
    title: "Critical Event Operations",
    description:
      "Operational leadership for large-scale events where reliability, coordination, and control are essential.",
  },
  {
    title: "Onsite Control & Decision Making",
    description:
      "Real-time operational presence during events to manage issues, take decisions, and maintain stability under pressure.",
  },
  {
    title: "Systems & Flow Management",
    description:
      "Design and management of operational systems — cashless payments, ticketing, access control, crowd flow, and vendor coordination. Focus on execution, integration, and real-time performance.",
  },
];

const ServicesSection = () => {
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
          <span className="label-text block mb-4">Services</span>
          <h2 className="heading-display text-3xl md:text-5xl">What I do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8"
            >
              <h3 className="text-lg font-medium text-foreground mb-4 tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
