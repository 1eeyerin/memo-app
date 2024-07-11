import { createBrowserRouter } from 'react-router-dom';
import { Home, Detail } from '@/pages';
import detailLoader from '@/pages/Detail/detailLoader';
import Layout from '@/components/Layout';
import layoutLoader from '@/components/Layout/layoutLoader';

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: layoutLoader,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
        loader: detailLoader,
      },
    ],
  },
]);

export default router;
