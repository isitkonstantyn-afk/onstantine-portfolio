import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

type Project = {
  title: string;
  category: string;
  thumbnail: string | null;
  folderId: string | null;
};

const projects: Project[] = [
  { title: "Acting & Commercials", category: "Acting", thumbnail: null, folderId: null },
  { title: "Angus Glen Golf Club", category: "Commercial", thumbnail: "/thumbnails/angus-glen.jpg", folderId: "1bnVQiLbKF_JZgb8zb_eslQu4UkUQT4EI" },
  { title: "Arcade", category: "Modeling", thumbnail: "/thumbnails/arcade.jpg", folderId: "1oiUBr4clSspGJ-c2cP31qTmd3c7TcnZb" },
  { title: "Burlington Private Airport", category: "Commercial", thumbnail: "/thumbnails/burlington.jpg", folderId: "1T2UCUAbIP0n3xyVw8aSZV2l5my-yQUqY" },
  { title: "Clothing Photoshoot", category: "Modeling", thumbnail: "/thumbnails/clothing.jpg", folderId: "1lT5uZaQT6yy7YHJolzYrzNwWcumTT1KU" },
  { title: "Editorial Photoshoot", category: "Modeling", thumbnail: "/thumbnails/editorial.jpg", folderId: "1R9Uuhy5_ZOqI_9gp5Q-IPuWN1-iZ3RvU" },
  { title: "Emma Hardie", category: "Commercial", thumbnail: "/thumbnails/emma-hardie.jpg", folderId: null },
  { title: "Fitness", category: "Modeling", thumbnail: "/thumbnails/fitness.jpg", folderId: "1RbGqHOFpmkMnCsIGJiBZtCYU8RoqlvPL" },
  { title: "Go Train Commercial", category: "Commercial", thumbnail: "/thumbnails/go-train.jpg", folderId: null },
  { title: "Kings Landing", category: "Modeling", thumbnail: "/thumbnails/kings-landing.jpg", folderId: null },
  { title: "Markham Golf Club", category: "Commercial", thumbnail: "/thumbnails/markham.jpg", folderId: null },
  { title: "Moneta Photoshoot", category: "Modeling", thumbnail: "/thumbnails/moneta.jpg", folderId: null },
  { title: "Mr Fish", category: "Commercial", thumbnail: "/thumbnails/mr-fish.jpg", folderId: null },
  { title: "Mr. Coco", category: "Commercial", thumbnail: "/thumbnails/mr-coco.jpg", folderId: null },
  { title: "NA Chinese Radio Station", category: "Commercial", thumbnail: "/thumbnails/na-radio.jpg", folderId: null },
  { title: "Niagara Falls Winery", category: "Commercial", thumbnail: "/thumbnails/niagara.jpg", folderId: null },
  { title: "Ramen Station", category: "Commercial", thumbnail: "/thumbnails/ramen.jpg", folderId: null },
  { title: "Re:Max", category: "Commercial", thumbnail: "/thumbnails/remax.jpg", folderId: null },
  { title: "ShangriLa", category: "Modeling", thumbnail: "/thumbnails/shangrila.jpg", folderId: null },
  { title: "The Ranch", category: "Modeling", thumbnail: "/thumbnails/ranch.jpg", folderId: null },
];

const categories = ["All", "Modeling", "Acting", "Commercial"];

function CardThumb({ project }: { project: Project }) {
  if (project.thumbnail) {
    return (
      <img
        src={project.thumbnail}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    );
  }

  if (project.folderId) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src={`https://drive.google.com/embeddedfolderview?id=${project.folderId}#grid`}
          title="preview"
          style={{
            position: "absolute",
            top: "-137px",
            left: "-80px",
            width: "280px",
            height: "700px",
            transform: "scale(2.1)",
            transformOrigin: "top left",
            pointerEvents: "none",
            border: "none",
          }}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-zinc-900" />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(24,24,27,0.95) 0%, rgba(24,24,27,0.4) 25%, rgba(0,0,0,0) 50%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
      <span className="text-white/20 text-xs font-mono">Coming soon</span>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.04}>
                <button
                  onClick={() => (p.thumbnail || p.folderId) ? setSelected(p) : undefined}
                  className="w-full text-left group"
                >
                  <div className="rounded-xl overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/30 group-hover:scale-[1.02] group-hover:shadow-2xl">
                    <div className="aspect-[3/4] bg-zinc-900 relative">
                      <CardThumb project={p} />

                      {(p.thumbnail || p.folderId) && (
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
                            View Photos
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 bg-zinc-900 border-t border-white/8">
                      <span className="text-xs text-white/40 uppercase tracking-wider font-mono">{p.category}</span>
                      <h3 className="font-display font-semibold text-sm mt-1 text-white/90 leading-snug">{p.title}</h3>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>

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

      {selected && (
        <div className="fixed inset-0 z-50 flex flex-col" style={{ backgroundColor: "rgba(0,0,0,0.97)" }}>
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

          <div className="flex-1 overflow-hidden">
            {selected.folderId ? (
              <iframe
                src={`https://drive.google.com/embeddedfolderview?id=${selected.folderId}#grid`}
                className="w-full h-full border-0"
                title={selected.title}
              />
            ) : selected.thumbnail ? (
              <div className="flex items-center justify-center h-full p-8">
                <img
                  src={selected.thumbnail}
                  alt={selected.title}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-white/40">Photos coming soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
