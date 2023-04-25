import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '@src/pages/Main';
import ErrorPage from '@src/pages/Error';
import DefaultLayout from '@src/components/templetes/ServiceWrapper';
import SigninPage from '@src/pages/Signin';
import SignupPage from '@src/pages/Signup';
import TodoPage from '@src/pages/Todo';

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
        {
          path: '/todo',
          element: <TodoPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
