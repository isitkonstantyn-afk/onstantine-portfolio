import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const GlassCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "glass rounded-2xl p-6 hover:bg-[hsla(0,0%,100%,0.09)] transition-all duration-300 group",
      className
    )}
  >
    {children}
  </div>
);

export default GlassCard;
