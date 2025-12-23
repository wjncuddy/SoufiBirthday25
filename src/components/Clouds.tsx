import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Cloud {
  id: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface CloudsProps {
  count?: number;
  className?: string;
}

function CloudShape({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} fill="currentColor">
      <ellipse cx="60" cy="60" rx="50" ry="30" />
      <ellipse cx="100" cy="50" rx="40" ry="35" />
      <ellipse cx="140" cy="55" rx="45" ry="28" />
      <ellipse cx="80" cy="45" rx="35" ry="25" />
      <ellipse cx="120" cy="60" rx="30" ry="22" />
    </svg>
  );
}

export function Clouds({ count = 6, className = '' }: CloudsProps) {
  const clouds = useMemo<Cloud[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      y: 20 + Math.random() * 60,
      scale: 0.5 + Math.random() * 1,
      duration: 40 + Math.random() * 40,
      delay: Math.random() * -40,
      opacity: 0.3 + Math.random() * 0.4,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute text-white/30"
          style={{
            top: `${cloud.y}%`,
            width: `${150 * cloud.scale}px`,
            opacity: cloud.opacity,
          }}
          initial={{ x: '-200px' }}
          animate={{ x: 'calc(100vw + 200px)' }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <CloudShape />
        </motion.div>
      ))}
    </div>
  );
}
