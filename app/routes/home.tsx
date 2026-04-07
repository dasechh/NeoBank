import type { Route } from './+types/home';
import { Home } from '@pages/home';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'NeoBank' }, { name: 'description', content: 'Welcome to NeoBank website!' }];
}

export default function HomePage() {
  return <Home />;
}
