import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Globe, Database, Cpu } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const capabilities = [
  { icon: Globe, title: "Web Development", desc: "Modern, responsive websites and web applications." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform mobile application development." },
  { icon: Database, title: "Backend & APIs", desc: "Scalable server-side solutions and integrations." },
  { icon: Cpu, title: "Tech Consulting", desc: "Coaching teams on modern development practices." },
];

const projects = [
  { title: "E-Commerce Platform", tech: "React, Node.js, Stripe", desc: "Full-stack e-commerce solution with payment integration.", image: "/placeholder.svg" },
  { title: "EV Charging App", tech: "React Native, Firebase", desc: "Mobile app for locating and managing EV charging stations.", image: "/placeholder.svg" },
  { title: "Real Estate Portal", tech: "Next.js, Supabase", desc: "Property listing platform with advanced search and filtering.", image: "/placeholder.svg" },
  { title: "Startup Dashboard", tech: "React, D3.js", desc: "Analytics dashboard for a tech startup's key metrics.", image: "/placeholder.svg" },
];

const Development = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Web & App<br />Development</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Building digital products and coaching teams on modern development practices.
          </p>
        </AnimatedSection>

        {/* Capabilities */}
        <AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {capabilities.map((c) => (
              <GlassCard key={c.title}>
                <c.icon className="text-accent mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects */}
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p) => (
              <GlassCard key={p.title} className="overflow-hidden p-0">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <img src={p.image} alt={p.title} className="w-12 h-12 opacity-20" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-accent uppercase tracking-wider">{p.tech}</span>
                  <h3 className="font-display font-semibold mt-1 mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Hire Me to Coach You & Your Team</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Level up your development skills with hands-on mentorship.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-foreground text-background font-semibold"
          >
            Get Started <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Development;
