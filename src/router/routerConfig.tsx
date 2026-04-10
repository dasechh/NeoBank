import { Home } from '@/pages';
import { MainLayout } from '@/layouts';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <Home /> }],
  },
]);
