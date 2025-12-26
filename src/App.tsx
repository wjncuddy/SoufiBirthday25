import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stars,
  Clouds,
  PlaneWithTrail,
  BoardingPass,
  Confetti,
  HeroTitle,
  Section,
  ScrollIndicator,
  GateScreen,
  JetBridgeScreen,
  PlaneSeatScreen,
} from './components';

type AppState = 'boarding' | 'journey';

// =============================================================================
// CUSTOMIZE YOUR MESSAGES HERE
// =============================================================================
const MESSAGES = {
  // The passenger name on the boarding pass
  passengerName: 'SOUFIANE BOUKHABRINE',

  // Flight details (shown on boarding pass)
  flightNumber: 'SB2025',
  origin: 'Love [LOV]',
  destination: 'Soufiane [SOU]',
  gateNumber: 'A17',
  seat: '26K',
  boardingTime: 'Forever & Always 💕',
  departureTime: 'December 26 at 12:00am',

  // Hero section title (after boarding)
  heroTitle: 'Happy    Birthday    Bestie',
  heroSubtitle: 'A journey through the skies, for you',

  // Themed message sections (Gate → Jet Bridge → Seat)
  gateScreen: {
    title: 'At the gate!',
    message: `Every birthday is a new destination. I'm so grateful that I've been with you for 4 of them. I'm so happy I got to capture those memories with you and I want you to know just how much you mean to me. I wish you all the happiness in the world and all around it!! We're going to have so many more adventures together. It's boarding time!`,
    icon: '',
  },
  jetBridge: {
    title: 'On the jet bridge',
    message: `Have I got my phone? Did I fill my water? Do I have my boarding pass and my ID? Yes, yes, and yes. These are all the things you remind me of exactly when I need to hear them. Thank you for being my rock and the wind beneath my wings. I am so much better as a person because of everything YOU have done for me, and I'm always here to do the same for you.`,
    icon: '',
  },
  planeSeat: {
    title: 'Ready for takeoff!',
    message: `This is the year of our success, a year of transitions and change, where we will become unshackled from employers and middling economic status! Here's to you bestie and the guaranteed millions we will make together!`,
    icon: '',
  },

  // Final celebration screen
  finalTitle: 'Happy Birthday',
  finalName: 'Soufiane',
  finalMessage: `Your Christmas and Birthday presents are coming home with me to Calgary soon! We're going to have the best ever celebration for you bestie :)`,
  signOff: 'from your co-pilot, William 💖',
};
// =============================================================================

function App() {
  const [appState, setAppState] = useState<AppState>('boarding');
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Total sections: hero + 3 themed screens + finale
  const totalSections = 5;

  const handleBoard = useCallback(() => {
    setAppState('journey');
  }, []);

  // Track current section for video autoplay
  useEffect(() => {
    const container = containerRef.current;
    if (!container || appState !== 'journey') return;

    setCurrentSection(0);

    const handleScroll = () => {
      const sections = container.querySelectorAll('section');
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;

      let newSection = 0;
      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollTop >= sectionTop - viewportHeight / 2 &&
          scrollTop < sectionTop + sectionHeight - viewportHeight / 2
        ) {
          newSection = index;
        }
      });
      setCurrentSection(newSection);

      // Try to play video when on final section
      if (newSection === 4 && videoRef.current) {
        videoRef.current.play().catch(() => {
          // Autoplay blocked, that's okay
        });
      }
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => container.removeEventListener('scroll', handleScroll);
  }, [appState]);

  return (
    <div className="w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {appState === 'boarding' && (
          <motion.div
            key="boarding"
            className="w-full h-full sky-gradient-night flex flex-col items-center justify-center relative safe-area-inset"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Stars count={150} />
            <Clouds count={4} className="opacity-30" />

            {/* Title above boarding pass */}
            <motion.div
              className="text-center mb-6 md:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                Now Boarding
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wider">
                Flight <span className="text-sky-400">{MESSAGES.flightNumber}</span>
              </h1>
            </motion.div>

            <BoardingPass
              onBoard={handleBoard}
              passengerName={MESSAGES.passengerName}
              flightNumber={MESSAGES.flightNumber}
              origin={MESSAGES.origin}
              destination={MESSAGES.destination}
              gate={MESSAGES.gateNumber}
              seat={MESSAGES.seat}
              boardingTime={MESSAGES.boardingTime}
              departureTime={MESSAGES.departureTime}
            />

            <PlaneWithTrail className="top-[12%]" />
          </motion.div>
        )}

        {appState === 'journey' && (
          <motion.div
            key="journey"
            ref={containerRef}
            className="w-full h-full overflow-y-auto snap-y snap-mandatory hide-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section 1: Hero */}
            <Section className="sky-gradient-night snap-start">
              <Stars count={200} />
              <Clouds count={5} className="opacity-20" />
              <PlaneWithTrail className="top-[20%]" />

              <div className="relative z-10">
                <HeroTitle
                  title={MESSAGES.heroTitle}
                  subtitle={MESSAGES.heroSubtitle}
                />
              </div>

              <ScrollIndicator />
            </Section>

            {/* Section 2: Gate */}
            <Section className="snap-start p-0">
              <GateScreen
                title={MESSAGES.gateScreen.title}
                message={MESSAGES.gateScreen.message}
                icon={MESSAGES.gateScreen.icon}
              />
            </Section>

            {/* Section 3: Jet Bridge */}
            <Section className="snap-start p-0">
              <JetBridgeScreen
                title={MESSAGES.jetBridge.title}
                message={MESSAGES.jetBridge.message}
                icon={MESSAGES.jetBridge.icon}
              />
            </Section>

            {/* Section 4: Plane Seat */}
            <Section className="snap-start p-0">
              <PlaneSeatScreen
                title={MESSAGES.planeSeat.title}
                message={MESSAGES.planeSeat.message}
                icon={MESSAGES.planeSeat.icon}
              />
            </Section>

            {/* Section 5: Final Celebration with Takeoff */}
            <Section className="snap-start p-0">
              <div className="absolute w-full h-full flex items-center justify-center overflow-hidden">
                {/* Background video */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onCanPlay={(e) => {
                    const video = e.currentTarget;
                    video.play().catch(() => {});
                  }}
                >
                  <source src="/images/takeoff.mp4" type="video/mp4" />
                </video>

                {/* Night sky overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(30, 41, 59, 0.7) 50%, rgba(51, 65, 85, 0.65) 100%)'
                  }}
                />

                <Confetti active={currentSection === totalSections - 1} />

                {/* Content card */}
                <motion.div
                  className="relative z-10 glass-dark rounded-3xl max-w-3xl mx-10 text-center"
                  style={{ padding: '64px 48px' }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="text-white/60 text-lg md:text-xl mb-4 uppercase tracking-widest">
                      {MESSAGES.finalTitle}
                    </p>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 tracking-wider">
                      <span className="text-sky-400">{MESSAGES.finalName}</span>
                    </h2>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
                      {MESSAGES.finalMessage}
                    </p>
                    <p className="text-sky-400 font-display text-xl md:text-2xl tracking-wider">
                      {MESSAGES.signOff}
                    </p>
                  </motion.div>

                  {/* Static decorative elements */}
                  <motion.div
                    className="mt-8 flex justify-center gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-4xl">✈️</span>
                    <span className="text-4xl">💝</span>
                    <span className="text-4xl">✈️</span>
                  </motion.div>
                </motion.div>
              </div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
