import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ThemedScreenProps {
  title: string;
  message: string;
  icon: string;
}

export function JetBridgeScreen({ title, message, icon }: ThemedScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Jet bridge corridor effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-800">
        {/* Ceiling lights */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-slate-600 to-transparent">
          <div className="flex justify-around pt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="w-20 h-2 bg-yellow-100/80 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </div>

        {/* Floor perspective lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-slate-900 to-transparent">
          <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="50%" y2="0" stroke="white" strokeWidth="1" />
            <line x1="100%" y1="100%" x2="50%" y2="0" stroke="white" strokeWidth="1" />
            <line x1="25%" y1="100%" x2="50%" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="75%" y1="100%" x2="50%" y2="0" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Side walls */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-600 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-600 to-transparent" />

        {/* Handrails */}
        <div className="absolute left-8 top-1/3 bottom-1/4 w-1 bg-slate-400/50 rounded" />
        <div className="absolute right-8 top-1/3 bottom-1/4 w-1 bg-slate-400/50 rounded" />
      </div>

      {/* Content card */}
      <motion.div
        className="relative z-10 glass-dark rounded-2xl p-8 md:p-10 max-w-md mx-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-5xl mb-4 block">{icon}</span>
        <h3 className="font-display text-3xl md:text-4xl text-gold mb-4 tracking-wider">{title}</h3>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">{message}</p>
      </motion.div>
    </div>
  );
}

export function PlaneSeatScreen({ title, message, icon }: ThemedScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Cabin interior */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-600 to-slate-700">
        {/* Overhead bins */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-slate-500 border-b-4 border-slate-400/30">
          <div className="flex justify-around items-center h-full px-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-24 h-10 bg-slate-600 rounded-b-lg border-b-2 border-slate-400/20"
              />
            ))}
          </div>
        </div>

        {/* Window */}
        <motion.div
          className="absolute right-8 top-1/4 w-20 h-32 rounded-[40%] bg-gradient-to-b from-sky-400 to-sky-600 border-4 border-slate-400/50 overflow-hidden"
          initial={{ opacity: 0.8 }}
        >
          {/* Clouds in window */}
          <motion.div
            className="absolute w-full h-full"
            animate={{ y: ['0%', '-50%', '0%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute top-1/4 left-1/4 w-8 h-4 bg-white/60 rounded-full" />
            <div className="absolute top-1/2 right-1/4 w-6 h-3 bg-white/50 rounded-full" />
            <div className="absolute top-3/4 left-1/3 w-10 h-5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Seat armrest left */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-48 bg-slate-500 rounded-r-lg" />

        {/* Tray table area */}
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-64 h-4 bg-slate-400/30 rounded" />
      </div>

      {/* Content card */}
      <motion.div
        className="relative z-10 glass-dark rounded-2xl p-8 md:p-10 max-w-md mx-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-5xl mb-4 block">{icon}</span>
        <h3 className="font-display text-3xl md:text-4xl text-gold mb-4 tracking-wider">{title}</h3>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">{message}</p>
      </motion.div>
    </div>
  );
}

export function InflightMealScreen({ title, message, icon }: ThemedScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Tray table background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-600 to-slate-700">
        {/* Tray table surface */}
        <div className="absolute inset-x-8 top-1/4 bottom-1/4 bg-slate-300 rounded-lg shadow-2xl">
          {/* Tray texture */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* Meal tray with message */}
      <motion.div
        className="relative z-10 w-full max-w-sm mx-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Tray */}
        <div className="bg-slate-200 rounded-2xl p-6 shadow-2xl border-2 border-slate-300">
          {/* Plate/napkin with message */}
          <div className="bg-white rounded-xl p-6 shadow-inner border border-slate-200">
            <span className="text-5xl mb-4 block text-center">{icon}</span>
            <h3 className="font-display text-2xl md:text-3xl text-slate-800 mb-3 tracking-wider text-center">{title}</h3>
            <div className="h-px bg-slate-200 my-3" />
            <p className="text-slate-700 text-sm md:text-base leading-relaxed text-center">{message}</p>
          </div>

          {/* Utensils */}
          <div className="flex justify-between mt-4 px-4">
            <div className="w-2 h-16 bg-slate-400 rounded-full" />
            <div className="w-2 h-16 bg-slate-400 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface MessageScreenProps {
  children: ReactNode;
  className?: string;
}

export function MessageScreen({ children, className = '' }: MessageScreenProps) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
