import { useState } from "react";
import { ArrowRight, ChevronDown, MapPin, Users, Target, Zap, Clock, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { bookingLinks } from "@/lib/bookingLinks";

type CaseStudy = {
  hostedBy: string;
  about: string;
  length: string;
  headcount: string;
  leadsCaputed: string;
  qualifiedLeads: string;
  bdrHeadcount: string;
  deliveryTime: string;
};

type Event = {
  name: string;
  location: string;
  date: string;
  industry: string;
  caseStudy: CaseStudy | null;
  thumbnail?: string;
  role?: string;
  desc?: string;
  highlights?: string[];
};

const events: Event[] = [
  {
    name: "Collision",
    location: "Toronto, Canada",
    date: "June 17–20, 2024",
    industry: "Technology & Startups",
    caseStudy: {
      hostedBy: "WebSummit",
      about: "WebSummit — Portugal, Lisbon-based global enterprise. They host startup events around the world, mainly in Canada, Portugal, Dubai, Singapore & China.",
      length: "2 days · 8 hours each day + afterparty",
      headcount: "~15,000 attendees",
      leadsCaputed: "230",
      qualifiedLeads: "82 (35%)",
      bdrHeadcount: "2",
      deliveryTime: "48h",
    },
  },
  {
    name: "Electricity Transformation Canada (ETC)",
    location: "Toronto, Canada",
    date: "October 2025",
    industry: "Energy & Clean Tech",
    caseStudy: {
      hostedBy: "The Canadian Renewable Energy Association",
      about: "Canada's premier clean-energy conference and exhibition. Learn from industry experts, network with your peers, discover innovative technologies and position your business for success at ETC 2025.",
      length: "2 days · 8 hours each day + afterparty",
      headcount: "~12,600 attendees",
      leadsCaputed: "100",
      qualifiedLeads: "23 (23%)",
      bdrHeadcount: "1",
      deliveryTime: "12h",
    },
  },
  {
    name: "EV Charging Expo 2026",
    location: "Toronto, Canada",
    date: "2026",
    industry: "EV & Energy",
    caseStudy: null,
    thumbnail: "/thumbnails/ev-expo.jpg",
    role: "Expo Representative — Maxperr Energy",
    desc: "Represented Maxperr Energy on the expo floor at Canada's premier EV charging industry event. Worked the Maxperr booth, engaged property developers, fleet operators, and infrastructure investors in real-time conversations, and facilitated warm introductions between stakeholders and the Maxperr team.",
    highlights: [
      "Represented Maxperr Energy at the booth",
      "Engaged fleet operators & property developers",
      "Facilitated investor introductions on the floor",
      "High-density lead environment — EV infrastructure focus",
    ],
  },
  {
    name: "National Home Show",
    location: "Toronto, Canada",
    date: "Annual",
    industry: "Real Estate",
    caseStudy: null,
  },
  {
    name: "Atlantic Venture Forum",
    location: "Halifax, Canada",
    date: "2019",
    industry: "Venture & Startups",
    caseStudy: null,
  },
  {
    name: "Social Media Day Halifax",
    location: "Halifax, Canada",
    date: "Annual",
    industry: "Marketing & Social Media",
    caseStudy: null,
  },
];

const industries = [
  { name: "E-Commerce", detail: "6–8 figure companies", count: 10 },
  { name: "Technology & Startups", detail: "SaaS, Apps, Robotics, Transportation", count: 10 },
  { name: "Agencies", detail: "Marketing, TTS, Automation, Branding", count: 10 },
  { name: "Education", detail: "Coaches & Consultants", count: 10 },
  { name: "Real Estate", detail: "Tiny Homes, Garden Houses", count: 5 },
  { name: "Energy", detail: "EV Chargers, Solar, Energy Storage", count: 5 },
];

const services = [
  { name: "Local BDR – Lead Gen", value: 60 },
  { name: "Local BDR – Booth Rep", value: 25 },
  { name: "Presenter / Speaker", value: 20 },
];

const locations = [
  { name: "Canada", pct: 60 },
  { name: "Africa", pct: 20 },
  { name: "USA", pct: 15 },
  { name: "China", pct: 5 },
];

function EventCard({ event }: { event: Event }) {
  const [open, setOpen] = useState(false);
  const cs = event.caseStudy;

  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-start justify-between gap-4"
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-white/60">
              {event.industry}
            </span>
            {cs && (
              <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                Case Study
              </span>
            )}
          </div>
          <h3 className="font-display text-xl font-bold text-white mb-1">{event.name}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1.5"><MapPin size={13} />{event.location}</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />{event.date}</span>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-white/40 flex-shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && cs && (
        <div className="px-6 pb-6 border-t border-white/8">
          <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: about */}
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider font-mono mb-1">Hosted & Organized By</p>
              <p className="text-white font-semibold mb-3">{cs.hostedBy}</p>
              <p className="text-sm text-white/60 leading-relaxed">{cs.about}</p>
            </div>

            {/* Right: metrics */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Clock, label: "Event Length", value: cs.length },
                { icon: Users, label: "Headcount", value: cs.headcount },
                { icon: Target, label: "Leads Captured", value: cs.leadsCaputed },
                { icon: TrendingUp, label: "Qualified Leads", value: cs.qualifiedLeads },
                { icon: Zap, label: "BDR Headcount", value: cs.bdrHeadcount },
                { icon: Clock, label: "Delivery Time", value: cs.deliveryTime },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white/5 rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon size={11} className="text-white/40" />
                    <span className="text-xs text-white/40 font-mono">{label}</span>
                  </div>
                  <p className="text-sm font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {open && !cs && (
        <div className="px-6 pb-6 border-t border-white/10">
          <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {event.role && (
                <p className="text-xs text-white/40 uppercase tracking-wider font-mono mb-1">My Role</p>
              )}
              {event.role && (
                <p className="text-white font-semibold mb-3">{event.role}</p>
              )}
              {event.desc && (
                <p className="text-sm text-white/60 leading-relaxed mb-4">{event.desc}</p>
              )}
              {event.highlights && event.highlights.length > 0 && (
                <ul className="space-y-2">
                  {event.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}
              {!event.role && !event.desc && (
                <p className="text-sm text-white/40 italic">Full case study coming soon. Book me to represent you at this event.</p>
              )}
            </div>
            {event.thumbnail && (
              <div>
                <img
                  src={event.thumbnail}
                  alt={event.name}
                  className="w-full rounded-xl object-cover max-h-56"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const Business = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-5xl mx-auto">

        {/* Hero */}
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Business Development</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Your Brand.<br />My Presence.
          </h1>
          <p className="text-muted-foreground max-w-xl mb-4 text-lg">
            I represent companies at conferences, expos, and trade shows — capturing leads, building relationships, and delivering measurable ROI.
          </p>
          <p className="text-white/40 max-w-lg mb-16 text-sm">
            From tech summits to clean-energy expos, I've attended and worked events across Canada. Click any event below to see the full case study.
          </p>
        </AnimatedSection>

        {/* Events */}
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-2xl font-bold mb-6">Events Attended</h2>
          <div className="flex flex-col gap-3 mb-24">
            {events.map((e) => (
              <EventCard key={e.name} event={e} />
            ))}
          </div>
        </AnimatedSection>

        {/* Industries */}
        <AnimatedSection delay={0.15}>
          <h2 className="font-display text-2xl font-bold mb-2">Clients We Work With</h2>
          <p className="text-white/40 text-sm mb-8">Avg. client MRR: $10K–$500K</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-24">
            {industries.map((ind) => (
              <div key={ind.name} className="glass rounded-xl p-5 border border-white/10">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-white">{ind.name}</h3>
                  <span className="text-xs text-white/30 font-mono">{ind.count}/yr</span>
                </div>
                <p className="text-sm text-white/50">{ind.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center py-16 border-t border-white/10">
          <p className="text-white/40 text-sm uppercase tracking-widest font-mono mb-4">Ready to grow?</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Book Me for Your Next Event
          </h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            I'll represent your brand, capture qualified leads, and deliver results — all within 48 hours.
          </p>
          <a
            href={bookingLinks.business}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
          >
            Book Me <ArrowRight size={18} />
          </a>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Business;
