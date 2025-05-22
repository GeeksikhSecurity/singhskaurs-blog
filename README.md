# GeekSikhSecurity Interactive Blog

An interactive platform connecting Sikh principles with modern mindset techniques, built with React and TypeScript.

## Features

- Interactive mindset journeys
- Progress tracking and gamification
- Responsive design
- TypeScript support
- Modern React practices with hooks

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide Icons

## Getting Started

```bash
# Clone the repository
git clone https://github.com/GeeksikhSecurity/singhskaurs-blog.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React context providers
├── data/          # Data and content
│   └── journeys/  # Journey definitions
├── pages/         # Route components
├── types/         # TypeScript type definitions
└── utils/         # Helper functions
```

## Adding New Journeys

1. Create a new journey file in `src/data/journeys/`
2. Define the journey following the Journey type
3. Add to the journeys array in `src/data/journeys/index.ts`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT