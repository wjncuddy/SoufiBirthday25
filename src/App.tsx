import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stars,
  Clouds,
  PlaneWithTrail,
  LandingPlane,
  BoardingPass,
  Confetti,
  HeroTitle,
  GlowText,
  Section,
  ScrollIndicator,
  ProgressDots,
  JetBridgeScreen,
  PlaneSeatScreen,
  InflightMealScreen,
} from './components';

type AppState = 'boarding' | 'journey';

// =============================================================================
// CUSTOMIZE YOUR MESSAGES HERE
// =============================================================================
const MESSAGES = {
  // The passenger name on the boarding pass
  passengerName: 'SOUFIANE',

  // Flight details
  flightNumber: 'BD2025',
  origin: 'TODAY',
  destination: 'FOREVER',
  date: 'DEC 2025',

  // Hero section title (after boarding)
  heroTitle: 'Happy Birthday Soufiane',
  heroSubtitle: 'A journey through the skies, for you',

  // Themed message sections
  jetBridge: {
    title: 'Welcome Aboard',
    message: `[Your heartfelt opening message goes here. Talk about what makes Soufiane special, your first memories together, or what you love about him as an avgeek. This is placeholder text - make it your own!]`,
    icon: '✈️',
  },
  planeSeat: {
    title: 'Miles Traveled Together',
    message: `[Share memories of your journey together - trips you've taken, adventures you've had, or metaphorical miles of growing together. Placeholder text for you to personalize.]`,
    icon: '🌍',
  },
  inflightMeal: {
    title: 'Served With Love',
    message: `[Write about your future together - dreams, plans, adventures ahead. What destinations await? What's next in your flight plan? Make this yours!]`,
    icon: '💝',
  },

  // Final celebration screen
  finalTitle: 'Happy Birthday',
  finalName: 'Soufiane',
  finalMessage: `[Your final birthday wish - short and sweet. "With all my love" or something personal to your relationship.]`,
  signOff: '— With all my love',
};
// =============================================================================

function App() {
  const [appState, setAppState] = useState<AppState>('boarding');
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Total sections: hero + 3 themed screens + finale
  const totalSections = 5;

  const handleBoard = useCallback(() => {
    setAppState('journey');
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('section');
    sections[index]?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || appState !== 'journey') return;

    // Set initial section on mount
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
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Call immediately to set initial state
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
              className="text-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                Now Boarding
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white tracking-wider">
                Flight <span className="text-gold">{MESSAGES.flightNumber}</span>
              </h1>
            </motion.div>

            <BoardingPass
              onBoard={handleBoard}
              passengerName={MESSAGES.passengerName}
              flightNumber={MESSAGES.flightNumber}
              origin={MESSAGES.origin}
              destination={MESSAGES.destination}
              date={MESSAGES.date}
            />

            <PlaneWithTrail className="top-[15%]" />
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
            {/* Progress dots */}
            <ProgressDots
              total={totalSections}
              current={currentSection}
              onDotClick={scrollToSection}
            />

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

            {/* Section 2: Jet Bridge */}
            <Section className="snap-start p-0">
              <JetBridgeScreen
                title={MESSAGES.jetBridge.title}
                message={MESSAGES.jetBridge.message}
                icon={MESSAGES.jetBridge.icon}
              />
            </Section>

            {/* Section 3: Plane Seat */}
            <Section className="snap-start p-0">
              <PlaneSeatScreen
                title={MESSAGES.planeSeat.title}
                message={MESSAGES.planeSeat.message}
                icon={MESSAGES.planeSeat.icon}
              />
            </Section>

            {/* Section 4: Inflight Meal */}
            <Section className="snap-start p-0">
              <InflightMealScreen
                title={MESSAGES.inflightMeal.title}
                message={MESSAGES.inflightMeal.message}
                icon={MESSAGES.inflightMeal.icon}
              />
            </Section>

            {/* Section 5: Final Celebration */}
            <Section className="sky-gradient-night snap-start">
              <Stars count={250} />
              <Confetti active={currentSection === totalSections - 1} />
              <LandingPlane className="z-20" />

              <div className="relative z-10 text-center px-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-white/60 text-lg md:text-xl mb-4 uppercase tracking-widest">
                    {MESSAGES.finalTitle}
                  </p>
                  <h2 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 tracking-wider">
                    <GlowText>
                      <span className="text-gold">{MESSAGES.finalName}</span>
                    </GlowText>
                  </h2>
                </motion.div>

                <motion.div
                  className="max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                    {MESSAGES.finalMessage}
                  </p>
                  <p className="text-gold font-display text-2xl tracking-wider">
                    {MESSAGES.signOff}
                  </p>
                </motion.div>

                {/* Static decorative elements - no bouncing */}
                <motion.div
                  className="mt-12 flex justify-center gap-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  <span className="text-4xl">✈️</span>
                  <span className="text-4xl">💝</span>
                  <span className="text-4xl">✈️</span>
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
