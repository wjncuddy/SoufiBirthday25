import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Cloud {
  id: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
  opacity: number;
  image: string;
}

const CLOUD_IMAGES = [
  '/images/cloud1.png',
  '/images/cloud2.png',
  '/images/cloud3.png',
  '/images/cloud4.png',
];

interface CloudsProps {
  count?: number;
  className?: string;
}

export function Clouds({ count = 6, className = '' }: CloudsProps) {
  const clouds = useMemo<Cloud[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      y: 15 + Math.random() * 65,
      scale: 0.6 + Math.random() * 0.8,
      duration: 50 + Math.random() * 40,
      delay: Math.random() * -50,
      opacity: 0.4 + Math.random() * 0.4,
      image: CLOUD_IMAGES[Math.floor(Math.random() * CLOUD_IMAGES.length)],
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {clouds.map((cloud) => (
        <motion.img
          key={cloud.id}
          src={cloud.image}
          alt=""
          className="absolute"
          style={{
            top: `${cloud.y}%`,
            width: `${200 * cloud.scale}px`,
            opacity: cloud.opacity,
          }}
          initial={{ x: '-250px' }}
          animate={{ x: 'calc(100vw + 250px)' }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
