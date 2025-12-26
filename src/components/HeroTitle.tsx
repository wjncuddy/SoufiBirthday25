import { motion } from 'framer-motion';

interface HeroTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function HeroTitle({ title, subtitle, className = '' }: HeroTitleProps) {
  const words = title.split(' ');

  return (
    <div className={`text-center ${className}`}>
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-4 last:mr-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word === 'BEstie' ? (
              <span className="text-sky-400">{word}</span>
            ) : (
              word
            )}
          </motion.span>
        ))}
      </h1>
      {subtitle && (
        <motion.p
          className="mt-6 text-xl md:text-2xl text-white/70 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: words.length * 0.15 + 0.3, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TypewriterText({ text, className = '', speed = 50 }: TypewriterTextProps) {
  return (
    <motion.div className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * (speed / 1000) }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface GlowTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowText({ children, className = '' }: GlowTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
    </span>
  );
}
