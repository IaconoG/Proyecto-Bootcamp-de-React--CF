import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

//* Import views
import Home from '../views/Home';

import Auth from '../views/Auth';
import Login from '../views/Auth/Login';
import Register from '../views/Auth/Register';

import Dashboard from '../views/Dashboard';
// import Setting from '../views/Dashboard/components/Setting';
// import Balance from '../views/Dashboard/components/Balance';
// import Calendar from '../views/Dashboard/components/Calendar';
// import Focus from '../views/Dashboard/components/Focus';
// import InfoMicro from '../views/Dashboard/components/InfoMicro';
// import ToDo from '../views/Dashboard/components/ToDo';

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
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
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
        element: <h1>Settings</h1>,
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
        element: <h1>ToDo</h1>,
      },
    ],
  },
]);

const MyRoutes = (): JSX.Element => <RouterProvider router={router} />;

export default MyRoutes;
