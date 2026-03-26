import { motion } from "framer-motion";

const AboutSection = () => {
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
          <span className="label-text block mb-4">About</span>
          <h2 className="heading-display text-3xl md:text-5xl">Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-6"
        >
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Years of work in high-pressure, large-scale event environments. From 
            festivals to stadiums, from 8,000 to 160,000 people — the common thread 
            is execution under conditions where theory doesn't help.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I make decisions under pressure, anticipate failures before they happen, 
            and build operational systems that hold when everything else is moving. 
            The work is not about planning on paper. It's about control on the ground.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
