import { Loader } from '@/components';
import { MainLayout } from '@/layouts';
import { Loan, Home, NotFound } from '@/pages';
import { Code } from '@/pages/Code';
import { Document } from '@/pages/Document';
import { Scoring } from '@/pages/Scoring';
import { Sign } from '@/pages/Sign';

import { applicationLoader } from '@/utils/applicationLoader';
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
