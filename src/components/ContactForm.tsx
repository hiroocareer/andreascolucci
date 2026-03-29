import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/i18n/useTranslation";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();
  const { t, translations } = useTranslation();
  const f = translations.contactForm;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-confirmation",
          recipientEmail: formData.email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name: formData.name, message: formData.message },
        },
      });

      if (error) throw error;

      toast({ title: t(f.toast_title), description: t(f.toast_description) });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <p className="text-base text-muted-foreground">{t(f.intro)}</p>
      <div className="space-y-2">
        <label htmlFor="name" className="label-text">{t(f.name_label)}</label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base rounded-none" placeholder={t(f.name_placeholder)} />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="label-text">{t(f.email_label)}</label>
        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base rounded-none" placeholder={t(f.email_placeholder)} />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="label-text">{t(f.message_label)}</label>
        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[160px] text-base resize-none rounded-none" placeholder={t(f.message_placeholder)} />
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full h-14 text-sm font-medium uppercase tracking-[0.15em] bg-foreground hover:bg-foreground/90 text-background transition-colors disabled:opacity-50">
        {isSubmitting ? t(f.sending) : t(f.submit)}
      </button>
    </motion.form>
  );
};

export default ContactForm;
