import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';
import { Scene7 } from './video_scenes/Scene7';

export const SCENE_DURATIONS: Record<string, number> = {
  open: 5000,
  modeling: 6000,
  social: 5000,
  events: 5000,
  webdev: 6000,
  bizdev: 5000,
  close: 5000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: Scene1,
  modeling: Scene2,
  social: Scene3,
  events: Scene4,
  webdev: Scene5,
  bizdev: Scene6,
  close: Scene7,
};

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] text-[#F2F2F2]">
      {/* Persistent Background Video Layer */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: sceneIndex === 6 ? 0.4 : 0.8 }}
        transition={{ duration: 1.5 }}
      >
        <video
          src={`${import.meta.env.BASE_URL}videos/bg1.mp4`}
          className="w-full h-full object-cover opacity-30"
          autoPlay loop muted playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent via-[#0A0A0A]/50" />
      </motion.div>

      {/* Persistent progress bar accent */}
      <motion.div
        className="absolute top-0 left-0 h-1 bg-[#E1D9C9]"
        animate={{
          width: `${((sceneIndex + 1) / Object.keys(SCENE_DURATIONS).length) * 100}%`,
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Persistent ambient glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-[80px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(225, 217, 201, 0.15), transparent)' }}
        animate={{
          x: ['10vw', '50vw', '80vw', '20vw', '60vw', '30vw', '50vw'][sceneIndex],
          y: ['20vh', '60vh', '10vh', '80vh', '30vh', '70vh', '50vh'][sceneIndex],
          scale: [1, 1.2, 0.8, 1.5, 1, 1.3, 1][sceneIndex],
        }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />

      <AnimatePresence initial={false} mode="wait">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
