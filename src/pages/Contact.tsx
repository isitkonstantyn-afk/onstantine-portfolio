import { useState } from "react";
import { Send, MapPin, Mail, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const serviceOptions = [
  "Modeling & Acting",
  "Social Media Management",
  "Events",
  "Web & App Development",
  "Business Development",
  "Coaching / Mentoring",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="container max-w-4xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Contact</h1>
            <p className="text-muted-foreground max-w-lg mb-16">
              Ready to collaborate? Fill out the form below or reach out through any of the channels listed.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <AnimatedSection className="md:col-span-1 flex flex-col gap-4" delay={0.1}>
              <GlassCard>
                <Mail className="text-accent mb-3" size={22} />
                <h3 className="font-display font-semibold text-sm mb-1">Email</h3>
                <p className="text-sm text-muted-foreground">hello@konstantine.com</p>
              </GlassCard>
              <GlassCard>
                <MapPin className="text-accent mb-3" size={22} />
                <h3 className="font-display font-semibold text-sm mb-1">Based In</h3>
                <p className="text-sm text-muted-foreground">Halifax, Canada</p>
              </GlassCard>
              <GlassCard>
                <Calendar className="text-accent mb-3" size={22} />
                <h3 className="font-display font-semibold text-sm mb-1">Book a Call</h3>
                <p className="text-sm text-muted-foreground">Schedule via Calendly</p>
              </GlassCard>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection className="md:col-span-2" delay={0.2}>
              {submitted ? (
                <GlassCard className="text-center py-16">
                  <Send className="mx-auto text-accent mb-4" size={32} />
                  <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                </GlassCard>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-accent/50"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent/50 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
