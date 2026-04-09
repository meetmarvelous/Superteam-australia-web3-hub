import { motion } from 'motion/react';

export function MeshBackground() {
  return (
    <>
      <div className="noise" />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-gold/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-400/5 blur-[120px]"
        />
      </div>
    </>
  );
}
