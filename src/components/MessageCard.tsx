import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface MessageCardProps {
  title?: string;
  message: string | ReactNode;
  subtitle?: string;
  icon?: ReactNode;
  delay?: number;
  className?: string;
}

export function MessageCard({
  title,
  message,
  subtitle,
  icon,
  delay = 0,
  className = '',
}: MessageCardProps) {
  return (
    <motion.div
      className={`glass-dark rounded-2xl p-8 md:p-12 max-w-lg mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {icon && (
        <motion.div
          className="text-4xl mb-6 flex justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, type: 'spring', stiffness: 200 }}
        >
          {icon}
        </motion.div>
      )}

      {title && (
        <motion.h3
          className="font-display text-2xl md:text-3xl text-gold mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.3 }}
        >
          {title}
        </motion.h3>
      )}

      <div className="text-white/90 text-center leading-relaxed px-4 py-2">
        {typeof message === 'string' ? (
          <p className="text-base md:text-lg">{message}</p>
        ) : (
          message
        )}
      </div>

      {subtitle && (
        <motion.p
          className="text-sm text-white/50 text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

interface FlightWindowProps {
  children: ReactNode;
  className?: string;
}

export function FlightWindow({ children, className = '' }: FlightWindowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Window frame */}
      <div className="absolute inset-0 rounded-[40%] border-8 border-slate-600/50 shadow-inner pointer-events-none" />
      <div className="absolute inset-2 rounded-[40%] border-4 border-slate-500/30 pointer-events-none" />

      {/* Window content */}
      <div className="rounded-[35%] overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
        {children}
      </div>
    </motion.div>
  );
}
