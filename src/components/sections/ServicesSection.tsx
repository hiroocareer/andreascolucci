import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Critical Event Operations",
    description:
      "Operational leadership for large-scale events where reliability, coordination, and control are non-negotiable.",
  },
  {
    title: "Onsite Control & Decision Making",
    description:
      "Real-time operational presence during events. I manage issues as they happen, take decisions under pressure, and maintain stability when things move fast.",
  },
  {
    title: "Systems & Flow Management",
    items: [
      "Cashless payment systems",
      "Ticketing systems",
      "Access control and crowd flow",
      "Vendor and F&B operations",
    ],
    closing: "I work on systems that must perform in real time under pressure.",
  },
];

const ServicesSection = () => {
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
          <span className="label-text block mb-4">Services</span>
          <h2 className="heading-display text-3xl md:text-5xl">What I do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
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
              {"description" in service && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              )}
              {"items" in service && (
                <>
                  <ul className="space-y-2 mb-6">
                    {service.items!.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="w-1 h-1 bg-foreground rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    {service.closing}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 pt-10 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <p className="text-base text-muted-foreground">
            If you're dealing with operational complexity, feel free to reach out.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors self-start"
          >
            Let's talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
