import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Music, Mic2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const eventTypes = [
  { icon: Music, title: "Entertainment Events", desc: "Concerts, shows, and live entertainment production." },
  { icon: Mic2, title: "Corporate Events", desc: "Conferences, product launches, and networking events." },
  { icon: Calendar, title: "Private Events", desc: "Exclusive gatherings, galas, and celebrations." },
  { icon: MapPin, title: "Pop-Up Experiences", desc: "Brand activations and immersive pop-up events." },
];

const pastEvents = [
  { title: "Tech Startup Mixer", location: "Halifax, NS", type: "Networking", image: "/placeholder.svg" },
  { title: "EV Industry Launch", location: "Toronto, ON", type: "Product Launch", image: "/placeholder.svg" },
  { title: "Real Estate Gala", location: "Vancouver, BC", type: "Private Event", image: "/placeholder.svg" },
  { title: "Summer Music Night", location: "Montreal, QC", type: "Entertainment", image: "/placeholder.svg" },
];

const Events = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Events</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            From concept to execution — organizing, managing, and producing memorable events.
          </p>
        </AnimatedSection>

        {/* Event Types */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {eventTypes.map((e) => (
              <GlassCard key={e.title}>
                <e.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground">{e.desc}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Past Events */}
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Past Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pastEvents.map((ev) => (
              <GlassCard key={ev.title} className="overflow-hidden p-0">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <img src={ev.image} alt={ev.title} className="w-12 h-12 opacity-20" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent uppercase tracking-wider">{ev.type}</span>
                  <h3 className="font-display font-semibold mt-1">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {ev.location}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Let's Plan Your Next Event</h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-foreground text-background font-semibold"
          >
            Book a Call <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Events;
