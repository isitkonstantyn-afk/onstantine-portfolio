import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

type Project = {
  title: string;
  category: string;
  desc: string;
  folderId: string | null;
};

const projects: Project[] = [
  { title: "Acting & Commercials", category: "Acting", desc: "Commercial and acting projects", folderId: null },
  { title: "Angus Glen Golf Club", category: "Commercial", desc: "Golf club commercial photoshoot", folderId: "1bnVQiLbKF_JZgb8zb_eslQu4UkUQT4EI" },
  { title: "Arcade", category: "Modeling", desc: "Arcade-themed editorial shoot", folderId: "1oiUBr4clSspGJ-c2cP31qTmd3c7TcnZb" },
  { title: "Burlington Private Airport", category: "Commercial", desc: "Private airport commercial photoshoot", folderId: "1T2UCUAbIP0n3xyVw8aSZV2l5my-yQUqY" },
  { title: "Clothing Photoshoot", category: "Modeling", desc: "Fashion and clothing editorial series", folderId: "1lT5uZaQT6yy7YHJolzYrzNwWcumTT1KU" },
  { title: "Editorial Photoshoot", category: "Modeling", desc: "High-fashion editorial work", folderId: "1R9Uuhy5_ZOqI_9gp5Q-IPuWN1-iZ3RvU" },
  { title: "Emma Hardie", category: "Commercial", desc: "Brand campaign with Emma Hardie", folderId: null },
  { title: "Fitness", category: "Modeling", desc: "Athletic and fitness portfolio", folderId: "1RbGqHOFpmkMnCsIGJiBZtCYU8RoqlvPL" },
  { title: "Go Train Commercial", category: "Commercial", desc: "GO Train commercial photoshoot", folderId: null },
  { title: "Kings Landing", category: "Modeling", desc: "Kings Landing location shoot", folderId: null },
  { title: "Marcham Golf Club", category: "Commercial", desc: "Golf club commercial campaign", folderId: null },
  { title: "Moneta Photoshoot", category: "Modeling", desc: "Moneta brand photoshoot", folderId: null },
  { title: "Mr Fish", category: "Commercial", desc: "Mr Fish brand campaign", folderId: null },
  { title: "Mr. Coco", category: "Commercial", desc: "Mr. Coco brand campaign", folderId: null },
  { title: "NA Chinese Radio Station", category: "Commercial", desc: "North American Chinese Radio Station campaign", folderId: null },
  { title: "Niagara Falls Winery", category: "Commercial", desc: "Winery commercial shoot in Niagara Falls", folderId: null },
  { title: "Ramen Station", category: "Commercial", desc: "Ramen Station restaurant campaign", folderId: null },
  { title: "Re:Max", category: "Commercial", desc: "Re:Max real estate campaign", folderId: null },
  { title: "ShangriLa", category: "Modeling", desc: "ShangriLa luxury editorial", folderId: null },
  { title: "The Ranch", category: "Modeling", desc: "The Ranch location shoot", folderId: null },
];

const categories = ["All", "Modeling", "Acting", "Commercial"];

function DriveThumb({ folderId }: { folderId: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        src={`https://drive.google.com/embeddedfolderview?id=${folderId}#grid`}
        title="preview"
        className="border-0 pointer-events-none"
        style={{
          width: "350%",
          height: "350%",
          transform: "scale(0.286)",
          transformOrigin: "top left",
          opacity: 0.9,
        }}
        loading="lazy"
      />
      {/* Gradient overlay so the label at bottom stays readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
    </div>
  );
}

export default function Modeling() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <AnimatedSection>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Modeling & Acting</h1>
            <p className="text-muted-foreground max-w-lg mb-12">
              A curated collection of my work — from editorial shoots to commercial campaigns and screen performances.
            </p>
          </AnimatedSection>

          {/* Filter tabs */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm transition-colors ${
                    cat === activeCategory
                      ? "bg-foreground text-background"
                      : "glass text-foreground hover:bg-[hsla(0,0%,100%,0.1)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.04}>
                <button
                  onClick={() => setSelected(p)}
                  className="w-full text-left group"
                >
                  <div className="rounded-xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:scale-[1.02] group-hover:shadow-2xl">
                    {/* Thumbnail area */}
                    <div className="aspect-[3/4] bg-zinc-900 relative">
                      {p.folderId ? (
                        <DriveThumb folderId={p.folderId} />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                          <span className="text-white/20 text-xs font-mono">Coming soon</span>
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                          View Photos
                        </span>
                      </div>
                    </div>

                    {/* Label */}
                    <div className="p-4 bg-zinc-900 border-t border-white/8">
                      <span className="text-xs text-white/40 uppercase tracking-wider font-mono">{p.category}</span>
                      <h3 className="font-display font-semibold text-sm mt-1 text-white/90 leading-snug">{p.title}</h3>
                    </div>
                  </div>
                </button>
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

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: "rgba(0,0,0,0.97)" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
            <div>
              <span className="text-xs text-white/40 uppercase tracking-wider font-mono">{selected.category}</span>
              <h2 className="font-display text-xl font-bold text-white">{selected.title}</h2>
            </div>
            <div className="flex items-center gap-3">
              {selected.folderId && (
                <a
                  href={`https://drive.google.com/drive/folders/${selected.folderId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 hover:text-white transition-colors"
                >
                  <ExternalLink size={14} />
                  Open in Drive
                </a>
              )}
              <button
                onClick={() => setSelected(null)}
                className="p-2 rounded-full glass text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {selected.folderId ? (
              <iframe
                src={`https://drive.google.com/embeddedfolderview?id=${selected.folderId}#grid`}
                className="w-full h-full border-0"
                title={selected.title}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
                <p className="text-white/40">Photos for this project are being added soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
