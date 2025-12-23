# Happy Birthday Soufiane - Aviation-Themed Interactive Experience

An immersive, aviation-themed birthday card experience built with React, designed for the aviation enthusiast in your life.

## Features

- **Interactive Boarding Pass**: A realistic boarding pass that serves as the entry point, complete with animated scanning effect
- **Scrollable Flight Journey**: Multiple sections with snap-scroll navigation
- **Animated Sky Effects**: Twinkling stars, drifting clouds, and planes with contrails
- **Message Cards**: Glass-morphism styled cards for your personal messages
- **Celebration Finale**: Confetti animation and glowing text for the birthday wish
- **Fully Responsive**: Works beautifully on Windows, iPad, and iPhone 12

## Customizing Your Messages

All the text content is located in `src/App.tsx` in the `MESSAGES` object at the top of the file. You can customize:

```typescript
const MESSAGES = {
  // Boarding pass details
  passengerName: 'SOUFIANE',
  flightNumber: 'BD2025',
  origin: 'TODAY',
  destination: 'FOREVER',
  date: 'DEC 2025',

  // Hero section
  heroTitle: 'Happy Birthday Soufiane',
  heroSubtitle: 'A journey through the skies, for you',

  // Message sections (add, remove, or edit these)
  sections: [
    {
      title: 'Section Title',
      message: 'Your message here...',
      icon: '✈️', // any emoji
    },
    // ... more sections
  ],

  // Final screen
  finalTitle: 'Happy Birthday',
  finalName: 'Soufiane',
  finalMessage: 'Your final message...',
  signOff: '— With all my love',
};
```

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Vercel

1. Push your changes to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the Vite configuration
6. Click "Deploy"
7. Share the generated URL with Soufiane!

## Tech Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion

## Project Structure

```
src/
├── App.tsx              # Main app with MESSAGES config
├── index.css            # Global styles and animations
├── main.tsx             # Entry point
└── components/
    ├── BoardingPass.tsx # Landing screen boarding pass
    ├── Clouds.tsx       # Animated cloud layer
    ├── Confetti.tsx     # Celebration confetti
    ├── HeroTitle.tsx    # Animated title components
    ├── MessageCard.tsx  # Glass-morphism message cards
    ├── Plane.tsx        # Animated airplane SVGs
    ├── Sections.tsx     # Section containers & UI
    └── Stars.tsx        # Twinkling starfield
```
