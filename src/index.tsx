import { RouterProvider } from 'react-router';
import ReactDOM from 'react-dom/client';

import { router } from '@/router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element');
}

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
