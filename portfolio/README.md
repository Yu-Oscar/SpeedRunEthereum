# Speedrun Ethereum - Landing Page

A retro 8-bit pixel-art styled Next.js 14 website showcasing Ethereum development challenges.

## 🎮 Features

- **Retro 8-bit Theme**: Deep teal background with bright pastel accent colors (sky blue, purple, yellow, mint green)
- **Arcade Typography**: Press Start 2P for headings and Orbitron for secondary text
- **Hero Section**: Animated running character with smooth scroll navigation
- **Quest Timeline**: Vertical timeline of challenges with difficulty badges and links
- **Onboarding Batches**: Yellow section with train animation and cohort information
- **Footer**: ETH Tech Tree and Capture The Flag tiles
- **Responsive Design**: Mobile-first approach with full desktop support
- **Smooth Animations**: Retro hover effects, bouncing elements, and glowing text

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
cd landing
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
landing/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page (loads challenges from JSON)
├── components/
│   ├── Hero.tsx         # Hero section with title and animation
│   ├── Timeline.tsx     # Quest timeline with challenge cards
│   ├── OnboardingBatches.tsx  # Batches section with train animation
│   └── Footer.tsx       # Footer with tiles
├── public/
│   └── challenges.json  # Challenge data source
├── tailwind.config.ts   # Tailwind CSS configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies
```

## 🎨 Color Palette

- **Deep Teal**: `#007B7F` - Primary color
- **Sky Blue**: `#7DE0E6` - Light accent
- **Pastel Purple**: `#C9B6FF` - Secondary accent
- **Bright Yellow**: `#FFD65A` - Highlight accent
- **Mint Green**: `#9FFFCB` - Tertiary accent
- **White**: Text and borders

## 📊 Challenge Data

Challenges are loaded from `public/challenges.json`. Each challenge object includes:

```json
{
  "id": 0,
  "title": "Challenge Title",
  "description": "Brief description",
  "image": "emoji",
  "liveWebsite": "https://...",
  "code": "https://github.com/...",
  "contract": "0x...",
  "difficulty": "Easy|Medium|Hard"
}
```

The timeline automatically renders all challenges with proper difficulty coloring and links.

## 🎯 Customization

### Update Challenges
Edit `public/challenges.json` to add, remove, or update challenges. The Timeline component will automatically render them.

### Change Colors
Modify the color values in `tailwind.config.ts` and `app/globals.css`.

### Update Fonts
Change `'Press Start 2P'` and `'Orbitron'` in `tailwind.config.ts` or import different fonts from Google Fonts.

### Modify Animations
Adjust keyframes and animation speeds in `app/globals.css` and `tailwind.config.ts`.

## 🔧 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Press Start 2P (headings), Orbitron (secondary), Google Fonts
- **Animation**: CSS keyframes and Tailwind utilities

## 📱 Responsive Breakpoints

- **Mobile**: Default styles
- **Tablet**: `md` breakpoints (768px)
- **Desktop**: `lg` breakpoints (1024px)

## 🚀 Deployment

This site can be deployed on:
- **Vercel**: Default Next.js hosting
- **Netlify**: Configure with Next.js build settings
- **GitHub Pages**: Static export with `next export`

### Deploy to Vercel

```bash
npm run build
vercel
```

## 📝 Adding New Challenges

1. Update `public/challenges.json` with the new challenge
2. The Timeline component will automatically display it

Example:
```json
{
  "id": 5,
  "title": "Challenge 5: Advanced DeFi",
  "description": "Create complex DeFi protocols with multiple features.",
  "image": "💎",
  "liveWebsite": "https://...",
  "code": "https://...",
  "contract": "0x...",
  "difficulty": "Hard"
}
```

## 🎮 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of the Speedrun Ethereum series. Check the root repository for license information.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

Made with retro vibes and Ethereum passion 🎮⚡
