import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  size: number;
  shape: 'square' | 'circle' | 'triangle';
}

const COLORS = [
  '#d4af37', // gold
  '#f4d03f', // light gold
  '#ffffff', // white
  '#87ceeb', // sky blue
  '#ff69b4', // pink
  '#98fb98', // pale green
];

interface ConfettiProps {
  count?: number;
  active?: boolean;
  className?: string;
}

export function Confetti({ count = 80, active = true, className = '' }: ConfettiProps) {
  const pieces = useMemo<ConfettiPiece[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      size: 8 + Math.random() * 8,
      shape: (['square', 'circle', 'triangle'] as const)[Math.floor(Math.random() * 3)],
    }));
  }, [count]);

  if (!active) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: -20,
          }}
          initial={{ y: 0, rotate: piece.rotation, opacity: 1 }}
          animate={{
            y: ['0vh', '120vh'],
            rotate: [piece.rotation, piece.rotation + 360 * (Math.random() > 0.5 ? 1 : -1)],
            x: [0, (Math.random() - 0.5) * 100],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {piece.shape === 'square' && (
            <div
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.shape === 'circle' && (
            <div
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
                borderRadius: '50%',
              }}
            />
          )}
          {piece.shape === 'triangle' && (
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${piece.size / 2}px solid transparent`,
                borderRight: `${piece.size / 2}px solid transparent`,
                borderBottom: `${piece.size}px solid ${piece.color}`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

interface SparkleProps {
  className?: string;
}

export function Sparkle({ className = '' }: SparkleProps) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 text-gold ${className}`}
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: [0, 1, 0], rotate: [0, 180, 360] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </motion.svg>
  );
}
