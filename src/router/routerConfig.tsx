import { Loader } from '@/components';
import { MainLayout } from '@/layouts';
import { Loan, Home, NotFound, Code, Document, Scoring, Sign } from '@/pages';
import { applicationLoader } from '@/utils';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'loan',
        children: [
          {
            index: true,
            element: <Loan />,
          },

          {
            path: ':applicationId',
            children: [
              {
                index: true,
                element: <Scoring />,
              },
              {
                path: 'document',
                loader: applicationLoader,
                element: <Document />,
                hydrateFallbackElement: <Loader />,
              },
              {
                path: 'document/sign',
                element: <Sign />,
              },
              {
                path: 'code',
                element: <Code />,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
