import { motion } from "framer-motion";

const references = [
  {
    quote: "When things start falling apart onsite, Andreas is the person you want in the room. He doesn't react — he controls.",
    name: "Marco Bencini",
    role: "Head of Operations",
    company: "Cashless Group",
  },
  {
    quote: "I've worked with hundreds of operations people. Andreas is one of the very few who can hold a full operation together under real pressure — and make it look simple.",
    name: "David Pallàs",
    role: "CEO",
    company: "Tecnopagos",
  },
  {
    quote: "He doesn't just manage logistics. He sees the whole system, identifies where it will break, and fixes it before anyone else notices.",
    name: "Riccardo Testoni",
    role: "Project Manager",
    company: "Weezevent Italia",
  },
];

const ReferencesSection = () => {
  return (
    <section className="py-32 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
            Social Proof
          </span>
          <h2 className="heading-display text-[clamp(2rem,5vw,4rem)] leading-[1]">
            References
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {references.map((ref, index) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="mb-6">
                <span className="text-6xl leading-none text-muted-foreground/20 font-serif select-none">
                  "
                </span>
              </div>

              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground mb-8 -mt-4">
                {ref.quote}
              </blockquote>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{ref.name}</p>
                <p className="text-sm text-muted-foreground">
                  {ref.role}, {ref.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
