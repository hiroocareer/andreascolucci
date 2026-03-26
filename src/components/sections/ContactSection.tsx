import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <span className="label-text block mb-4">Contact</span>
            <h2 className="heading-display text-3xl md:text-5xl mb-8">
              Get in touch
            </h2>
            <div className="space-y-6">
              <div>
                <span className="label-text block mb-2">Email</span>
                <a 
                  href="mailto:info@eventoperations.com" 
                  className="text-foreground hover:text-muted-foreground transition-colors story-link"
                >
                  info@eventoperations.com
                </a>
              </div>
              <div>
                <span className="label-text block mb-2">LinkedIn</span>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-muted-foreground transition-colors story-link"
                >
                  View Profile
                </a>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
