import { motion } from 'framer-motion';

interface PlaneProps {
  className?: string;
  size?: number;
}

export function Plane({ className = '', size = 60 }: PlaneProps) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={{ width: size, height: size }}
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </motion.svg>
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
      initial={{ x: '-100px', y: 0, rotate: -10 }}
      animate={{
        x: ['calc(-100px)', 'calc(50vw)', 'calc(100vw + 100px)'],
        y: [0, -30, -60],
        rotate: [-10, -5, -15],
      }}
      transition={{
        duration: 20,
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
      initial={{ x: '-150px' }}
      animate={{ x: 'calc(100vw + 150px)' }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="relative">
        {/* Contrail */}
        <motion.div
          className="absolute right-12 top-1/2 h-0.5 bg-gradient-to-l from-white/60 to-transparent"
          style={{ width: '150px', transform: 'translateY(-50%)' }}
          animate={{ opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-12 top-1/2 mt-1 h-0.5 bg-gradient-to-l from-white/40 to-transparent"
          style={{ width: '120px', transform: 'translateY(-50%)' }}
          animate={{ opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <Plane size={40} className="text-white drop-shadow-lg" />
      </div>
    </motion.div>
  );
}
