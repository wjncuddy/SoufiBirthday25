import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stars,
  Clouds,
  PlaneWithTrail,
  BoardingPass,
  MessageCard,
  Confetti,
  HeroTitle,
  GlowText,
  Section,
  ScrollIndicator,
  ProgressDots,
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

  // Message sections - customize these with your personal messages
  sections: [
    {
      title: 'First Class Passenger',
      message: `[Your heartfelt opening message goes here. Talk about what makes Soufiane special, your first memories together, or what you love about him as an avgeek. This is placeholder text - make it your own!]`,
      icon: '✈️',
    },
    {
      title: 'Miles Traveled Together',
      message: `[Share memories of your journey together - trips you've taken, adventures you've had, or metaphorical miles of growing together. Placeholder text for you to personalize.]`,
      icon: '🌍',
    },
    {
      title: 'Cleared for Takeoff',
      message: `[Write about your future together - dreams, plans, adventures ahead. What destinations await? What's next in your flight plan? Make this yours!]`,
      icon: '🛫',
    },
    {
      title: 'Final Approach',
      message: `[Your closing message - tell him why he's your person, what he means to you, and wish him the happiest birthday. This is the landing - make it smooth and memorable!]`,
      icon: '💝',
    },
  ],

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

  // Total sections: hero + message cards + finale
  const totalSections = MESSAGES.sections.length + 2;

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

    const handleScroll = () => {
      const sections = container.querySelectorAll('section');
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollTop >= sectionTop - viewportHeight / 2 &&
          scrollTop < sectionTop + sectionHeight - viewportHeight / 2
        ) {
          setCurrentSection(index);
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
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
              transition={{ delay: 0.3 }}
            >
              <p className="text-white/60 text-sm uppercase tracking-widest mb-2">
                Now Boarding
              </p>
              <h1 className="font-display text-3xl md:text-4xl text-white">
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

            {/* Message Sections */}
            {MESSAGES.sections.map((section, index) => (
              <Section
                key={index}
                className={`snap-start ${
                  index % 2 === 0 ? 'sky-gradient-sunrise' : 'sky-gradient-day'
                }`}
              >
                <Clouds count={6} />
                {index % 2 === 0 && <PlaneWithTrail className="top-[25%]" />}

                <div className="relative z-10 w-full max-w-2xl mx-auto">
                  <MessageCard
                    title={section.title}
                    message={section.message}
                    icon={<span className="text-5xl">{section.icon}</span>}
                    delay={0.2}
                  />
                </div>
              </Section>
            ))}

            {/* Final Section: Celebration */}
            <Section className="sky-gradient-night snap-start">
              <Stars count={250} />
              <Confetti active={currentSection === totalSections - 1} />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <p className="text-white/60 text-lg md:text-xl mb-4 uppercase tracking-widest">
                    {MESSAGES.finalTitle}
                  </p>
                  <h2 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8">
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
                  <p className="text-gold font-display text-xl italic">
                    {MESSAGES.signOff}
                  </p>
                </motion.div>

                {/* Animated hearts/planes */}
                <motion.div
                  className="mt-12 flex justify-center gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                >
                  {['✈️', '💝', '✈️'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      className="text-4xl"
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                      }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
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
