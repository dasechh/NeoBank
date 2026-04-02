# NeoBank

A web application built with React Router 7, SSR, TypeScript, and SCSS.

## Requirements

- Node.js 18+
- npm or yarn

## Installation and Setup

### Install Dependencies

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Type Checking

```bash
npm run typecheck
```

### Build for Production

```bash
npm run build
```

### Run Production Build

```bash
npm start
```

## Project Structure

```text
app/
├── pages/
│   └── home/
├── widgets/
│   ├── Header/
│   ├── Footer/
│   ├── ExchangeRates/
│   └── NewsletterSubscription/
├── shared/
│   ├── api/
│   ├── ui/
│   └── styles/
├── routes/
└── root.tsx
```

## Tech Stack

- React 19.2.4
- React Router 7.13.2
- TypeScript 5.9.3
- Vite 7.1.7
- SASS 1.98.0
- Axios 1.14.0

## Path Aliases

```bash
@shared  → app/shared
@widgets → app/widgets
@pages   → app/pages
```

## Docker

```bash
docker build -t neobank:latest .
docker run -p 3000:3000 neobank:latest
```
