import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  // route('loan', './pages/Loan'),
  // route('*', './pages/Error')
] satisfies RouteConfig;
