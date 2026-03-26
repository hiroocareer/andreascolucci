import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
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
            Contact
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            For high-complexity events and critical operational environments. 
            Let's discuss your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <ContactForm />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5"
          >
            <div className="space-y-10">
              <div>
                <span className="label-text block mb-3">Email</span>
                <a 
                  href="mailto:info@eventoperations.com" 
                  className="text-foreground hover:text-muted-foreground transition-colors story-link"
                >
                  info@eventoperations.com
                </a>
              </div>
              <div>
                <span className="label-text block mb-3">LinkedIn</span>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors story-link"
                >
                  View Profile
                </a>
              </div>
              <div className="border-t border-border pt-10">
                <span className="label-text block mb-3">Availability</span>
                <p className="text-base text-foreground">
                  Selected projects in 2026
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  High-complexity events / critical environments
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
