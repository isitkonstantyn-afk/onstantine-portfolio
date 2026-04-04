import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const categories = ["All", "Modeling", "Acting"];

const projects = [
  { title: "Editorial Shoot", category: "Modeling", desc: "High fashion editorial for lifestyle brand", image: "/placeholder.svg" },
  { title: "Commercial Campaign", category: "Modeling", desc: "National brand campaign, print & digital", image: "/placeholder.svg" },
  { title: "Short Film — 'Horizon'", category: "Acting", desc: "Lead role in an independent short film", image: "/placeholder.svg" },
  { title: "Runway Show", category: "Modeling", desc: "Fashion week runway appearance", image: "/placeholder.svg" },
  { title: "TV Commercial", category: "Acting", desc: "Featured role in a regional TV ad", image: "/placeholder.svg" },
  { title: "Lookbook", category: "Modeling", desc: "Seasonal lookbook for emerging designer", image: "/placeholder.svg" },
];

const Modeling = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Modeling & Acting</h1>
            <p className="text-muted-foreground max-w-lg mb-12">
              A curated collection of my work in front of the camera — from editorial shoots to screen performances.
            </p>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection delay={0.1}>
            <div className="flex gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm transition-colors ${
                    cat === "All" ? "bg-foreground text-background" : "glass text-foreground hover:bg-[hsla(0,0%,100%,0.1)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.05}>
                <GlassCard className="overflow-hidden p-0">
                  <div className="aspect-[3/4] bg-secondary flex items-center justify-center">
                    <img src={p.image} alt={p.title} className="w-16 h-16 opacity-20" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-accent uppercase tracking-wider">{p.category}</span>
                    <h3 className="font-display font-semibold mt-1 mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection className="text-center py-24">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Interested in Working Together?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-medium"
              >
                Book Me <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Modeling;
