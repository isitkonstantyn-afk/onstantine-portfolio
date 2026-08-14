import { ArrowRight, ArrowUpRight, MapPin, CheckCircle2, Users, ClipboardList, Megaphone, Handshake, Calendar, Sparkles, Building2, Mic2, Utensils, Lightbulb, Send } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { bookingLinks, eventCollaborationForms } from "@/lib/bookingLinks";

type PastEvent = {
  title: string;
  subtitle?: string;
  location: string;
  date: string;
  flag: string;
  role: string;
  desc: string;
  tags: string[];
  attendees?: string;
  url?: string;
  thumbnail?: string;
  partners?: string[];
  coHosts?: string[];
};

const pastEvents: PastEvent[] = [
  {
    title: "Data Center Infrastructure & Investment Roundtable",
    subtitle: "Maxperr Energy × DarkNX × Blackhaven Capital",
    location: "9S Centre, Toronto, Canada",
    date: "2025",
    flag: "🇨🇦",
    role: "Co-Host & Organizer",
    desc: "An exclusive, invite-only roundtable on the future of data center infrastructure in Canada. Conversations covered power and energy systems, liquid cooling, land acquisition, and grid upgrades — with guests from cloud, energy, property, and finance all aligned on one goal: scaling intelligent, clean, and sustainable digital infrastructure.",
    tags: ["Co-Hosting", "Private Event", "Energy & Tech", "Investor Relations"],
    thumbnail: "/thumbnails/maxperr-roundtable.jpg",
    partners: ["DarkNX", "Blackhaven Capital", "9S Centre", "Digital Star"],
    coHosts: ["Arman Salah", "Isaac Islam", "Imran Jimoh", "Simon Shao", "Xander Chai"],
  },
  {
    title: "Maxperr Private Social",
    subtitle: "Ahead of EV Rush in Canada",
    location: "200 Town Centre Blvd, Markham, Canada",
    date: "January 31, 2025 · 2:00–5:00 PM",
    flag: "🇨🇦",
    role: "Co-Host",
    desc: "A private, invite-only working session hosted by Maxperr Energy for trusted partners, property stakeholders, and select investors. Focused on Canada's accelerating EV adoption — aligning sites, execution capacity, and capital ahead of the 2035 EV target. A focused briefing plus guided introductions designed to create next steps.",
    tags: ["Private Social", "EV Industry", "Investor Briefing", "Networking"],
    attendees: "67 attended",
    url: "https://lu.ma/87zwm62a",
    thumbnail: "/thumbnails/maxperr-social.jpg",
  },
  {
    title: "The Success Factor",
    subtitle: "Learn from the Best! Real Stories. Real Success.",
    location: "9S Centre, Markham, ON",
    date: "December 6, 2025 · 2:00–6:00 PM",
    flag: "🇨🇦",
    role: "Organizer",
    desc: "A business networking event organized for Non-profit 'A Better Future for All' — bringing together entrepreneurs, mentors, and community leaders to share real stories of success. A high-energy afternoon of panels, networking, and inspiration.",
    tags: ["Networking", "Non-profit", "Business", "Community"],
    attendees: "77 attended",
    url: "https://www.eventbrite.ca/e/the-success-factor-tickets-1966441206584",
    thumbnail: "/thumbnails/success-factor.jpg",
  },
  {
    title: "Events in the Dominican Republic",
    location: "Dominican Republic",
    date: "Multiple",
    flag: "🇩🇴",
    role: "Organizer & Project Manager",
    desc: "Planned and project-managed events on the ground in the DR — coordinating vendors, venues, logistics, and on-site execution from start to finish.",
    tags: ["Project Management", "Vendor Coordination", "On-Site Execution"],
    thumbnail: "/thumbnails/dr-event.jpg",
  },
  {
    title: "EV Charging Expo 2026",
    subtitle: "Canada's Premier EV Infrastructure Event",
    location: "Toronto, Canada",
    date: "2026",
    flag: "🇨🇦",
    role: "Expo Representative",
    desc: "Represented Maxperr Energy on the expo floor at Canada's leading EV charging industry event — connecting with fleet operators, property developers, and infrastructure investors. Engaged attendees at the booth, facilitated introductions, and generated qualified leads in a high-density industry environment.",
    tags: ["Expo", "EV Industry", "Lead Generation", "Networking"],
    thumbnail: "/thumbnails/ev-expo.jpg",
  },
  {
    title: "Events in Toronto",
    location: "Toronto, Canada",
    date: "Multiple",
    flag: "🇨🇦",
    role: "Organizer & Project Manager",
    desc: "Organized and managed events across Toronto — from concept and planning through to day-of operations, guest experience, and post-event wrap-up.",
    tags: ["Event Planning", "Operations", "Guest Experience"],
  },
  {
    title: "Events in Vancouver",
    location: "Vancouver, Canada",
    date: "Multiple",
    flag: "🇨🇦",
    role: "Organizer & Project Manager",
    desc: "Brought events to life in Vancouver with full project management — timelines, budgets, supplier relationships, and smooth day-of delivery.",
    tags: ["Project Management", "Budget Management", "Supplier Relations"],
  },
];

