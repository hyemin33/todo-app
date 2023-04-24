import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@src/pages/Main';
import ErrorPage from '@src/pages/Error';
import DefaultLayout from '@src/components/templetes/ServiceWrapper';
import LoginPage from '@src/pages/Login';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      element: <DefaultLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
