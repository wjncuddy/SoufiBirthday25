import { motion } from 'framer-motion';

interface PlaneProps {
  className?: string;
  size?: number;
}

export function Plane({ className = '', size = 60 }: PlaneProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`transform rotate-90 ${className}`}
      style={{ width: size, height: size }}
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

interface AnimatedPlaneProps {
  className?: string;
}

export function AnimatedPlane({ className = '' }: AnimatedPlaneProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ top: '20%' }}
      initial={{ x: '-100px', y: 0 }}
      animate={{
        x: ['calc(-100px)', 'calc(50vw)', 'calc(100vw + 100px)'],
        y: [0, -20, -40],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <Plane size={50} className="text-white/80" />
    </motion.div>
  );
}

export function PlaneWithTrail({ className = '' }: AnimatedPlaneProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{ x: '-200px' }}
      animate={{ x: 'calc(100vw + 200px)' }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="relative flex items-center">
        {/* Contrails */}
        <motion.div
          className="absolute right-10 h-0.5 bg-gradient-to-l from-white/50 to-transparent"
          style={{ width: '180px' }}
          animate={{ opacity: [0.5, 0.25, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-10 mt-2 h-0.5 bg-gradient-to-l from-white/30 to-transparent"
          style={{ width: '150px' }}
          animate={{ opacity: [0.3, 0.15, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <Plane size={40} className="text-white drop-shadow-lg" />
      </div>
    </motion.div>
  );
}

export function LandingPlane({ className = '' }: AnimatedPlaneProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{
        x: '-100px',
        y: '-50px',
      }}
      animate={{
        x: 'calc(100vw + 100px)',
        y: 'calc(100vh + 50px)',
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="relative flex items-center">
        {/* Landing lights */}
        <motion.div
          className="absolute -left-2 w-1 h-1 rounded-full bg-white"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
        <Plane
          size={60}
          className="text-white/90 drop-shadow-lg transform rotate-[15deg]"
        />
      </div>
    </motion.div>
  );
}
