import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@src/pages/Main';
import ErrorPage from '@src/pages/Error';
import DefaultLayout from '@src/components/layouts';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,

      children: [
        {
          path: '/',
          element: <MainPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
