"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo, socialLinks } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration - Get these from https://www.emailjs.com/
      // Add these to your .env.local file:
      // NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
      // NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
      // NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
      
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        // Initialize EmailJS
        emailjs.init(publicKey);

        // Send email
        await emailjs.send(serviceId, templateId, {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: personalInfo.email,
        });

        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        // Fallback: If EmailJS is not configured, use mailto link
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
        
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
            Let's Connect
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-12"></div>
          <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Say Hello
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project idea, want to collaborate, or just want to say hi, feel free to reach out. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group p-3 rounded-lg hover:bg-accentBlue/10 -ml-3"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accentBlue/20 to-accentPurple/20 flex items-center justify-center group-hover:from-accentBlue/30 group-hover:to-accentPurple/30 transition-all">
                    <Mail className="h-5 w-5 text-accentBlue group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{personalInfo.email}</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-muted-foreground p-3 rounded-lg hover:bg-accentPurple/10 -ml-3 transition-colors"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accentPurple/20 to-accentCyan/20 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-accentPurple" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Follow me on
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon.toLowerCase()];
                    if (!Icon) return null;

                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accentBlue transition-colors p-2 rounded-lg hover:bg-accentBlue/10"
                        whileHover={{ scale: 1.2, y: -2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{link.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" delay={0.4}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`transition-all focus:ring-2 ${
                    errors.name
                      ? "border-destructive focus:ring-destructive"
                      : "focus:ring-accentBlue border-input"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                    >
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`transition-all focus:ring-2 ${
                    errors.email
                      ? "border-destructive focus:ring-destructive"
                      : "focus:ring-accentBlue border-input"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                    >
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  className={`transition-all focus:ring-2 resize-none ${
                    errors.message
                      ? "border-destructive focus:ring-destructive"
                      : "focus:ring-accentBlue border-input"
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-1.5 text-sm text-destructive flex items-center gap-1"
                    >
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <p className="text-sm text-green-500">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center gap-2"
                  >
                    <AlertCircle className="h-5 w-5 text-destructive" />
                    <p className="text-sm text-destructive">
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

