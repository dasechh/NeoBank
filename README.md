# NeoBank

A modern banking web application built with React, TypeScript, and Vite. NeoBank provides users with a seamless interface for financial services including currency exchange rates, newsletter subscriptions, and comprehensive banking features.

## Requirements

- Node.js 18+
- npm

## Quick Start

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/              # Reusable UI components
│   ├── Button/             # Button component
│   ├── Header/             # Header navigation
│   ├── Footer/             # Footer section
│   ├── ExchangeRates/       # Currency exchange display
│   ├── NewsletterSubscription/
│   ├── ProvidingFeatures/   # Features showcase
│   ├── ServiceMap/          # Service locations map
│   ├── CardDesignPromo/     # Promotional cards
│   ├── Support/             # Support section
│   └── Spinner/             # Loading spinner
├── layouts/                 # Layout components
│   └── MainLayout.tsx       # Main app layout
├── pages/                   # Page components
│   └── Home/                # Home page
├── services/                # API services
│   └── fetchCurrencies.ts   # Currency data fetching
├── styles/                  # Global styles
│   └── _variables.scss      # SCSS variables
├── config.ts                # Configuration
├── index.tsx                # App entry point
└── index.css                # Global styles
```

## Tech Stack

- **React** 19.2.5 - UI library
- **React Router** 7.14.0 - Client-side routing
- **TypeScript** 6.0.2 - Type safety
- **Vite** 8.0.8 - Build tool and dev server
- **SASS** 1.98.0 - CSS preprocessing
- **Axios** 1.14.0 - HTTP client
- **Prettier** 3.8.1 - Code formatter

## Key Features

- 🏦 Modern banking interface
- 💱 Real-time currency exchange rates
- 📧 Newsletter subscription
- 🎨 Responsive design with SCSS modules
- ⚡ Fast development with Vite
- 🔒 TypeScript for type safety
- 🎯 Component-based architecture

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
