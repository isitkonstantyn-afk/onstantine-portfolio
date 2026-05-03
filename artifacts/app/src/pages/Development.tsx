import { Link } from "react-router-dom";
import { ArrowRight, Code2, GraduationCap, Rocket, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const stack = [
  { name: "Flutter", category: "Mobile" },
  { name: "Dart", category: "Mobile" },
  { name: "Supabase", category: "Backend" },
  { name: "Vercel", category: "Infra" },
  { name: "cPanel", category: "Infra" },
  { name: "Cloudflare", category: "Infra" },
  { name: "Zapier", category: "Automation" },
  { name: "N8N", category: "Automation" },
  { name: "GPT Codex", category: "AI" },
  { name: "Antigravity", category: "AI" },
  { name: "REST APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
];

const categoryColor: Record<string, string> = {
  Mobile: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  Backend: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Infra: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  Automation: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  AI: "bg-pink-500/15 text-pink-300 border-pink-500/25",
};

const apps = [
  {
    name: "Co-View",
    type: "Social / Streaming",
    desc: "A co-watching app that lets users stream content together in real time — built with synchronized playback and live chat.",
    tags: ["Flutter", "Supabase", "Real-time"],
  },
  {
    name: "Influencer CRM / Brand ERP",
    type: "SaaS Platform",
    desc: "End-to-end CRM for influencer agencies — manage talent, track campaigns, handle contracts, and report ROI all in one place.",
    tags: ["Flutter", "Supabase", "Dart"],
  },
  {
    name: "Influencer Management App",
    type: "Mobile App",
    desc: "Mobile-first platform for managing influencer rosters, campaign timelines, deliverables, and brand deal pipelines.",
    tags: ["Flutter", "Zapier", "N8N"],
  },
  {
    name: "Media Kit Builder",
    type: "Creator Tool",
    desc: "Dynamic media kit generator for creators and talent — auto-populated stats, custom branding, and shareable one-pager output.",
    tags: ["Flutter", "Vercel", "APIs"],
  },
  {
    name: "Link in Bio",
    type: "Creator Tool",
    desc: "Branded link-in-bio pages for creators — analytics, custom themes, and integration with social platforms.",
    tags: ["Flutter", "Supabase", "Cloudflare"],
  },
];

const coachingOffering = [
  "1-on-1 sessions tailored to your level",
  "Build a real app from scratch, start to finish",
  "Learn Flutter + Dart for cross-platform mobile",
  "Connect a live backend with Supabase",
  "Deploy and ship with Vercel & Cloudflare",
  "Automate workflows with Zapier & N8N",
  "Integrate AI tools like GPT Codex into your app",
  "Launch something you can add to your portfolio",
];

const Development = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-5xl mx-auto">

        {/* Hero */}
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Web & App Development</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Real Apps.<br />
            <span className="text-white/40">Learn How to Ship.</span>
          </h1>
          <p className="text-white/60 max-w-xl mb-4 text-lg leading-relaxed">
            I build production apps across mobile, web, and SaaS — and I coach students and entrepreneurs how to do the same, from zero to launch.
          </p>
          <div className="flex flex-wrap gap-3 mb-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Coaching Session <ArrowRight size={16} />
            </Link>
            <a
              href="#apps"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/20 text-white/70 hover:border-white/40 transition-colors"
            >
              See My Apps
            </a>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection delay={0.05}>
          <h2 className="font-display text-2xl font-bold mb-2">Tech Stack</h2>
          <p className="text-white/40 text-sm mb-6">Tools I build with every day</p>
          <div className="flex flex-wrap gap-2 mb-24">
            {stack.map((t) => (
              <span
                key={t.name}
                className={`px-3 py-1.5 rounded-full border text-sm font-medium ${categoryColor[t.category]}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Apps */}
        <AnimatedSection delay={0.1} id="apps">
          <div className="flex items-center gap-3 mb-2">
            <Code2 size={20} className="text-white/40" />
            <h2 className="font-display text-2xl font-bold">Apps I've Built</h2>
          </div>
          <p className="text-white/40 text-sm mb-8">Live projects, real users, real code</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-24">
            {apps.map((app) => (
              <div key={app.name} className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider font-mono mb-1">{app.type}</p>
                    <h3 className="font-display font-bold text-xl text-white">{app.name}</h3>
                  </div>
                  <Rocket size={18} className="text-white/20 flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-white/55 leading-relaxed mb-4">{app.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-white/8 text-white/40 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Coaching */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl border border-white/12 overflow-hidden mb-24">
            {/* Header */}
            <div className="bg-white/5 px-8 py-8 border-b border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <GraduationCap size={22} className="text-white/60" />
                <p className="text-xs text-white/40 uppercase tracking-widest font-mono">1-on-1 Coaching</p>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                I'll Teach You to Build Your App
              </h2>
              <p className="text-white/50 max-w-lg">
                Whether you're a complete beginner or a developer wanting to level up — I'll walk you through building a real, shippable app using the same stack I use professionally.
              </p>
            </div>

            {/* What you'll learn */}
            <div className="px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coachingOffering.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA inside card */}
            <div className="px-8 pb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Start Coaching <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Development;
