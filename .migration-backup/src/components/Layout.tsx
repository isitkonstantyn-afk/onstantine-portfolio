import { ReactNode } from "react";
import GlassNav from "./GlassNav";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <GlassNav />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
