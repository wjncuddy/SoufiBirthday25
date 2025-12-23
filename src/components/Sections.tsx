import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full flex flex-col items-center justify-center p-6 md:p-12 relative ${className}`}
    >
      {children}
    </section>
  );
}

interface ScrollIndicatorProps {
  className?: string;
}

export function ScrollIndicator({ className = '' }: ScrollIndicatorProps) {
  return (
    <motion.div
      className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <motion.span
        className="text-white/50 text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        Scroll or swipe
      </motion.span>
      <div className="w-7 h-12 rounded-full border-2 border-white/30 flex items-start justify-center pt-2 pb-1">
        <motion.div
          className="w-1.5 h-3 bg-white/60 rounded-full"
          animate={{ y: [0, 16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}

interface ProgressDotsProps {
  total: number;
  current: number;
  className?: string;
  onDotClick?: (index: number) => void;
}

export function ProgressDots({ total, current, className = '', onDotClick }: ProgressDotsProps) {
  return (
    <div className={`fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3 ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 tap-highlight ${
            i === current ? 'bg-gold scale-125' : 'bg-white/30'
          }`}
          onClick={() => onDotClick?.(i)}
          whileTap={{ scale: 1.5 }}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
}

interface DepartureRowProps {
  time: string;
  destination: string;
  flight: string;
  gate: string;
  status: string;
  isHighlighted?: boolean;
  delay?: number;
}

export function DepartureRow({
  time,
  destination,
  flight,
  gate,
  status,
  isHighlighted = false,
  delay = 0,
}: DepartureRowProps) {
  return (
    <motion.div
      className={`grid grid-cols-5 gap-2 md:gap-4 p-3 md:p-4 font-mono text-sm md:text-base ${
        isHighlighted ? 'bg-gold/20 border-l-4 border-gold' : 'bg-slate-800/50'
      }`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <span className="text-white/90">{time}</span>
      <span className={`col-span-1 truncate ${isHighlighted ? 'text-gold font-bold' : 'text-white'}`}>
        {destination}
      </span>
      <span className="text-white/70">{flight}</span>
      <span className="text-white/70">{gate}</span>
      <span className={`text-right ${status === 'BOARDING' ? 'text-green-400' : 'text-white/50'}`}>
        {status}
      </span>
    </motion.div>
  );
}

export function DepartureBoard() {
  const flights = [
    { time: '08:00', destination: 'PARIS', flight: 'AF123', gate: 'A1', status: 'DEPARTED' },
    { time: '09:30', destination: 'LONDON', flight: 'BA456', gate: 'B3', status: 'DEPARTED' },
    { time: '10:45', destination: 'YOUR HEART', flight: 'BD2025', gate: 'LOVE', status: 'BOARDING', highlighted: true },
    { time: '11:15', destination: 'TOKYO', flight: 'JL789', gate: 'C5', status: 'ON TIME' },
    { time: '12:30', destination: 'NEW YORK', flight: 'AA101', gate: 'D2', status: 'ON TIME' },
  ];

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-slate-900/80 rounded-lg overflow-hidden border border-slate-700"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="grid grid-cols-5 gap-2 md:gap-4 p-3 md:p-4 bg-slate-800 font-mono text-xs md:text-sm text-white/50 uppercase">
        <span>Time</span>
        <span>Destination</span>
        <span>Flight</span>
        <span>Gate</span>
        <span className="text-right">Status</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-700/50">
        {flights.map((flight, i) => (
          <DepartureRow
            key={flight.flight}
            {...flight}
            isHighlighted={flight.highlighted}
            delay={i * 0.1}
          />
        ))}
      </div>
    </motion.div>
  );
}
