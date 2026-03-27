import { motion } from "framer-motion";

const categories = [
  {
    title: "Major Festivals & Productions",
    events: [
      "Kappa Futur Festival (10 editions)",
      "Ultra Music Festival Miami",
      "Ultra Music Festival South Africa",
      "Snowrow Festival (Andorra)",
      "Enchanted Valley Carnival (India)",
    ],
  },
  {
    title: "Large-Scale & International Events",
    events: [
      "Formula 1 Abu Dhabi",
      "Dubai Rugby 7s — 50th Anniversary",
      "Atlas Golden Fest (Panama)",
    ],
  },
  {
    title: "Event Series & Shows",
    events: [
      "elrow shows (Malaga, A Coruña, Netherlands, and others)",
      "Storytellers @ Papaya Playa Project (Tulum)",
    ],
  },
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
            Over 300 events managed across 20+ countries in 10 years of experience.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            From large-scale festivals to international productions, working across different operational environments, teams, and systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-border pt-8"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.events.map((event) => (
                  <li
                    key={event}
                    className="text-base md:text-lg text-foreground font-light leading-relaxed"
                  >
                    {event}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalExperienceSection;
