# Portfolio - Kauê de Magalhães

Professional portfolio built with Next.js 16, React 19, and TypeScript.

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, TypeScript 5, Tailwind CSS 4
- **Components:** shadcn/ui (new-york style)
- **Animations:** Motion (Framer Motion fork)
- **Linting:** Biome
- **Testing:** Vitest + React Testing Library
- **Deploy:** Vercel

## Features

- Server Components optimized for performance
- Design system with shadcn/ui
- Command bar (Ctrl+K)
- Dark mode
- Responsive mobile/desktop
- Accessible (WCAG AA)

## Development

```bash
npm install
npm run dev
```

## Scripts

```bash
npm run dev      # Dev server (Turbopack)
npm run build    # Production build
npm run start    # Production server
npm run lint     # Lint + format with Biome
npm test         # Run tests (Vitest)
npm run test:ui  # Test UI
```

## Structure

```
src/
├── app/           # Pages (Server Components)
├── components/    # React components
├── constants/     # Content (jobs, works)
├── contexts/      # React contexts
├── hooks/         # Custom hooks
├── types/         # TypeScript interfaces
└── lib/           # Utilities
```

## License

MIT
