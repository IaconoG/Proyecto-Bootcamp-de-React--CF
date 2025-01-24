import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

//* Import views
import Home from '../views/Home';

import Settings from '../views/Settings';

import Dashboard from '../views/Dashboard';
// import Balance from '../views/Dashboard/components/Balance/FullView';
// import Calendar from '../views/Dashboard/components/Calendar/FullView';
// import Focus from '../views/Dashboard/components/Focus/FullView';
import InfoMicro from '../views/Dashboard/components/InfoMicros/FullView';
import ToDo from '../views/Dashboard/components/ToDo/FullView';
// import Weather from '../views/Dashboard/components/Weather/FullView';

import Error404 from '../views/Error404';
import ErrorBoundary from '../components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<h1>Loading with Suspense...</h1>}>
        <ErrorBoundary
          fallback={
            <div>
              Ha ocurrido un error al obtener el dashboard con ErrorBoundary
            </div>
          }
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
        element: <InfoMicro />,
      },
      {
        path: 'to-do',
        element: <ToDo />,
      },
      {
        path: 'weather',
        element: <h1>Weather</h1>,
      },
    ],
  },
]);

const MyRoutes = (): JSX.Element => <RouterProvider router={router} />;

export default MyRoutes;
