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
      initial={{ x: '-100vw' }}
      animate={{ x: 'calc(100vw)' }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="relative flex items-center">
        {/* Contrails - positioned to intersect with wings */}
        {/* Upper contrail */}
        <motion.div
          className="absolute h-0.5 bg-gradient-to-l from-white/60 to-transparent"
          style={{
            width: '400px',
            right: '22px',
            top: 'calc(50% - 16px)'
          }}
          animate={{ opacity: [0.5, 0.25, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Lower contrail */}
        <motion.div
          className="absolute h-0.5 bg-gradient-to-l from-white/60 to-transparent"
          style={{
            width: '400px',
            right: '22px',
            top: 'calc(50% + 14px)'
          }}
          animate={{ opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        />
        <Plane size={40} className="text-white drop-shadow-lg" />
      </div>
    </motion.div>
  );
}

export function TakeoffPlane({ className = '' }: AnimatedPlaneProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      initial={{
        left: '-200px',
        bottom: '5%',
        rotate: 0,
      }}
      animate={{
        left: [
          '-200px',             // Start off left edge
          'calc(50%)',          // Midway across runway
          'calc(65%)',          // Liftoff point
          'calc(68%)',          // Just after liftoff - rotation starts
          'calc(100% + 300px)'  // Exit off right edge completely
        ],
        bottom: [
          '5%',                 // On runway
          '5%',                 // Still on runway
          '5%',                 // Still on runway at liftoff point
          '8%',                 // Just lifted - rotation starts here
          'calc(100% + 300px)'  // Flying up and off screen top
        ],
        rotate: [
          0,                    // Level on runway
          0,                    // Still level
          0,                    // Still level at liftoff
          -8,                   // Nose starts tilting up after liftoff
          -20                   // Climbing angle
        ],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: [0.4, 0, 1, 1],   // Ease in only, no ease out - continuous acceleration
        times: [0, 0.35, 0.5, 0.55, 1],
      }}
    >
      <img
        src="/images/plane-wheels.png"
        alt="Plane taking off"
        className="w-28 md:w-36 h-auto drop-shadow-2xl"
        style={{ filter: 'brightness(1.1)' }}
      />
    </motion.div>
  );
}

export function Runway() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      {/* Sky to ground gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800 to-transparent" />

      {/* Horizon line */}
      <div className="absolute bottom-[15%] left-0 right-0 h-px bg-white/20" />

      {/* Ground/runway */}
      <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-slate-900 via-slate-800 to-slate-700">
        {/* Runway markings */}
        <div className="absolute top-1/2 left-0 right-0 flex justify-center gap-8">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="w-12 h-1 bg-white/30 rounded"
              style={{
                opacity: 0.2 + (i / 15) * 0.3,
                transform: `scaleX(${0.5 + (i / 15) * 0.5})`
              }}
            />
          ))}
        </div>
        {/* Runway edge lights */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-around px-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-amber-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Keep LandingPlane for backwards compatibility but it's replaced by TakeoffPlane
export function LandingPlane({ className = '' }: AnimatedPlaneProps) {
  return <TakeoffPlane className={className} />;
}
