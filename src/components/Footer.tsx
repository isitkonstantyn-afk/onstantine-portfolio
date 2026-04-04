import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold mb-3">Konstantine</h3>
          <p className="text-muted-foreground text-sm max-w-sm">
            Multi-disciplinary professional spanning filmmaking, social media, events, web development, and business growth.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/modeling" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Modeling & Acting</Link>
            <Link to="/social-media" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Social Media</Link>
            <Link to="/events" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Events</Link>
            <Link to="/development" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Web & App Dev</Link>
            <Link to="/business" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Business Dev</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col gap-2">
            <Link to="/contact" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Contact</Link>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Konstantine. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
