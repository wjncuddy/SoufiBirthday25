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
  flightNumber = 'AB2025',
  origin = 'Love [LOV]',
  destination = 'You [YOU]',
  gate = 'A17',
  seat = '1A',
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
        className="relative bg-white rounded-[32px] shadow-2xl overflow-hidden tap-highlight cursor-pointer border border-gray-200"
        onClick={onBoard}
        whileTap={{ scale: 0.98 }}
      >
        {/* Main Ticket Container */}
        <div className="flex min-h-[320px] md:min-h-[360px]">

          {/* Rainbow Vertical Sidebar */}
          <div
            className="w-12 md:w-14 flex items-center justify-center"
            style={{
              background: 'linear-gradient(180deg, #ff6b6b 0%, #feca57 17%, #48dbfb 34%, #1dd1a1 51%, #5f27cd 68%, #ff9ff3 85%, #ff6b6b 100%)'
            }}
          >
            <p className="transform -rotate-90 whitespace-nowrap text-white font-bold tracking-widest text-[10px] md:text-xs drop-shadow-md">
              BOARDING PASS / CARTE D'EMBARQUEMENT
            </p>
          </div>

          {/* Left Main Section */}
          <div className="flex-1 p-5 md:p-7 flex flex-col justify-between relative">

            {/* Top Row: Name & Logo */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[9px] md:text-[10px] font-bold uppercase leading-none"
                   style={{ color: '#5f27cd' }}>
                  Passenger / Passager
                </p>
                <h2 className="text-xl md:text-2xl font-bold mt-1 text-gray-800 tracking-wide font-display">
                  {passengerName}
                </h2>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2">
                  <span
                    className="font-display text-lg md:text-xl tracking-wider"
                    style={{
                      background: 'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    AIR BESTIE
                  </span>
                  <div
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #ff6b6b, #5f27cd)' }}
                  >
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full" />
                  </div>
                </div>
                <p className="text-[8px] text-gray-400 mt-1">First Class / Première Classe</p>
              </div>
            </div>

            {/* Middle Row: Gate, Flight, Seat */}
            <div className="flex justify-between mt-4 md:mt-5">
              <div className="w-1/3">
                <p className="text-[9px] md:text-[10px] font-bold uppercase" style={{ color: '#1dd1a1' }}>
                  Gate / Porte
                </p>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-800">{gate}</p>
              </div>
              <div className="w-1/3">
                <p className="text-[9px] md:text-[10px] font-bold uppercase" style={{ color: '#48dbfb' }}>
                  Flight / Vol
                </p>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-800">{flightNumber}</p>
              </div>
              <div className="w-1/3">
                <p className="text-[9px] md:text-[10px] font-bold uppercase" style={{ color: '#ff6b6b' }}>
                  Seat / Place
                </p>
                <p className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-800">{seat}</p>
              </div>
            </div>

            {/* Lower Middle Row: Times */}
            <div className="flex justify-between mt-4">
              <div className="w-1/2">
                <p className="text-[9px] md:text-[10px] font-bold uppercase leading-none" style={{ color: '#feca57' }}>
                  Boarding / Embarquement
                </p>
                <p className="text-base md:text-lg font-bold text-gray-700">{boardingTime}</p>
              </div>
              <div className="w-1/2">
                <p className="text-[9px] md:text-[10px] font-bold uppercase leading-none" style={{ color: '#ff9ff3' }}>
                  Departure / Départ
                </p>
                <p className="text-base md:text-lg font-bold text-gray-700">{departureTime}</p>
              </div>
            </div>

            {/* Bottom Row: Origin/Destination & Barcode */}
            <div className="flex justify-between items-end mt-4">
              <div className="space-y-2">
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase leading-none" style={{ color: '#5f27cd' }}>
                    From / De
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-800">{origin}</p>
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase leading-none" style={{ color: '#5f27cd' }}>
                    To / Destination
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-800">{destination}</p>
                </div>
              </div>

              {/* Barcode */}
              <div className="flex flex-col items-end">
                <p className="text-[7px] md:text-[8px] text-gray-400 mb-1">
                  BESTIE USE: AB-{new Date().getFullYear()}-LOVE
                </p>
                <div className="flex gap-0.5">
                  {Array.from({ length: 35 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-800"
                      style={{
                        width: Math.random() > 0.5 ? 2 : 1,
                        height: 32,
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
          <div className="hidden md:flex w-48 border-l-2 border-dashed border-gray-300 p-4 flex-col justify-between relative bg-gray-50">
            {/* Perforated circles */}
            <div className="absolute -left-3 top-0 bottom-0 flex flex-col justify-around">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-5 h-5 bg-slate-900 rounded-full" />
              ))}
            </div>

            {/* Stub Content */}
            <div className="pl-3 space-y-3">
              <div>
                <p className="text-[8px] font-bold uppercase" style={{ color: '#5f27cd' }}>Seat</p>
                <p className="text-3xl font-bold text-gray-800">{seat}</p>
              </div>
              <div>
                <p className="text-[8px] font-bold uppercase" style={{ color: '#48dbfb' }}>Flight</p>
                <p className="text-xl font-bold text-gray-800">{flightNumber}</p>
              </div>
              <div>
                <p className="text-[8px] font-bold uppercase" style={{ color: '#1dd1a1' }}>Gate</p>
                <p className="text-xl font-bold text-gray-800">{gate}</p>
              </div>
            </div>

            {/* Vertical barcode on stub */}
            <div className="pl-3 flex gap-0.5 mt-4">
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

        {/* Tap to board button */}
        <motion.div
          className="py-4 text-center"
          style={{
            background: 'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb, #1dd1a1, #5f27cd, #ff9ff3)'
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
          <p className="font-display text-xl md:text-2xl tracking-widest text-white drop-shadow-md">
            TAP TO BOARD
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
