import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="heading-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] mb-8">
            About
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl space-y-8 mb-24"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed">
            Years of work in high-pressure, large-scale event environments — from 
            festivals to stadiums, from 8,000 to 160,000 people.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The common thread is execution under conditions where theory doesn't help. 
            I make decisions under pressure, anticipate failures before they happen, 
            and build operational systems that hold when everything else is moving.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            The work is not about planning on paper. It's about control on the ground.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="border-t border-border pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="label-text block mb-4">Principles</span>
            <h2 className="heading-display text-2xl md:text-4xl">How I operate</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {[
              { title: "Execution over theory", text: "Plans are only as good as their execution. I focus on what happens on the ground." },
              { title: "Decisions under pressure", text: "When things change — and they always do — I make clear decisions quickly." },
              { title: "Anticipation", text: "The best problem is the one that never happens. I identify risks before they become failures." },
              { title: "Systems that hold", text: "I build operational frameworks designed to perform reliably at scale." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="border-t border-border pt-6"
              >
                <h3 className="text-base font-medium text-foreground mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
