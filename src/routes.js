import { Navigate, useRoutes } from 'react-router-dom';
// layouts
// eslint-disable-next-line import/no-named-as-default
import DashboardLayout from './layouts/dashboard';
// eslint-disable-next-line import/no-named-as-default
import SimpleLayout from './layouts/Simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import CartPage from './pages/CartPage';

// ----------------------------------------------------------------------

const Router = () => {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'cart', element: <CartPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to='/dashboard/app' />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to='/404' /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />,
    },
  ]);

  return routes;
};

export default Router;
