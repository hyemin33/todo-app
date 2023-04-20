import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@src/pages/Main';
import ErrorPage from '@src/pages/Error';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
