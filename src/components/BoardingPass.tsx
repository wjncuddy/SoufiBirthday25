import { motion } from 'framer-motion';
import { Plane } from './Plane';

interface BoardingPassProps {
  onBoard: () => void;
  passengerName?: string;
  flightNumber?: string;
  origin?: string;
  destination?: string;
  date?: string;
}

export function BoardingPass({
  onBoard,
  passengerName = 'SOUFIANE',
  flightNumber = 'BD2025',
  origin = 'TODAY',
  destination = 'FOREVER',
  date = 'DEC 2025',
}: BoardingPassProps) {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto px-6"
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -100, scale: 0.9 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden tap-highlight cursor-pointer"
        onClick={onBoard}
        whileTap={{ scale: 0.98 }}
        style={{ perspective: '1000px' }}
      >
        {/* Scanning effect overlay */}
        <div className="absolute inset-0 boarding-scan pointer-events-none z-10" />

        {/* Top section - Main info */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-8 pb-10">
          {/* Airline header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Passenger</p>
              <p className="text-3xl tracking-widest font-display">{passengerName}</p>
            </div>
            <div className="text-right">
              <p className="font-display text-xl tracking-wider text-gold">BESTIE AIRLINES</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider mt-1">First Class</p>
            </div>
          </div>

          {/* Route */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-center">
              <p className="text-4xl font-display tracking-wider">{origin}</p>
              <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">From</p>
            </div>

            <div className="flex-1 flex items-center justify-center px-6">
              <div className="flex items-center gap-3 w-full">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/60 to-gold/60" />
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Plane size={28} className="text-gold rotate-90" />
                </motion.div>
                <div className="h-px flex-1 bg-gradient-to-r from-gold/60 via-gold/60 to-transparent" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-4xl font-display tracking-wider">{destination}</p>
              <p className="text-xs text-slate-400 mt-2 uppercase tracking-widest">To</p>
            </div>
          </div>
        </div>

        {/* Perforated line */}
        <div className="relative py-1">
          <div className="absolute -left-4 top-1/2 w-8 h-8 bg-slate-900 rounded-full transform -translate-y-1/2" />
          <div className="absolute -right-4 top-1/2 w-8 h-8 bg-slate-900 rounded-full transform -translate-y-1/2" />
          <div className="border-t-2 border-dashed border-slate-300 mx-8" />
        </div>

        {/* Bottom section - Details */}
        <div className="bg-slate-50 px-8 py-6">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Flight</p>
              <p className="font-mono text-xl font-bold text-slate-800">{flightNumber}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Date</p>
              <p className="font-mono text-xl font-bold text-slate-800">{date}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Gate</p>
              <p className="font-mono text-xl font-bold text-slate-800">LOVE</p>
            </div>
          </div>

          {/* Barcode */}
          <div className="flex justify-center gap-0.5 mb-6">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-slate-800"
                style={{
                  width: Math.random() > 0.5 ? 2 : 1,
                  height: 50,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
              />
            ))}
          </div>

          {/* Board button */}
          <motion.div
            className="bg-gold text-slate-900 rounded-xl py-4 px-6 text-center"
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(212, 175, 55, 0)',
                '0 0 0 8px rgba(212, 175, 55, 0.3)',
                '0 0 0 0 rgba(212, 175, 55, 0)',
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="font-display text-2xl tracking-widest">TAP TO BOARD</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
