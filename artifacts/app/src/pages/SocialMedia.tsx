import { ExternalLink, BarChart3, Users, Target, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { bookingLinks } from "@/lib/bookingLinks";

const services = [
  { icon: Users, title: "Account Management", desc: "Full management of social media accounts — content scheduling, community engagement, analytics, and growth strategy." },
  { icon: Target, title: "Content Strategy", desc: "Data-driven content planning built around the algorithm and the audience. Reels, shorts, carousels, and long-form." },
  { icon: BarChart3, title: "Brand Positioning", desc: "Craft the voice, aesthetic, and narrative that makes a brand instantly recognizable across platforms." },
  { icon: TrendingUp, title: "Growth & Reach", desc: "Organic growth strategies — hashtags, posting cadence, collabs, and community building that compounds over time." },
];

type Platform = "TikTok" | "YouTube" | "LinkedIn" | "Instagram";

type PlatformLink = {
  platform: Platform;
  handle: string;
  url: string;
};

type ManagedAccount = {
  platforms: PlatformLink[];
  niche: string;
  role: string;
  desc: string;
  stats: { label: string; value: string }[];
  highlight: string;
  banner?: string;
};

const accounts: ManagedAccount[] = [
  {
    platforms: [{ platform: "TikTok", handle: "@tech_tok_world", url: "https://www.tiktok.com/@tech_tok_world" }],
    niche: "Tech & Innovation",
    role: "Account Manager & Content Strategist",
    desc: "Built and managed a tech-focused TikTok channel from the ground up — developing a consistent content style around emerging technology, gadgets, and digital trends.",
    stats: [
      { label: "Followers", value: "4,600+" },
      { label: "Total Likes", value: "32.4K" },
      { label: "Videos Posted", value: "144" },
      { label: "Avg. Engagement", value: "7%" },
    ],
    highlight: "32,400 total likes on tech content",
  },
  {
    platforms: [{ platform: "YouTube", handle: "@Dantitude Dance Entertainment", url: "https://www.youtube.com/@dantitudedanceentertainmen8548" }],
    niche: "Dance & Entertainment",
    role: "Channel Manager & Growth Strategist",
    desc: "Managed YouTube presence for a dance and entertainment brand — optimizing video titles, thumbnails, descriptions, and upload cadence to maximize reach and subscriber growth.",
    stats: [
      { label: "Subscribers", value: "341" },
      { label: "Videos", value: "28" },
      { label: "Content Type", value: "Performances & covers" },
      { label: "Strategy", value: "SEO + consistency" },
    ],
    highlight: "Dance & entertainment content management",
    banner: "/thumbnails/dantitude-youtube.jpg",
  },
  {
    platforms: [{ platform: "LinkedIn", handle: "Maxperr Energy", url: "https://www.linkedin.com/company/maxperrenergy/" }],
    niche: "EV Charging & Clean Energy",
    role: "LinkedIn Page Manager",
    desc: "Managed the corporate LinkedIn presence for Maxperr Energy — creating thought leadership content around Canada's EV transition, posting event recaps, and growing the company's professional network and brand authority in the clean-energy sector.",
    stats: [
      { label: "Niche", value: "Clean Energy / EV" },
      { label: "Content Focus", value: "Thought leadership" },
      { label: "Target Audience", value: "Investors & developers" },
      { label: "Platform", value: "LinkedIn Company" },
    ],
    highlight: "B2B brand authority in Canada's EV sector",
  },
  {
    platforms: [{ platform: "LinkedIn", handle: "Nigel Thomas", url: "https://www.linkedin.com/in/nigelthomas-ai/" }],
    niche: "Agency Coaching · $30K–$100K MRR",
    role: "Personal Brand Manager",
    desc: "Managed and grew Nigel's LinkedIn presence as an agency coach helping CEOs scale from $30K to $100K MRR — crafting content around agency growth, leadership, and revenue strategy to build authority with his target audience of agency owners.",
    stats: [
      { label: "Niche", value: "Agency Coaching" },
      { label: "Target Client", value: "CEOs $30K–$100K MRR" },
      { label: "Content Type", value: "Growth strategy & authority" },
      { label: "Platform", value: "LinkedIn Personal" },
    ],
    highlight: "Authority brand for agency coaches targeting CEOs",
  },
  {
    platforms: [
      { platform: "LinkedIn", handle: "TRNDZY Corp", url: "https://www.linkedin.com/company/trndzy-corp/posts/?feedView=all" },
      { platform: "Instagram", handle: "@trndzy.app", url: "https://www.instagram.com/trndzy.app/" },
    ],
    niche: "Tech Startup · Social Commerce",
    role: "Social Media Manager — Brand & Growth",
    desc: "Managed multi-platform presence for TRNDZY Corp — a social commerce tech startup. Created content that communicated the product vision, grew brand awareness among early adopters, and built community ahead of launch across LinkedIn and Instagram.",
    stats: [
      { label: "Platforms", value: "LinkedIn + Instagram" },
      { label: "Niche", value: "Social Commerce / Tech" },
      { label: "Content Focus", value: "Brand awareness & launch" },
      { label: "Target Audience", value: "Founders & early adopters" },
    ],
    highlight: "Multi-platform launch strategy for a tech startup",
  },
  {
    platforms: [
      { platform: "LinkedIn", handle: "Abbas Jaber", url: "https://www.linkedin.com/in/abbas-jaber-cfte-msta-040ab765/" },
      { platform: "Instagram", handle: "@aj_founder_journey", url: "https://www.instagram.com/aj_founder_journey/" },
    ],
    niche: "Founder Journey · Fintech & Innovation",
    role: "Personal Brand Manager",
    desc: "Managed personal brand for Abbas Jaber (CFTE, MSTA) — a fintech founder and innovator. Crafted content documenting his founder journey, industry insights, and startup milestones across LinkedIn and Instagram to build credibility and grow his professional audience.",
    stats: [
      { label: "Platforms", value: "LinkedIn + Instagram" },
      { label: "Niche", value: "Fintech / Founder Journey" },
      { label: "Content Type", value: "Founder story & insights" },
      { label: "Target Audience", value: "Investors & fellow founders" },
    ],
    highlight: "Founder personal brand across LinkedIn & Instagram",
  },
];

const platformBadge: Record<Platform, string> = {
  TikTok: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  YouTube: "bg-red-500/20 text-red-400 border-red-500/30",
  LinkedIn: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Instagram: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const platformDot: Record<Platform, string> = {
  TikTok: "bg-pink-400",
  YouTube: "bg-red-400",
  LinkedIn: "bg-blue-400",
  Instagram: "bg-purple-400",
};

const platformGradient: Record<Platform, string> = {
  TikTok: "from-[#010101] via-[#1a0a1a] to-[#69C9D0]/40",
  YouTube: "from-[#0f0f0f] via-[#1a0505] to-[#FF0000]/30",
  LinkedIn: "from-[#0a0f1a] via-[#0a1428] to-[#0A66C2]/40",
  Instagram: "from-[#1a0a1a] via-[#1a0a10] to-[#C13584]/40",
};

const platformSymbol: Record<Platform, string> = {
  TikTok: "♪",
  YouTube: "▶",
  LinkedIn: "in",
  Instagram: "◈",
};

function AccountCard({ account }: { account: ManagedAccount }) {
  const primaryPlatform = account.platforms[0].platform;
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col group">

      {/* Visual Banner */}
      <div className="relative h-40 overflow-hidden">
        {account.banner ? (
          <img
            src={account.banner}
            alt={account.platforms[0].handle}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${platformGradient[primaryPlatform]} flex items-end justify-between p-5`}>
            <span className="font-display text-5xl font-black text-white/8 select-none leading-none">
              {platformSymbol[primaryPlatform]}
            </span>
            <span className="font-display text-6xl font-black text-white/5 select-none leading-none rotate-12">
              {platformSymbol[primaryPlatform]}
            </span>
          </div>
        )}
        {/* Overlay gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Handle overlaid on banner */}
        <div className="absolute bottom-0 left-0 p-4">
          <p className="font-display text-lg font-bold text-white leading-tight drop-shadow-lg">
            {account.platforms.map((p) => p.handle).join(" · ")}
          </p>
          <p className="text-xs text-white/60 font-mono">{account.niche}</p>
        </div>
        {/* Platform badges top-right */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          {account.platforms.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-sm transition-opacity hover:opacity-80 ${platformBadge[p.platform]}`}
            >
              {p.platform} <ExternalLink size={9} />
            </a>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col gap-4">
        <div>
          <p className="text-xs text-white/40 uppercase tracking-wider font-mono mb-0.5">My Role</p>
          <p className="text-sm font-semibold text-white">{account.role}</p>
        </div>
        <p className="text-sm text-white/55 leading-relaxed">{account.desc}</p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {account.stats.map((s) => (
            <div key={s.label} className="bg-white/5 rounded-xl p-3">
              <p className="text-xs text-white/40 font-mono mb-0.5">{s.label}</p>
              <p className="text-sm font-semibold text-white">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Highlight pill */}
        <div className="flex items-center gap-2">
          <span className={`inline-block w-2 h-2 rounded-full flex-shrink-0 ${platformDot[primaryPlatform]}`} />
          <p className="text-xs text-white/50">{account.highlight}</p>
        </div>
      </div>
    </div>
  );
}

const SocialMedia = () => (
  <Layout>
    <section className="pt-32 pb-16 px-6">
      <div className="container max-w-6xl mx-auto">

        {/* Hero */}
        <AnimatedSection>
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">Social Media</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Content That<br />
            <span className="text-white/40">Actually Grows.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mb-4 text-lg">
            I manage social media accounts across TikTok, YouTube, and LinkedIn — building brand authority, growing audiences, and creating content that converts.
          </p>
          <p className="text-white/40 max-w-lg mb-16 text-sm">
            From tech TikToks to corporate LinkedIn pages — here are the accounts I manage.
          </p>
        </AnimatedSection>

        {/* Managed Accounts */}
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-2">Managed Accounts</h2>
          <p className="text-white/40 text-sm mb-8">Click the link icon on any card to view the live account.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-24">
            {accounts.map((a) => (
              <AccountCard key={a.platforms.map((p) => p.handle).join("-")} account={a} />
            ))}
          </div>
        </AnimatedSection>

        {/* Services */}
        <AnimatedSection>
          <h2 className="font-display text-3xl font-bold mb-2">What I Do</h2>
          <p className="text-white/40 text-sm mb-8">The full scope of social media management I offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-24">
            {services.map((s) => (
              <div key={s.title} className="glass rounded-2xl p-6 border border-white/10">
                <s.icon className="text-white/60 mb-4" size={24} />
                <h3 className="font-display font-semibold text-lg mb-2 text-white">{s.title}</h3>
                <p className="text-sm text-white/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center py-16 border border-white/10 rounded-3xl glass">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Want Me to Manage Your Accounts?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Whether it's TikTok, LinkedIn, or YouTube — let's build your audience together.</p>
          <a
            href={bookingLinks.socialMedia}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors"
          >
            Book a Call
          </a>
        </AnimatedSection>

      </div>
    </section>
  </Layout>
);

export default SocialMedia;
