import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2, Users, ClipboardList, Megaphone, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const pastEvents = [
  {
    title: "Events in the Dominican Republic",
    location: "Dominican Republic",
    flag: "🇩🇴",
    role: "Organizer & Project Manager",
    desc: "Planned and project-managed events on the ground in the DR — coordinating vendors, venues, logistics, and on-site execution from start to finish.",
    tags: ["Project Management", "Vendor Coordination", "On-Site Execution"],
  },
  {
    title: "Events in Toronto",
    location: "Toronto, Canada",
    flag: "🇨🇦",
    role: "Organizer & Project Manager",
    desc: "Organized and managed events across Toronto — from concept and planning through to day-of operations, guest experience, and post-event wrap-up.",
    tags: ["Event Planning", "Operations", "Guest Experience"],
  },
  {
    title: "Events in Vancouver",
    location: "Vancouver, Canada",
    flag: "🇨🇦",
    role: "Organizer & Project Manager",
    desc: "Brought events to life in Vancouver with full project management — timelines, budgets, supplier relationships, and smooth day-of delivery.",
    tags: ["Project Management", "Budget Management", "Supplier Relations"],
  },
];

const services = [
  {
    icon: ClipboardList,
    title: "End-to-End Planning",
    desc: "From initial concept and venue scouting to guest lists, timelines, and run-of-show — every detail covered.",
  },
  {
    icon: Users,
    title: "On-Site Management",
    desc: "Present and hands-on the day of the event to keep everything on schedule and handle anything that comes up.",
  },
  {
    icon: Handshake,
    title: "Vendor & Supplier Coordination",
    desc: "Managing caterers, AV teams, photographers, décor, and all external suppliers so you don't have to.",
  },
  {
    icon: Megaphone,
    title: "Promotion & Outreach",
    desc: "Getting the word out — social media, partnerships, and community channels to drive attendance and buzz.",
  },
];

const canHire = [
  "Corporate events & product launches",
  "Networking mixers & industry meetups",
  "Private gatherings & celebrations",
  "Brand activations & pop-up experiences",
  "Conference coordination & logistics",
  "International event management",
];

const Events = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-5xl mx-auto">

        {/* Hero */}
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Events</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Events That<br />
            <span className="text-white/40">Actually Happen.</span>
          </h1>
          <p className="text-white/60 max-w-xl mb-4 text-lg leading-relaxed">
            I've organized and project-managed events in the Dominican Republic, Toronto, and Vancouver. Hire me to plan, manage, or execute your next event — anywhere.
          </p>
          <div className="flex flex-wrap gap-3 mb-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity"
            >
              Hire Me for Your Event <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        {/* Past Events */}
        <AnimatedSection delay={0.05}>
          <h2 className="font-display text-2xl font-bold mb-2">Where I've Worked</h2>
          <p className="text-white/40 text-sm mb-8">Events I've organized and project-managed</p>
          <div className="flex flex-col gap-4 mb-24">
            {pastEvents.map((ev) => (
              <div key={ev.title} className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{ev.flag}</span>
                      <span className="text-xs text-white/40 uppercase tracking-wider font-mono">{ev.role}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">{ev.title}</h3>
                    <p className="text-sm text-white/40 flex items-center gap-1.5 mt-1">
                      <MapPin size={12} />{ev.location}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{ev.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ev.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/8 text-white/50 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Services */}
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-2xl font-bold mb-2">What I Offer</h2>
          <p className="text-white/40 text-sm mb-8">Hire me to plan, manage, or run your event</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6 border border-white/10">
                <s.icon size={22} className="text-white/40 mb-4" />
                <h3 className="font-display font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Hire me for */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-3xl border border-white/12 overflow-hidden mb-16">
            <div className="bg-white/5 px-8 py-8 border-b border-white/10">
              <h2 className="font-display text-2xl font-bold mb-2">Events You Can Hire Me For</h2>
              <p className="text-white/40 text-sm">Available in Canada & internationally</p>
            </div>
            <div className="px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {canHire.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="px-8 pb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity"
              >
                Let's Plan Your Event <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Events;
