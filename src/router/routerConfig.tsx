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
            loader: applicationLoader,
            hydrateFallbackElement: <Loader />,
          },

          {
            path: ':applicationId',
            children: [
              {
                index: true,
                loader: applicationLoader,
                element: <Scoring />,
                hydrateFallbackElement: <Loader />,
              },
              {
                path: 'document',
                loader: applicationLoader,
                element: <Document />,
                hydrateFallbackElement: <Loader />,
              },
              {
                path: 'document/sign',
                loader: applicationLoader,
                element: <Sign />,
                hydrateFallbackElement: <Loader />,
              },
              {
                path: 'code',
                loader: applicationLoader,
                element: <Code />,
                hydrateFallbackElement: <Loader />,
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
