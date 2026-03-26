import { motion } from "framer-motion";

const AboutSection = () => {
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
          <span className="label-text block mb-4">About</span>
          <h2 className="heading-display text-3xl md:text-5xl">Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-8"
        >
          <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
            I focus on execution, not theory.
          </p>
          <p className="text-base md:text-lg text-foreground leading-relaxed">
            Years of work in high-pressure, large-scale event environments — from 
            festivals to stadiums, from 8,000 to 160,000 people. The common thread 
            is making decisions under pressure, in real time, when the cost of 
            inaction is higher than the cost of being wrong.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I anticipate failures before they happen and build operational systems 
            that hold when everything else is moving. The work is not about planning 
            on paper — it's about control on the ground.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
