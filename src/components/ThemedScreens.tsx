import { motion } from 'framer-motion';

interface ThemedScreenProps {
  title: string;
  message: string;
  icon: string;
}

export function GateScreen({ title, message }: ThemedScreenProps) {
  return (
    <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image - full width */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/gate.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Night sky overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
        }}
      />

      {/* LED Departures Board */}
      <motion.div
        className="relative z-10 max-w-6xl w-[95%] mx-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Outer metal frame */}
        <div
          className="rounded-lg"
          style={{
            padding: '16px',
            background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* LED Screen Surface */}
          <div
            className="rounded"
            style={{
              padding: '48px',
              backgroundColor: '#0a0a0a',
              boxShadow: 'inset 0 4px 20px rgba(0, 0, 0, 0.8)'
            }}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between pb-8 border-b-2" style={{ borderColor: '#1f1f1f', marginBottom: '40px' }}>
              <div
                className="font-mono text-sm md:text-base tracking-[0.4em] uppercase font-bold"
                style={{ color: '#ffcc00' }}
              >
                DEPARTURES
              </div>
            </div>

            {/* Flight Info Row */}
            <div style={{ marginBottom: '40px' }}>
              <div className="grid grid-cols-12 gap-4 mb-6" style={{ padding: '0 16px' }}>
                <div className="col-span-4 md:col-span-3">
                  <p className="font-mono text-xs md:text-sm" style={{ color: '#666' }}>TIME</p>
                </div>
                <div className="col-span-4 md:col-span-3">
                  <p className="font-mono text-xs md:text-sm" style={{ color: '#666' }}>FLIGHT</p>
                </div>
                <div className="col-span-4 md:col-span-3">
                  <p className="font-mono text-xs md:text-sm" style={{ color: '#666' }}>DESTINATION</p>
                </div>
                <div className="hidden md:block md:col-span-3">
                  <p className="font-mono text-xs md:text-sm" style={{ color: '#666' }}>STATUS</p>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 rounded" style={{ backgroundColor: '#111', padding: '24px 16px' }}>
                <div className="col-span-4 md:col-span-3">
                  <p
                    className="font-mono text-lg md:text-2xl font-bold tracking-wider"
                    style={{ color: '#ffcc00' }}
                  >
                    00:00
                  </p>
                </div>
                <div className="col-span-4 md:col-span-3">
                  <p
                    className="font-mono text-lg md:text-2xl font-bold tracking-wider"
                    style={{ color: '#ffcc00' }}
                  >
                    SB2025
                  </p>
                </div>
                <div className="col-span-4 md:col-span-3">
                  <p
                    className="font-mono text-lg md:text-2xl font-bold tracking-wider"
                    style={{ color: '#ffcc00' }}
                  >
                    SOUFIANE [SOU]
                  </p>
                </div>
                <div className="hidden md:block md:col-span-3">
                  <p
                    className="font-mono text-lg md:text-2xl font-bold tracking-wider"
                    style={{ color: '#00ff00' }}
                  >
                    BOARDING
                  </p>
                </div>
              </div>
            </div>

            {/* Message Display - LED style with extra padding */}
            <div
              className="rounded-lg"
              style={{
                padding: '48px 32px',
                margin: '32px 0',
                backgroundColor: '#000',
                border: '2px solid #1a1a1a'
              }}
            >
              <p
                className="font-mono text-base md:text-xl leading-relaxed text-center tracking-wide"
                style={{
                  color: '#ffcc00',
                  padding: '0 24px'
                }}
              >
                {message}
              </p>
            </div>

            {/* Bottom info bar */}
            <div className="flex justify-between items-center text-xs md:text-sm font-mono" style={{ color: '#444', paddingTop: '24px' }}>
              <span>GATE A17 • TERMINAL 1</span>
              <span>Dec 26, 2025</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function JetBridgeScreen({ title, message }: ThemedScreenProps) {
  return (
    <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/jet-bridge.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Night sky overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
        }}
      />

      {/* Simple message box */}
      <motion.div
        className="relative z-10 glass-dark rounded-3xl max-w-3xl mx-10 text-center"
        style={{ padding: '64px 48px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="font-display text-3xl md:text-4xl text-sky-400 tracking-wider" style={{ marginBottom: '32px' }}>{title}</h3>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed" style={{ padding: '0 32px' }}>{message}</p>
      </motion.div>
    </div>
  );
}

export function PlaneSeatScreen({ title, message }: ThemedScreenProps) {
  return (
    <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/seat.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Night sky overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
        }}
      />

      {/* Simple message box */}
      <motion.div
        className="relative z-10 glass-dark rounded-3xl max-w-3xl mx-10 text-center"
        style={{ padding: '64px 48px' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h3 className="font-display text-3xl md:text-4xl text-sky-400 tracking-wider" style={{ marginBottom: '32px' }}>{title}</h3>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed" style={{ padding: '0 32px' }}>{message}</p>
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
