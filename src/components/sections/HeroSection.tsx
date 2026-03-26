import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-6 pt-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="label-text block">Andreas Colucci</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <h1 className="heading-display text-[clamp(2.4rem,6.5vw,6rem)] leading-[0.95] mb-8">
            When operations break,
            <br />
            I take control.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mt-10 mb-20 leading-relaxed"
        >
          Large-scale events. Real-time execution. Critical problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
          >
            Work with me
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] border border-foreground text-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors"
          >
            Download CV
            <Download className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
