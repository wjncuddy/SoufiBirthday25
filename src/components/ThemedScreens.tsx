import { motion } from 'framer-motion';

interface ThemedScreenProps {
  title: string;
  message: string;
  icon: string;
}

export function GateScreen({ title, message, icon }: ThemedScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/gate.jpg)' }}
      />

      {/* Night sky overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
        }}
      />

      {/* Content card */}
      <motion.div
        className="relative z-10 glass-dark rounded-3xl p-8 md:p-12 max-w-lg mx-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-5xl md:text-6xl mb-6 block">{icon}</span>
        <h3 className="font-display text-3xl md:text-4xl text-gold mb-5 tracking-wider">{title}</h3>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">{message}</p>
      </motion.div>
    </div>
  );
}

export function JetBridgeScreen({ title, message, icon }: ThemedScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/jet-bridge.jpg)' }}
      />

      {/* Night sky overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
        }}
      />

      {/* Content card */}
      <motion.div
        className="relative z-10 glass-dark rounded-3xl p-8 md:p-12 max-w-lg mx-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-5xl md:text-6xl mb-6 block">{icon}</span>
        <h3 className="font-display text-3xl md:text-4xl text-gold mb-5 tracking-wider">{title}</h3>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">{message}</p>
      </motion.div>
    </div>
  );
}

export function PlaneSeatScreen({ title, message, icon }: ThemedScreenProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/seat.jpg)' }}
      />

      {/* Night sky overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
        }}
      />

      {/* Content card */}
      <motion.div
        className="relative z-10 glass-dark rounded-3xl p-8 md:p-12 max-w-lg mx-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span className="text-5xl md:text-6xl mb-6 block">{icon}</span>
        <h3 className="font-display text-3xl md:text-4xl text-gold mb-5 tracking-wider">{title}</h3>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">{message}</p>
      </motion.div>
    </div>
  );
}

// Legacy export for backwards compatibility
export function InflightMealScreen(props: ThemedScreenProps) {
  return <PlaneSeatScreen {...props} />;
}

export function MessageScreen({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
