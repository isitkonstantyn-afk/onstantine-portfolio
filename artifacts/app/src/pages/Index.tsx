import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSceneWrapper from "@/components/HeroSceneWrapper";
import { bookingLinks } from "@/lib/bookingLinks";

/* ─── Animated counter ──────────────────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, mv, to]);

  useEffect(() =>
    spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    }), [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Data ───────────────────────────────────────────────────── */
const roles = ["Model & Actor", "App Developer", "Event Organizer", "Business Developer", "Social Media Strategist", "Filmmaker"];

const stats = [
  { value: 230, suffix: "+", label: "Leads at Collision 2024" },
  { value: 15000, suffix: "+", label: "Event reach — ETC 2025" },
  { value: 6, suffix: "", label: "Disciplines mastered" },
  { value: 3, suffix: "", label: "Countries worked in" },
];

const proof = [
  { num: 82, suffix: "", label: "Qualified leads from Collision 2024", sub: "35% conversion rate" },
  { num: 23, suffix: "", label: "Qualified leads from ETC 2025", sub: "23% conversion · delivered in 12h" },
  { num: 20, suffix: "+", label: "Modeling & acting campaigns", sub: "Commercial, editorial & screen" },
  { num: 48, suffix: "h", label: "Lead delivery guarantee", sub: "Post-event turnaround time" },
];

const education = [
  { school: "Sobey School of Business", cred: "Business Degree" },
  { school: "Harvard CS Summer Program", cred: "Computer Science" },
  { school: "Full-Time Filmmaker", cred: "Filmmaker Certificate" },
  { school: "HubSpot Academy", cred: "Social Media & SEO Certified" },
];

const industries = [
  "E-Commerce (6–8 figure)", "Technology & SaaS", "Real Estate",
  "EV & Clean Energy", "Agencies", "Education & Coaching",
];

