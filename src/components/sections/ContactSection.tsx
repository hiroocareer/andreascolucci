import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "@/i18n/useTranslation";

const ContactSection = () => {
  const { t, translations } = useTranslation();
  const c = translations.contactSection;

  return (
    <section id="contact" className="py-28 md:py-36 px-4 md:px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="md:col-span-5">
            <span className="label-text block mb-4">{t(c.label)}</span>
            <h2 className="heading-display text-3xl md:text-5xl mb-8">{t(c.title)}</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">{t(c.description)}</p>
            <div className="space-y-6">
              <div>
                <span className="label-text block mb-2">{t(c.email_label)}</span>
                <a href="mailto:andreas.colucci@icloud.com" className="text-lg md:text-xl text-foreground hover:text-muted-foreground transition-colors story-link font-medium">
                  andreas.colucci@icloud.com
                </a>
              </div>
              <div>
                <span className="label-text block mb-2">{t(c.linkedin_label)}</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-muted-foreground transition-colors story-link">
                  {t(c.linkedin_text)}
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
