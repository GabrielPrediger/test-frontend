import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/(logged-in)/LoginPage/LoginPage';
import LoggedInLayout from '../layout/LoggedInLayout';
import ProtectedRoute from './ProtectedRoute';
import HomePage from '../pages/(logged-in)/HomePage/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <LoginPage />
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/dashboard',
        element: <LoggedInLayout />,
        children: [
          {
            path: 'home',
            element: <HomePage />,
          },

        ],
      },
    ],
  },
]);