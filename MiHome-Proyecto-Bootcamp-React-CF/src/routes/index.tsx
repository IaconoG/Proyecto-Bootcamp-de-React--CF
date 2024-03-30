import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

//* Import views
import Home from '../views/Home';

import Auth from '../views/Auth';
import SingIn from '../views/Auth/SignIn';
import SingUp from '../views/Auth/SingUp';

import Settings from '../views/Settings';

import Dashboard from '../views/Dashboard';
// import Balance from '../views/Dashboard/components/FullView/Balance';
// import Calendar from '../views/Dashboard/components/FullView/Calendar';
// import Focus from '../views/Dashboard/components/FullView/Focus';
// import InfoMicro from '../views/Dashboard/components/FullView/InfoMicro';
import ToDo from '../views/Dashboard/components/FullView/ToDo';

import Error404 from '../views/Error404';
import ErrorBoundary from '../components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/auth',
    element: <Auth />,
    children: [
      {
        path: '',
        element: <Error404 />,
      },
      {
        path: 'sing-in',
        element: <SingIn />,
      },
      {
        path: 'sing-up',
        element: <SingUp />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<h1>Loading with Suspense...</h1>}>
        <ErrorBoundary
          fallback={<div>Ha ocurrido un error al obtener el dashboard con ErrorBoundary</div>}
        >
          <Dashboard />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path: 'balance',
        element: <h1>Balance</h1>,
      },
      {
        path: 'calendar',
        element: <h1>Calendar</h1>,
      },
      {
        path: 'focus',
        element: <h1>Focus</h1>,
      },
      {
        path: 'info-micros',
        element: <h1>InfoMicros</h1>,
      },
      {
        path: 'to-do',
        element: <ToDo />,
      },
    ],
  },
]);

const MyRoutes = (): JSX.Element => <RouterProvider router={router} />;

export default MyRoutes;
