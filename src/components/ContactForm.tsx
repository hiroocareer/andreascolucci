import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent.",
      description: "I'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="label-text">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base rounded-none"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="label-text">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-background border-border text-foreground placeholder:text-muted-foreground h-12 text-base rounded-none"
          placeholder="your@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="label-text">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-background border-border text-foreground placeholder:text-muted-foreground min-h-[160px] text-base resize-none rounded-none"
          placeholder="Tell me about your event..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-14 text-sm font-medium uppercase tracking-[0.15em] bg-foreground hover:bg-foreground/90 text-background transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  );
};

export default ContactForm;
