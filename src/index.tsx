import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { router } from '@/router';
import { store } from '@/store/storeConfig';
import { RouterProvider } from 'react-router';

const root = document.getElementById('root');

if (!root) {
  throw new Error('No root element');
}

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
