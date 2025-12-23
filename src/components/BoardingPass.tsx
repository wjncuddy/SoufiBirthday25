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
      className="w-full max-w-md mx-auto px-4"
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -100, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden tap-highlight cursor-pointer"
        onClick={onBoard}
        whileTap={{ scale: 0.98 }}
        style={{ perspective: '1000px' }}
      >
        {/* Scanning effect overlay */}
        <div className="absolute inset-0 boarding-scan pointer-events-none z-10" />

        {/* Top section - Main info */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 pb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Passenger</p>
              <p className="text-2xl font-bold tracking-wide font-display">{passengerName}</p>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Plane size={40} className="text-gold" />
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-3xl font-bold">{origin}</p>
              <p className="text-xs text-slate-400 mt-1">FROM</p>
            </div>

            <div className="flex-1 flex items-center justify-center px-4">
              <div className="flex items-center gap-2 w-full">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Plane size={24} className="text-gold" />
                </motion.div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
              </div>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold">{destination}</p>
              <p className="text-xs text-slate-400 mt-1">TO</p>
            </div>
          </div>
        </div>

        {/* Perforated line */}
        <div className="relative">
          <div className="absolute -left-3 top-1/2 w-6 h-6 bg-slate-900 rounded-full transform -translate-y-1/2" />
          <div className="absolute -right-3 top-1/2 w-6 h-6 bg-slate-900 rounded-full transform -translate-y-1/2" />
          <div className="border-t-2 border-dashed border-slate-300 mx-6" />
        </div>

        {/* Bottom section - Details */}
        <div className="bg-slate-50 p-6 pt-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Flight</p>
              <p className="font-mono text-lg font-bold text-slate-800">{flightNumber}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Date</p>
              <p className="font-mono text-lg font-bold text-slate-800">{date}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Gate</p>
              <p className="font-mono text-lg font-bold text-slate-800">LOVE</p>
            </div>
          </div>

          {/* Barcode */}
          <div className="flex justify-center gap-0.5 mb-4">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-slate-800"
                style={{
                  width: Math.random() > 0.5 ? 2 : 1,
                  height: 40,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
              />
            ))}
          </div>

          {/* Board button hint */}
          <motion.div
            className="text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <p className="text-sm text-slate-500">Tap to board</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
