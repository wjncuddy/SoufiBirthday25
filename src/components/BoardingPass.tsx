import { motion } from 'framer-motion';

interface BoardingPassProps {
  onBoard: () => void;
  passengerName?: string;
  flightNumber?: string;
  origin?: string;
  destination?: string;
  date?: string;
  gate?: string;
  seat?: string;
  boardingTime?: string;
  departureTime?: string;
}

export function BoardingPass({
  onBoard,
  passengerName = 'SOUFIANE',
  flightNumber = 'SB2025',
  origin = 'Love [LOV]',
  destination = 'You [YOU]',
  gate = 'A17',
  seat = '26K',
  boardingTime = 'Now',
  departureTime = 'Forever',
}: BoardingPassProps) {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -100, scale: 0.9 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <motion.div
        className="relative bg-white rounded-[24px] shadow-2xl overflow-hidden tap-highlight cursor-pointer border border-gray-200"
        onClick={onBoard}
        whileTap={{ scale: 0.98 }}
      >
        {/* Main Ticket Container */}
        <div className="flex min-h-[360px] md:min-h-[400px]">

          {/* Rainbow Vertical Sidebar - discrete colors */}
          <div
            className="w-12 md:w-14 flex items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, #ff6b6b 0% 14.28%, #feca57 14.28% 28.56%, #48dbfb 28.56% 42.84%, #1dd1a1 42.84% 57.12%, #5f27cd 57.12% 71.4%, #ff9ff3 71.4% 85.68%, #ff6b6b 85.68% 100%)'
            }}
          >
            <p className="transform -rotate-90 whitespace-nowrap text-white font-bold tracking-widest text-[10px] md:text-s">
              BOARDING PASS / CARTE D'EMBARQUEMENT
            </p>
          </div>

          {/* Left Main Section */}
          <div className="flex-1 p-6 md:p-9 flex flex-col justify-between relative">

            {/* Top Row: Name & Logo */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-[11px] md:text-xs font-bold uppercase leading-none mb-1"
                   style={{ color: '#5f27cd' }}>
                  Passenger / Passager
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide font-display">
                  {passengerName}
                </h2>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <span
                    className="font-display text-xl md:text-2xl tracking-wider"
                    style={{
                      background: 'linear-gradient(90deg, #ff6b6b 0% 20%, #feca57 20% 40%, #48dbfb 40% 60%, #1dd1a1 60% 80%, #5f27cd 80% 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    AIR BESTIE
                  </span>
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #ff6b6b 0% 50%, #5f27cd 50% 100%)' }}
                  >
                    <div className="w-3 h-3 md:w-3.5 md:h-3.5 bg-white rounded-full" />
                  </div>
                </div>
                <p className="text-[9px] md:text-[10px] text-gray-400 mt-1">First Class / Première Classe</p>
              </div>
            </div>

            {/* Middle Row: Gate, Flight, Seat */}
            <div className="flex justify-between my-5 md:my-6">
              <div className="w-1/3">
                <p className="text-xs md:text-sm font-bold uppercase mb-1" style={{ color: '#1dd1a1' }}>
                  Gate / Porte
                </p>
                <p className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-800">{gate}</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs md:text-sm font-bold uppercase mb-1" style={{ color: '#48dbfb' }}>
                  Flight / Vol
                </p>
                <p className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-800">{flightNumber}</p>
              </div>
              <div className="w-1/3">
                <p className="text-xs md:text-sm font-bold uppercase mb-1" style={{ color: '#ff6b6b' }}>
                  Seat / Place
                </p>
                <p className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-800">{seat}</p>
              </div>
            </div>

            {/* Lower Middle Row: Times */}
            <div className="flex justify-between my-4 md:my-5">
              <div className="w-1/2 pr-2">
                <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-1" style={{ color: '#feca57' }}>
                  Boarding / Embarquement
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-700">{boardingTime}</p>
              </div>
              <div className="w-1/2 pl-2">
                <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-1" style={{ color: '#ff9ff3' }}>
                  Departure / Départ
                </p>
                <p className="text-lg md:text-xl font-bold text-gray-700">{departureTime}</p>
              </div>
            </div>

            {/* Bottom Row: Origin/Destination & Barcode */}
            <div className="flex justify-between items-end">
              <div className="space-y-3 flex-1">
                <div>
                  <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-1" style={{ color: '#5f27cd' }}>
                    From / De
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">{origin}</p>
                </div>
                <div>
                  <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-1" style={{ color: '#5f27cd' }}>
                    To / Destination
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-gray-800">{destination}</p>
                </div>
              </div>

              {/* Barcode - moved more to left */}
              <div className="flex flex-col items-end ml-4">
                <p className="text-[8px] md:text-[9px] text-gray-400 mb-1">
                  BESTIE USE: AB-{new Date().getFullYear()}-LOVE
                </p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 35 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800"
                      style={{
                        width: Math.random() > 0.5 ? 2 : 1,
                        height: 36,
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: i * 0.02, duration: 0.3 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Perforated Stub */}
          <div className="hidden md:flex w-52 border-l-2 border-dashed border-gray-300 p-4 flex-col justify-between relative bg-gray-50">
            {/* Perforated circles - smaller, lighter, more */}
            <div className="absolute -left-2 top-0 bottom-0 flex flex-col justify-around">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="w-3 h-3 bg-gray-300 rounded-full" />
              ))}
            </div>

            {/* Stub Content - pushed further right */}
            <div className="pl-6 space-y-4">
              <div>
                <p className="text-[10px] font-bold uppercase mb-1" style={{ color: '#5f27cd' }}>Seat</p>
                <p className="text-4xl font-bold text-gray-800">{seat}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase mb-1" style={{ color: '#48dbfb' }}>Flight</p>
                <p className="text-2xl font-bold text-gray-800">{flightNumber}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase mb-1" style={{ color: '#1dd1a1' }}>Gate</p>
                <p className="text-2xl font-bold text-gray-800">{gate}</p>
              </div>
            </div>

            {/* Vertical barcode on stub */}
            <div className="pl-6 flex gap-0.5 mt-4">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-600"
                  style={{
                    width: Math.random() > 0.5 ? 2 : 1,
                    height: 40,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tap to board button - discrete colors */}
        <motion.div
          className="py-5 text-center"
          style={{
            background: 'linear-gradient(90deg, #ff6b6b 0% 16.67%, #feca57 16.67% 33.33%, #48dbfb 33.33% 50%, #1dd1a1 50% 66.67%, #5f27cd 66.67% 83.33%, #ff9ff3 83.33% 100%)'
          }}
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(255, 107, 107, 0)',
              '0 0 20px 5px rgba(255, 107, 107, 0.3)',
              '0 0 0 0 rgba(255, 107, 107, 0)',
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="font-display text-2xl md:text-3xl tracking-widest text-white drop-shadow-md">
            TAP TO BOARD
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
