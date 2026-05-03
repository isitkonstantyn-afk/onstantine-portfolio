import { Suspense, lazy, useMemo } from "react";

const HeroScene = lazy(() => import("@/components/HeroScene"));

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function CSSFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        style={{
          position: "absolute",
          width: 700, height: 700,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(110,110,255,0.07) 0%, transparent 70%)",
          animation: "kPulse 7s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 1000, height: 1000,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          animation: "kPulse 11s ease-in-out infinite reverse",
        }}
      />
      {/* Ring 1 */}
      <div
        style={{
          position: "absolute",
          width: 520, height: 520,
          top: "50%", left: "50%",
          marginTop: -260, marginLeft: -260,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.07)",
          animation: "kSpin 18s linear infinite",
        }}
      />
      {/* Ring 2 */}
      <div
        style={{
          position: "absolute",
          width: 680, height: 680,
          top: "50%", left: "50%",
          marginTop: -340, marginLeft: -340,
          borderRadius: "50%",
          border: "1px solid rgba(180,180,255,0.05)",
          animation: "kSpin 28s linear infinite reverse",
        }}
      />
      {/* Floating dots */}
      {Array.from({ length: 50 }).map((_, i) => {
        const size = Math.random() * 2 + 1;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: size, height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              borderRadius: "50%",
              background: "white",
              opacity: Math.random() * 0.35 + 0.08,
              animation: `kFloat ${4 + Math.random() * 7}s ease-in-out ${Math.random() * 5}s infinite alternate`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes kFloat {
          from { transform: translateY(0px) translateX(0px); }
          to   { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes kPulse {
          0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          50%       { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes kSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function HeroSceneWrapper() {
  const webgl = useMemo(() => isWebGLAvailable(), []);

  if (!webgl) return <CSSFallback />;

  return (
    <Suspense fallback={<CSSFallback />}>
      <HeroScene />
    </Suspense>
  );
}
