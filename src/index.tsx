import { createBrowserRouter, RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { Layout } from './layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element');
}

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
