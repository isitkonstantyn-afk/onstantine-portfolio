import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Camera, Globe, Megaphone, PartyPopper, Code } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const roles = [
  "Filmmaker",
  "Developer",
  "Social Media Strategist",
  "Events Manager",
  "Model & Actor",
  "Business Developer",
];

const skills = [
  { name: "Social Media & Marketing", level: 92 },
  { name: "Film & Content Production", level: 88 },
  { name: "Web & App Development", level: 85 },
  { name: "Events Management", level: 80 },
  { name: "Business Development", level: 82 },
  { name: "Modeling & Acting", level: 75 },
];

const industries = ["E-Commerce", "Technology & Startups", "Real Estate", "EV Industry"];

const education = [
  { title: "Sobey School of Business", desc: "Business Degree" },
  { title: "Harvard CS Summer Program", desc: "Computer Science" },
  { title: "Full-Time Filmmaker", desc: "Filmmaker Certificate" },
  { title: "HubSpot Academy", desc: "Social Media & SEO Certified" },
];

const services = [
  { icon: Camera, label: "Modeling & Acting", path: "/modeling", desc: "Professional portfolio & creative talent" },
  { icon: Megaphone, label: "Social Media", path: "/social-media", desc: "Strategy, management & influencer partnerships" },
  { icon: PartyPopper, label: "Events", path: "/events", desc: "Organizing, managing & producing events" },
  { icon: Code, label: "Web & App Dev", path: "/development", desc: "Full-stack development & coaching" },
  { icon: Briefcase, label: "Business Dev", path: "/business", desc: "Networking, outreach & industry partnerships" },
  { icon: Globe, label: "Contact", path: "/contact", desc: "Let's discuss your next project" },
];

const Index = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Portfolio</p>
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
            Konstantine
          </h1>
          <div className="h-8 overflow-hidden">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl tracking-wide"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 relative z-10"
        >
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center gap-2"
          >
            Book a Call <ArrowRight size={16} />
          </Link>
          <Link
            to="/modeling"
            className="px-8 py-3.5 rounded-full glass text-foreground font-medium hover:bg-[hsla(0,0%,100%,0.1)] transition-colors"
          >
            View Portfolio
          </Link>
        </motion.div>
      </section>

      {/* Services Grid */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">A diverse skill set across creative, technical, and business domains.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link to={s.path} key={s.path}>
              <GlassCard className="h-full">
                <s.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg mb-2">{s.label}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
                <ArrowRight size={16} className="mt-4 text-muted-foreground group-hover:text-foreground transition-colors group-hover:translate-x-1 transform duration-200" />
              </GlassCard>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Strengths</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">Skill levels I continue to develop and refine.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Industries */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Industries</h2>
        <p className="text-muted-foreground mb-12 max-w-lg">Sectors I've worked across and understand deeply.</p>
        <div className="flex flex-wrap gap-3">
          {industries.map((ind) => (
            <span key={ind} className="glass px-6 py-3 rounded-full text-sm font-medium">
              {ind}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {education.map((ed) => (
            <GlassCard key={ed.title}>
              <h3 className="font-display font-semibold mb-1">{ed.title}</h3>
              <p className="text-sm text-muted-foreground">{ed.desc}</p>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-32 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Let's discuss how my skills can help elevate your next project.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-colors"
        >
          Book a Call <ArrowRight size={18} />
        </Link>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
