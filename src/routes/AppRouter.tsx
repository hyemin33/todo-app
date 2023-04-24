import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@src/pages/Main';
import ErrorPage from '@src/pages/Error';
import DefaultLayout from '@src/components/templetes/ServiceWrapper';
import SigninPage from '@src/pages/Signin';
import SignupPage from '@src/pages/Signup';

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
          path: '/signin',
          element: <SigninPage />,
        },
        {
          path: '/signup',
          element: <SignupPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
