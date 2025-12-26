import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

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
  const [isRipping, setIsRipping] = useState(false);
  const mainControls = useAnimation();
  const stubControls = useAnimation();

  const handleClick = async () => {
    if (isRipping) return;
    setIsRipping(true);

    // Animate both pieces separating
    await Promise.all([
      mainControls.start({
        x: -20,
        transition: { duration: 0.5, ease: 'easeOut' }
      }),
      stubControls.start({
        x: 80,
        rotate: 8,
        transition: { duration: 0.6, ease: 'easeOut' }
      })
    ]);

    // Then trigger the boarding
    setTimeout(() => {
      onBoard();
    }, 200);
  };

  return (
    <motion.div
      className="w-full mx-auto px-4"
      style={{ maxWidth: '1100px' }}
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -100, scale: 0.9 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* Two-piece boarding pass container */}
      <div className="flex cursor-pointer" onClick={handleClick}>

        {/* Main Pass Section */}
        <motion.div
          className="relative bg-white shadow-2xl overflow-hidden tap-highlight border border-gray-200 flex-1"
          style={{
            borderTopLeftRadius: '24px',
            borderBottomLeftRadius: '24px',
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0',
            borderRight: 'none'
          }}
          animate={mainControls}
          whileTap={{ scale: 0.99 }}
        >
          {/* Perforated edge on right side */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[2px]"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 8px, transparent 8px, transparent 16px)',
            }}
          />

          <div className="flex min-h-[360px] md:min-h-[400px]">
            {/* Rainbow Vertical Sidebar */}
            <div
              className="w-12 md:w-14 flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, #ff6b6b 0% 14.28%, #feca57 14.28% 28.56%, #48dbfb 28.56% 42.84%, #1dd1a1 42.84% 57.12%, #5f27cd 57.12% 71.4%, #ff9ff3 71.4% 85.68%, #ff6b6b 85.68% 100%)',
                borderTopLeftRadius: '24px',
                borderBottomLeftRadius: '24px',
              }}
            >
              <p className="transform -rotate-90 whitespace-nowrap text-white font-bold tracking-widest text-[10px] md:text-s">
                BOARDING PASS / CARTE D'EMBARQUEMENT
              </p>
            </div>

            {/* Main Content Section */}
            <div className="flex-1 flex flex-col gap-8 relative" style={{ padding: '48px' }}>
              {/* Top Row: Name & Logo */}
              <div className="flex justify-between items-start py-4">
                <div className="pr-6">
                  <p className="text-[11px] md:text-xs font-bold uppercase leading-none mb-6 px-2 py-1"
                     style={{ color: '#5f27cd' }}>
                    Passenger / Passager
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide font-display px-2">
                    {passengerName}
                  </h2>
                </div>
                <div className="flex flex-col items-end pl-6">
                  <div className="flex items-center gap-2 px-2">
                    <span className="font-display text-xl md:text-2xl tracking-wider text-gray-700">
                      AIR BESTIE
                    </span>
                    <svg
                      className="w-7 h-7 md:w-8 md:h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="rainbowPlane" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff6b6b" />
                          <stop offset="20%" stopColor="#feca57" />
                          <stop offset="40%" stopColor="#48dbfb" />
                          <stop offset="60%" stopColor="#1dd1a1" />
                          <stop offset="80%" stopColor="#5f27cd" />
                          <stop offset="100%" stopColor="#ff9ff3" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
                        fill="url(#rainbowPlane)"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 1: Gate, Flight, Seat */}
              <div className="flex justify-between gap-10 py-4">
                <div className="flex-1 px-3">
                  <p className="text-xs md:text-sm font-bold uppercase mb-6 py-1" style={{ color: '#1dd1a1' }}>
                    Gate / Porte
                  </p>
                  <p className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-800 py-2">{gate}</p>
                </div>
                <div className="flex-1 px-3">
                  <p className="text-xs md:text-sm font-bold uppercase mb-6 py-1" style={{ color: '#48dbfb' }}>
                    Flight / Vol
                  </p>
                  <p className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-800 py-2">{flightNumber}</p>
                </div>
                <div className="flex-1 px-3">
                  <p className="text-xs md:text-sm font-bold uppercase mb-6 py-1" style={{ color: '#ff6b6b' }}>
                    Seat / Place
                  </p>
                  <p className="text-5xl md:text-6xl font-bold tracking-tighter text-gray-800 py-2">{seat}</p>
                </div>
              </div>

              {/* Row 2: Boarding, Departure, Class */}
              <div className="flex justify-between gap-10 py-4">
                <div className="flex-1 px-3">
                  <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-6 py-1" style={{ color: '#feca57' }}>
                    Boarding / Embarquement
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-700 py-1">{boardingTime}</p>
                </div>
                <div className="flex-1 px-3">
                  <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-6 py-1" style={{ color: '#ff9ff3' }}>
                    Departure / Départ
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-700 py-1">{departureTime}</p>
                </div>
                <div className="flex-1 px-3">
                  <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-6 py-1" style={{ color: '#9b59b6' }}>
                    Class / Classe
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-700 py-1">ECONOMY</p>
                </div>
              </div>

              {/* Row 3: From, To, Barcode */}
              <div className="flex justify-between items-start gap-10 py-4">
                <div className="flex-1 px-3 space-y-8">
                  <div className="py-2">
                    <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-6 py-1" style={{ color: '#5f27cd' }}>
                      With / Avec
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-gray-800 py-1">{origin}</p>
                  </div>
                  <div className="py-2">
                    <p className="text-[11px] md:text-xs font-bold uppercase leading-tight mb-6 py-1" style={{ color: '#5f27cd' }}>
                      To / Destination
                    </p>
                    <p className="text-xl md:text-2xl font-bold text-gray-800 py-1">{destination}</p>
                  </div>
                </div>

                <div className="flex-1 px-3"></div>

                <div className="flex flex-col items-start flex-1 px-3 py-2">
                  <p className="text-[9px] md:text-[10px] text-gray-400 mb-5 py-1">
                    BESTIE USE: AB-{new Date().getFullYear()}-LOVE
                  </p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-gray-800"
                        style={{
                          width: Math.random() > 0.5 ? 3 : 2,
                          height: 80,
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
          </div>
        </motion.div>

        {/* Stub Section */}
        <motion.div
          className="hidden md:flex w-52 bg-gray-50 shadow-2xl border border-gray-200 flex-col justify-center items-center relative"
          style={{
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
            borderTopRightRadius: '24px',
            borderBottomRightRadius: '24px',
            borderLeft: 'none'
          }}
          animate={stubControls}
        >
          {/* Perforated edge on left side */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[2px]"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 8px, transparent 8px, transparent 16px)',
            }}
          />

          {/* Stub Content - Rotated */}
          <div className="transform -rotate-90 origin-center whitespace-nowrap">
            <div className="flex gap-16">
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] font-bold uppercase mb-3" style={{ color: '#5f27cd' }}>Name / Nom</p>
                  <p className="text-xl font-bold text-gray-800">{passengerName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase mb-3" style={{ color: '#48dbfb' }}>Flight / Vol</p>
                  <p className="text-2xl font-bold text-gray-800">{flightNumber}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase mb-3" style={{ color: '#5f27cd' }}>With / Avec</p>
                  <p className="text-lg font-bold text-gray-800">{origin}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase mb-3" style={{ color: '#5f27cd' }}>To / Destination</p>
                  <p className="text-lg font-bold text-gray-800">{destination}</p>
                </div>
              </div>

              <div className="space-y-5 flex flex-col items-start">
                <div className="flex gap-0.5">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gray-800"
                      style={{
                        width: Math.random() > 0.5 ? 2 : 1,
                        height: 30,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase mb-3" style={{ color: '#ff6b6b' }}>Seat / Place</p>
                  <p className="text-2xl font-bold text-gray-800">{seat}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tap instruction */}
      <motion.p
        className="text-white/80 text-lg md:text-xl font-light tracking-wide text-center mt-10 cursor-pointer hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={isRipping ? { opacity: 0 } : { opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={handleClick}
      >
        Tear your boarding pass to begin!
      </motion.p>
    </motion.div>
  );
}