/* ─── Component ─────────────────────────────────────────────── */
const Index = () => {
  const [ri, setRi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRi(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>

      {/* ══════════════════════ HERO ══════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
        <HeroSceneWrapper />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_20%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-white/30 text-xs tracking-[0.5em] uppercase font-mono mb-8"
          >
            Portfolio · 2026
          </motion.p>

          <h1 className="font-display font-bold tracking-tight leading-[0.9] mb-6"
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}>
            Konstantine
          </h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-px w-full max-w-xs mx-auto mb-8"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }}
          />

          <div className="h-9 overflow-hidden mb-14">
            <motion.p
              key={ri}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -22 }}
              transition={{ duration: 0.45 }}
              className="text-white/40 text-lg md:text-xl tracking-[0.25em] uppercase font-light"
            >
              {roles[ri]}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="text-white/55 max-w-xl mx-auto text-lg md:text-xl leading-relaxed mb-12 font-light"
          >
            Model. Developer. Filmmaker. Strategist. Event Organizer. Business Developer.<br />
            <span className="text-white/80 font-medium">One person. Six disciplines. Real results.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={bookingLinks.general} target="_blank" rel="noopener noreferrer"
              className="group px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2 text-sm tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Book a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/modeling"
              className="px-10 py-4 rounded-full border border-white/15 text-white/60 font-medium hover:border-white/40 hover:text-white transition-all text-sm tracking-wide backdrop-blur-sm">
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-white/15 text-[10px] tracking-[0.4em] font-mono uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/25 to-transparent"
          />
        </motion.div>
      </section>

      {/* ══════════════════ STATS BAR ══════════════════════════ */}
      <section className="border-y border-white/8 py-10 px-6 overflow-hidden">
        <div className="container max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-1">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white/35 text-xs tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════ BENTO SERVICES ═════════════════════ */}
      <section className="container max-w-6xl mx-auto px-6 py-28">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-white/25 text-xs tracking-[0.4em] uppercase font-mono mb-3">What I Do</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Six Ways I Can<br />Help You Win.</h2>
          <p className="text-white/40 mb-16 max-w-md text-lg">Not a jack of all trades. A master of six — with receipts.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.6 }} className="md:col-span-2 md:row-span-1">
            <Link to="/modeling" className="group block h-full">
              <div className="h-full min-h-[240px] glass rounded-3xl p-8 border border-white/10 hover:border-white/25 transition-all duration-400 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/6 transition-all duration-700" />
                <div>
                  <p className="text-white/30 text-xs tracking-widest font-mono uppercase mb-3">01 — Creative</p>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">Modeling & Acting</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm">20+ campaigns across commercial, editorial, and screen. A pro with range — from high-fashion to authentic storytelling.</p>
                </div>
                <div className="flex items-center gap-2 mt-6 text-white/40 group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">View Portfolio</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
            <Link to="/business" className="group block h-full">
              <div className="h-full min-h-[240px] glass rounded-3xl p-7 border border-white/10 hover:border-white/25 transition-all duration-400 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <p className="text-white/30 text-xs tracking-widest font-mono uppercase mb-3">02 — Growth</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Business Dev</h3>
                  <p className="text-white/50 text-sm leading-relaxed">230 leads in one event. I represent your brand at expos and deliver results — fast.</p>
                </div>
                <ArrowUpRight size={16} className="text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-5" />
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.6 }}>
            <Link to="/development" className="group block h-full">
              <div className="h-full min-h-[200px] glass rounded-3xl p-7 border border-white/10 hover:border-white/25 transition-all duration-400 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <p className="text-white/30 text-xs tracking-widest font-mono uppercase mb-3">03 — Tech</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Web & App Dev</h3>
                  <p className="text-white/50 text-sm leading-relaxed">Flutter · Supabase · N8N · AI. Real apps, real users. I also coach you to ship yours.</p>
                </div>
                <ArrowUpRight size={16} className="text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-5" />
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>
            <Link to="/events" className="group block h-full">
              <div className="h-full min-h-[200px] glass rounded-3xl p-7 border border-white/10 hover:border-white/25 transition-all duration-400 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <p className="text-white/30 text-xs tracking-widest font-mono uppercase mb-3">04 — Ops</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Events</h3>
                  <p className="text-white/50 text-sm leading-relaxed">DR · Toronto · Vancouver. I plan and manage events that actually happen, on time.</p>
                </div>
                <ArrowUpRight size={16} className="text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-5" />
              </div>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25, duration: 0.6 }} className="md:col-span-2">
            <Link to="/social-media" className="group block h-full">
              <div className="h-full min-h-[200px] glass rounded-3xl p-7 border border-white/10 hover:border-white/25 transition-all duration-400 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute bottom-0 left-0 w-72 h-32 bg-white/2 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 group-hover:bg-white/5 transition-all duration-700" />
                <div>
                  <p className="text-white/30 text-xs tracking-widest font-mono uppercase mb-3">05 — Digital</p>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Social Media Strategy</h3>
                  <p className="text-white/50 text-sm leading-relaxed max-w-md">Certified by HubSpot. Expert in content strategy, influencer partnerships, and audience growth that converts to revenue.</p>
                </div>
                <ArrowUpRight size={16} className="text-white/25 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ PROOF ══════════════════════════════ */}
      <section className="px-6 py-20 border-y border-white/8">
        <div className="container max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <p className="text-white/25 text-xs tracking-[0.4em] uppercase font-mono mb-3">Track Record</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Numbers Don't Lie.</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proof.map((p, i) => (
              <motion.div key={p.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="glass rounded-2xl p-7 border border-white/10">
                <div className="font-display text-5xl font-bold text-white mb-2"><Counter to={p.num} suffix={p.suffix} /></div>
                <p className="text-white/70 text-sm font-medium mb-1">{p.label}</p>
                <p className="text-white/30 text-xs">{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ INDUSTRIES ═════════════════════════ */}
      <section className="container max-w-6xl mx-auto px-6 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/25 text-xs tracking-[0.4em] uppercase font-mono mb-3">Who I Work With</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Industries.</h2>
          <p className="text-white/40 mb-14 max-w-md">Sectors I've worked across and understand deeply — avg client MRR $10K–$500K.</p>
        </motion.div>
        <div className="flex flex-wrap gap-3">
          {industries.map((ind, i) => (
            <motion.span key={ind} initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.4 }} className="px-6 py-3 rounded-full border border-white/12 text-white/60 text-sm font-medium hover:border-white/30 hover:text-white transition-all cursor-default">
              {ind}
            </motion.span>
          ))}
        </div>
      </section>

      {/* ══════════════════ EDUCATION ══════════════════════════ */}
      <section className="container max-w-6xl mx-auto px-6 py-8 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="text-white/25 text-xs tracking-[0.4em] uppercase font-mono mb-3">Background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-14">Education &<br />Certifications.</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {education.map((ed, i) => (
            <motion.div key={ed.school} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-black p-8">
              <p className="text-white/25 text-xs font-mono uppercase tracking-widest mb-2">{ed.cred}</p>
              <h3 className="font-display font-semibold text-white text-lg">{ed.school}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════ EPIC CTA ═══════════════════════════ */}
      <section className="relative px-6 py-40 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)" }} />
        </div>
        <div className="absolute inset-0 border-t border-white/8 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="container max-w-4xl mx-auto text-center relative z-10"
        >
          <p className="text-white/25 text-xs tracking-[0.5em] uppercase font-mono mb-8">Let's Build Something</p>
          <h2 className="font-display font-bold leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            Ready to Work<br />
            <span className="text-white/40">With the Best?</span>
          </h2>
          <p className="text-white/45 text-lg max-w-lg mx-auto mb-14 leading-relaxed">
            Whether you need a brand face, an app built, leads from an expo, or a full event managed — I show up and I deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={bookingLinks.general} target="_blank" rel="noopener noreferrer"
              className="group px-12 py-5 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_60px_rgba(255,255,255,0.12)] text-sm tracking-wide">
              Book a Call
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/modeling"
              className="px-12 py-5 rounded-full border border-white/15 text-white/50 font-medium hover:border-white/35 hover:text-white transition-all text-sm tracking-wide">
              Explore Work
            </Link>
          </div>
        </motion.div>
      </section>

    </Layout>
  );
};

export default Index;
