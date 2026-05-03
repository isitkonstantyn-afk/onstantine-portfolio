import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 4000;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 14;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.025;
      ref.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#ffffff" size={0.014} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  );
}

function WireframeIco() {
  const ref = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05 + mouse.y * 0.0008;
      ref.current.rotation.y += delta * 0.09 + mouse.x * 0.0008;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[2.5, 2]} />
      <meshBasicMaterial color="#8899ff" wireframe opacity={0.09} transparent />
    </mesh>
  );
}

function OuterIco() {
  const ref = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.03 + mouse.y * 0.0005;
      ref.current.rotation.y -= delta * 0.05 + mouse.x * 0.0005;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[3.8, 1]} />
      <meshBasicMaterial color="#ffffff" wireframe opacity={0.035} transparent />
    </mesh>
  );
}

function PulsingCore() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.04 + Math.sin(state.clock.elapsedTime * 1.2) * 0.025;
      const s = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
      ref.current.scale.set(s, s, s);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.8, 32, 32]} />
      <meshBasicMaterial color="#6677ff" transparent opacity={0.04} />
    </mesh>
  );
}

function Rings() {
  const r1 = useRef<THREE.Mesh>(null!);
  const r2 = useRef<THREE.Mesh>(null!);
  const r3 = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (r1.current) { r1.current.rotation.x += delta * 0.12; r1.current.rotation.z += delta * 0.04; }
    if (r2.current) { r2.current.rotation.y += delta * 0.15; r2.current.rotation.x -= delta * 0.07; }
    if (r3.current) { r3.current.rotation.z += delta * 0.10; r3.current.rotation.y += delta * 0.03; }
  });

  return (
    <>
      <mesh ref={r1} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[3.4, 0.007, 4, 160]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.13} />
      </mesh>
      <mesh ref={r2} rotation={[0, Math.PI / 3, Math.PI / 5]}>
        <torusGeometry args={[4.2, 0.005, 4, 160]} />
        <meshBasicMaterial color="#aaaaff" transparent opacity={0.07} />
      </mesh>
      <mesh ref={r3} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <torusGeometry args={[2.8, 0.004, 4, 120]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.06} />
      </mesh>
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 55 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <StarField />
      <WireframeIco />
      <OuterIco />
      <PulsingCore />
      <Rings />
    </Canvas>
  );
}
