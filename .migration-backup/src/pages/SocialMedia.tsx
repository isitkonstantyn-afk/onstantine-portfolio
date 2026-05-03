import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Users, Target, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

const services = [
  { icon: Users, title: "Influencer Management", desc: "End-to-end management of influencer partnerships, from outreach to campaign execution." },
  { icon: Target, title: "Content Strategy", desc: "Data-driven content planning tailored to grow engagement and audience." },
  { icon: BarChart3, title: "Account Management", desc: "Full management of social media accounts including posting, community engagement, and analytics." },
  { icon: TrendingUp, title: "Growth & SEO", desc: "Organic growth strategies combining social media with SEO best practices." },
];

const caseStudies = [
  { title: "E-Commerce Brand Growth", metric: "320%", metricLabel: "Follower Growth", desc: "Scaled an e-commerce brand's social presence across Instagram and TikTok." },
  { title: "Startup Launch Campaign", metric: "1.2M", metricLabel: "Impressions", desc: "Launched a tech startup's social media presence from zero to viral." },
  { title: "Influencer Partnership", metric: "48%", metricLabel: "Engagement Rate", desc: "Managed multi-influencer campaign for a lifestyle brand." },
];

const SocialMedia = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">Social Media &<br />Influencer Management</h1>
          <p className="text-muted-foreground max-w-lg mb-16">
            Strategic social media management and influencer partnerships that drive real growth and engagement.
          </p>
        </AnimatedSection>

        {/* Services */}
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

        {/* Case Studies */}
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Results</h2>
          <p className="text-muted-foreground mb-12">Selected case studies showcasing impact.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <GlassCard key={cs.title}>
                <p className="font-display text-4xl font-bold text-accent mb-1">{cs.metric}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">{cs.metricLabel}</p>
                <h3 className="font-display font-semibold mb-2">{cs.title}</h3>
                <p className="text-sm text-muted-foreground">{cs.desc}</p>
              </GlassCard>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center py-24">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Hire Me to Coach You & Your Team</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Learn proven strategies to grow your social presence.</p>
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

export default SocialMedia;
