import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/i18n/useTranslation";
import { supabase } from "@/integrations/supabase/client";

type FormErrors = { name?: string; email?: string; message?: string };

const validate = (data: { name: string; email: string; message: string }): FormErrors => {
  const errs: FormErrors = {};
  if (!data.name.trim()) errs.name = "Name is required";
  if (!data.email.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Please enter a valid email address";
  if (!data.message.trim()) errs.message = "Message is required";
  return errs;
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const { t, translations } = useTranslation();
  const f = translations.contactForm;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("notify-contact", {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({ title: t(f.toast_title), description: t(f.toast_description) });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setSubmitted(false);
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
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted && errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} onSubmit={handleSubmit} noValidate className="space-y-6 max-w-xl">
      <p className="text-base text-muted-foreground">{t(f.intro)}</p>

      <div className="space-y-2">
        <label htmlFor="name" className="label-text">{t(f.name_label)}</label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={submitted && !!errors.name}
          aria-describedby={submitted && errors.name ? "name-error" : undefined}
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base rounded-none"
          placeholder={t(f.name_placeholder)}
        />
        {submitted && errors.name && (
          <p id="name-error" role="alert" className="text-sm text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="label-text">{t(f.email_label)}</label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={submitted && !!errors.email}
          aria-describedby={submitted && errors.email ? "email-error" : undefined}
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base rounded-none"
          placeholder={t(f.email_placeholder)}
        />
        {submitted && errors.email && (
          <p id="email-error" role="alert" className="text-sm text-destructive">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="label-text">{t(f.message_label)}</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={submitted && !!errors.message}
          aria-describedby={submitted && errors.message ? "message-error" : undefined}
          className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[160px] text-base resize-none rounded-none"
          placeholder={t(f.message_placeholder)}
        />
        {submitted && errors.message && (
          <p id="message-error" role="alert" className="text-sm text-destructive">{errors.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full h-14 text-sm font-medium uppercase tracking-[0.15em] bg-foreground hover:bg-foreground/90 text-background transition-colors disabled:opacity-50">
        {isSubmitting ? t(f.sending) : t(f.submit)}
      </button>
    </motion.form>
  );
};

export default ContactForm;
