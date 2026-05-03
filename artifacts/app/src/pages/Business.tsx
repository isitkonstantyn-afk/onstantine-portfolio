import { Link } from "react-router-dom";
import { ArrowRight, Handshake, Network, Search, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const services = [
  { icon: Network, title: "Networking & Events", desc: "Building connections through industry events, meetups, and conferences." },
  { icon: Search, title: "Outreach & Partnerships", desc: "Strategic outreach to key stakeholders and decision-makers." },
  { icon: Building2, title: "Industry Partnerships", desc: "Forging partnerships across e-commerce, tech, real estate, and EV." },
  { icon: Handshake, title: "Deal Facilitation", desc: "Connecting the right people and facilitating mutually beneficial deals." },
];

const industries = [
  { name: "E-Commerce", desc: "D2C brands, marketplaces, and digital retail" },
  { name: "Technology & Startups", desc: "SaaS, fintech, and early-stage ventures" },
  { name: "Real Estate", desc: "Development, proptech, and property management" },
  { name: "EV Industry", desc: "Electric vehicles, charging infrastructure, and clean energy" },
];

const Business = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Business<br />Development</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Building bridges between industries through networking, outreach, and strategic partnerships.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {services.map((s) => (
              <GlassCard key={s.title}>
                <s.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Industries I Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((ind) => (
              <GlassCard key={ind.name}>
                <h3 className="font-display font-semibold text-lg mb-2">{ind.name}</h3>
                <p className="text-sm text-muted-foreground">{ind.desc}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Exploring synergies across industries.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-foreground text-background font-semibold"
          >
            Reach Out <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Business;