const services = [
  { icon: ClipboardList, title: "End-to-End Planning", desc: "From initial concept and venue scouting to guest lists, timelines, and run-of-show — every detail covered." },
  { icon: Users, title: "On-Site Management", desc: "Present and hands-on the day of the event to keep everything on schedule and handle anything that comes up." },
  { icon: Handshake, title: "Vendor & Supplier Coordination", desc: "Managing caterers, AV teams, photographers, décor, and all external suppliers so you don't have to." },
  { icon: Megaphone, title: "Promotion & Outreach", desc: "Getting the word out — social media, partnerships, and community channels to drive attendance and buzz." },
];

const canHire = [
  "Corporate events & product launches",
  "Networking mixers & industry meetups",
  "Private gatherings & investor socials",
  "Brand activations & pop-up experiences",
  "Conference coordination & logistics",
  "International event management",
];

const collaborationPaths = [
  {
    icon: Handshake,
    title: "Sponsor Your Event",
    label: "Value sponsorship",
    desc: "For hosts looking for support that is not cash sponsorship: venue connections, speakers, MCs, catering, creator coverage, brand activations, vendors, giveaways, or promotional help.",
    options: ["Venue connections", "MCs and speakers", "Catering/vendor intros", "Creators and promo"],
    cta: "Request sponsorship support",
    formUrl: eventCollaborationForms.sponsorship,
  },
  {
    icon: Users,
    title: "Co-Organize or Co-Host",
    label: "Partnership event",
    desc: "For people who want to build something together: shared event concepts, hosted experiences, community gatherings, industry mixers, panels, private socials, or partner-led activations.",
    options: ["Co-hosted events", "Original concepts", "Partner activations", "Shared promotion"],
    cta: "Pitch a collaboration",
    formUrl: eventCollaborationForms.cohost,
  },
  {
    icon: Sparkles,
    title: "Upgrade My Event",
    label: "Proposal path",
    desc: "For events that already have momentum and could become stronger with sharper positioning, better partners, creator coverage, guest experience, sponsor angles, or a stronger revenue model.",
    options: ["Event strategy", "Partner map", "Sponsor angles", "Next-level proposal"],
    cta: "Request upgrade proposal",
    formUrl: eventCollaborationForms.upgrade,
  },
];

const collaborationAssets = [
  { icon: Building2, label: "Venues" },
  { icon: Mic2, label: "MCs & speakers" },
  { icon: Utensils, label: "Catering & vendors" },
  { icon: Megaphone, label: "Promotion" },
  { icon: Users, label: "Creators" },
  { icon: Lightbulb, label: "Concept strategy" },
];

