import { MainLayout } from '@/layouts';
import { Loan, Home } from '@/pages';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'loan', element: <Loan /> },
    ],
  },
]);
