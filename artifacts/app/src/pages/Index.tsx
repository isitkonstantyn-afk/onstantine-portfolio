import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Camera, Globe, Megaphone, PartyPopper, Code } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

import HeroSceneWrapper from "@/components/HeroSceneWrapper";

const roles = [
  "Model & Actor",
  "App Developer",
  "Events Manager",
  "Business Developer",
  "Social Media Strategist",
  "Filmmaker",
];

const skills = [
  { name: "Social Media & Marketing", level: 92 },
  { name: "Film & Content Production", level: 88 },
  { name: "Web & App Development", level: 85 },
  { name: "Business Development", level: 82 },
  { name: "Events Management", level: 80 },
  { name: "Modeling & Acting", level: 75 },
];

const industries = [
  "E-Commerce",
  "Technology & Startups",
  "Real Estate",
  "EV & Energy",
  "Agencies",
  "Education",
];

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
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">

        {/* Three.js canvas fills the hero */}
        <HeroSceneWrapper />

        {/* Radial vignette so text stays readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_30%,#000_100%)] pointer-events-none" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center relative z-10"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-white/40 text-xs tracking-[0.3em] uppercase mb-8 font-mono"
          >
            Portfolio
          </motion.p>

          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-tight mb-4 leading-none">
            Konstantine
          </h1>

          {/* Animated role ticker */}
          <div className="h-9 overflow-hidden mt-2 mb-12">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-white/50 text-xl md:text-2xl tracking-widest font-light"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-9 py-4 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm tracking-wide"
            >
              Book a Call <ArrowRight size={16} />
            </Link>
            <Link
              to="/modeling"
              className="px-9 py-4 rounded-full border border-white/20 text-white/70 font-medium hover:border-white/50 hover:text-white transition-all text-sm tracking-wide"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-white/20 text-xs tracking-widest font-mono uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── WHAT I DO ─────────────────────────────────────────── */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-24">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono mb-3">Expertise</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
        <p className="text-white/40 mb-14 max-w-lg">A diverse skill set across creative, technical, and business domains.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <Link to={s.path} key={s.path} className="group">
              <GlassCard className="h-full transition-all duration-300 group-hover:border-white/25">
                <s.icon className="text-white/40 mb-4 group-hover:text-white/70 transition-colors" size={26} />
                <h3 className="font-display font-semibold text-lg mb-2">{s.label}</h3>
                <p className="text-white/40 text-sm mb-4">{s.desc}</p>
                <ArrowRight size={15} className="text-white/25 group-hover:text-white/60 group-hover:translate-x-1 transform transition-all duration-200" />
              </GlassCard>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      {/* ── STRENGTHS ─────────────────────────────────────────── */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-24">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono mb-3">Skills</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Strengths</h2>
        <p className="text-white/40 mb-14 max-w-lg">Skill levels I continue to develop and refine.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white/80">{skill.name}</span>
                <span className="text-xs text-white/30 font-mono">{skill.level}%</span>
              </div>
              <div className="h-px rounded-full bg-white/10 overflow-visible relative">
                <motion.div
                  className="h-px rounded-full bg-white/60 absolute top-0 left-0"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 1, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
                  initial={{ left: 0, opacity: 0 }}
                  whileInView={{ left: `${skill.level}%`, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 1, ease: "easeOut" }}
                  style={{ marginLeft: "-3px" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* ── INDUSTRIES ────────────────────────────────────────── */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-24">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono mb-3">Sectors</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Industries</h2>
        <p className="text-white/40 mb-14 max-w-lg">Sectors I've worked across and understand deeply.</p>
        <div className="flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="glass px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-white/70 hover:border-white/30 hover:text-white transition-all cursor-default"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </AnimatedSection>

      {/* ── EDUCATION ─────────────────────────────────────────── */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-24">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono mb-3">Background</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-14">Education & Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((ed) => (
            <GlassCard key={ed.title}>
              <h3 className="font-display font-semibold mb-1 text-white">{ed.title}</h3>
              <p className="text-sm text-white/40">{ed.desc}</p>
            </GlassCard>
          ))}
        </div>
      </AnimatedSection>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <AnimatedSection className="container max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono mb-6">Let's Go</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Work<br />Together?
        </h2>
        <p className="text-white/40 mb-12 max-w-md mx-auto">
          Let's discuss how my skills can elevate your next project.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-12 py-5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity text-sm tracking-wide"
        >
          Book a Call <ArrowRight size={16} />
        </Link>
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