function EventCard({ ev }: { ev: PastEvent }) {
  const cardInner = (
    <div className={`glass rounded-2xl border border-white/10 hover:border-white/25 transition-all duration-300 overflow-hidden group-hover:shadow-[0_0_30px_rgba(255,255,255,0.03)]`}>
      {ev.thumbnail && (
        <div className="relative w-full h-60 overflow-hidden">
          <img
            src={ev.thumbnail}
            alt={ev.title}
            className="w-full h-full object-cover object-center opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium">
            {ev.role}
          </span>
          {ev.url && (
            <span className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
              View Event <ArrowUpRight size={11} />
            </span>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{ev.flag}</span>
              {!ev.thumbnail && (
                <span className="text-xs text-white/35 uppercase tracking-wider font-mono">{ev.role}</span>
              )}
            </div>
            <h3 className="font-display font-bold text-xl text-white leading-tight">{ev.title}</h3>
            {ev.subtitle && <p className="text-sm text-white/50 mt-0.5 italic">{ev.subtitle}</p>}
            <div className="flex flex-wrap gap-4 mt-2 text-xs text-white/35">
              <span className="flex items-center gap-1.5"><MapPin size={11} />{ev.location}</span>
              <span className="flex items-center gap-1.5"><Calendar size={11} />{ev.date}</span>
              {ev.attendees && <span className="flex items-center gap-1.5"><Users size={11} />{ev.attendees}</span>}
            </div>
          </div>
          {ev.url && !ev.thumbnail && <ArrowUpRight size={16} className="text-white/25 group-hover:text-white/60 flex-shrink-0 mt-1 transition-colors" />}
        </div>

        <p className="text-sm text-white/55 leading-relaxed mb-4">{ev.desc}</p>

        {ev.coHosts && (
          <div className="mb-4">
            <p className="text-xs text-white/30 uppercase tracking-wider font-mono mb-2">Co-Hosts</p>
            <p className="text-sm text-white/60">{ev.coHosts.join(" · ")}</p>
          </div>
        )}

        {ev.partners && (
          <div className="mb-4">
            <p className="text-xs text-white/30 uppercase tracking-wider font-mono mb-2">Partners</p>
            <div className="flex flex-wrap gap-1.5">
              {ev.partners.map(p => (
                <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">{p}</span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {ev.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/8 text-white/40 border border-white/10">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  if (ev.url) {
    return (
      <a href={ev.url} target="_blank" rel="noopener noreferrer" className="group block">
        {cardInner}
      </a>
    );
  }
  return <div className="group">{cardInner}</div>;
}

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
            From exclusive investor roundtables to large-scale networking events — I've co-hosted, organized, and project-managed events across Canada and internationally. Hire me to make yours happen.
          </p>
          <div className="flex flex-wrap gap-3 mb-20">
            <a
              href={bookingLinks.events}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity">
              Hire Me for Your Event <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>

        {/* Collaboration */}
        <AnimatedSection delay={0.04}>
          <div className="mb-24 rounded-[2rem] border border-white/10 bg-white/[0.035] overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10 border-b border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.025] to-transparent">
              <p className="text-white/35 text-xs tracking-[0.3em] uppercase mb-4">Collaborate With Elysium On Events</p>
              <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-end">
                <div>
                  <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
                    Bring the right people, partners, and ideas into your event.
                  </h2>
                  <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
                    Elysium can support event hosts with access, introductions, co-hosting, creator coverage, and strategic upgrades. Start with the path that matches what you need.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {collaborationAssets.map(({ icon: Icon, label }) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-black/25 px-3 py-4">
                      <Icon size={18} className="text-white/45 mb-3" />
                      <p className="text-sm font-semibold text-white/75 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-4 p-4 sm:p-6">
              {collaborationPaths.map(({ icon: Icon, title, label, desc, options, cta, formUrl }) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-black/30 p-5 sm:p-6 flex flex-col min-h-[360px]">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="size-11 rounded-2xl bg-white text-black flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/45">{label}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
                  <p className="text-sm text-white/52 leading-relaxed mb-5">{desc}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {options.map(option => (
                      <span key={option} className="rounded-full bg-white/[0.06] border border-white/10 px-3 py-2 text-xs text-white/60">
                        {option}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <a
                      href={formUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      {cta} <Send size={15} />
                    </a>
                    <a
                      href={bookingLinks.eventsCollaboration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/75 hover:bg-white/[0.08] transition-colors"
                    >
                      Book event collaboration call <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Past Events */}
        <AnimatedSection delay={0.05}>
          <h2 className="font-display text-2xl font-bold mb-2">Events I've Organized & Co-Hosted</h2>
          <p className="text-white/40 text-sm mb-8">Click the cards with links to see full event details</p>
          <div className="flex flex-col gap-4 mb-24">
            {pastEvents.map((ev, i) => (
              <AnimatedSection key={ev.title} delay={i * 0.06}>
                <EventCard ev={ev} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Services */}
        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-2xl font-bold mb-2">What I Offer</h2>
          <p className="text-white/40 text-sm mb-8">Hire me to plan, manage, or run your event</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {services.map(s => (
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
              {canHire.map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
            <div className="px-8 pb-8">
              <a
                href={bookingLinks.events}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:opacity-90 transition-opacity">
                Let's Plan Your Event <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default Events;
