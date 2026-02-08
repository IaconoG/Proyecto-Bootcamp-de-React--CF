import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

//* Import views
import LandingPage from "../views/LandingPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../views/Home";
import Settings from "../views/Settings";

// import Balance from '../views/Home/Balance/FullView';
// import Calendar from '../views/Home/Calendar/FullView';
// import Focus from '../views/Home/Focus/FullView';
// import InfoMicro from "../views/Home/InfoMicros/FullView";
// import ToDo from "../views/Home/ToDo/FullView";
// import Weather from '../views/Home/Weather/FullView';

import Error404 from "../views/Error404";
import ErrorBoundary from "../components/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error404 />,
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<h1>Loading with Suspense...</h1>}>
        <ErrorBoundary fallback={<div>Ha ocurrido un error al obtener el dashboard con ErrorBoundary</div>}>
          <DashboardLayout />
        </ErrorBoundary>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "balance",
        element: <h1>Balance</h1>,
      },
      {
        path: "calendar",
        element: <h1>Calendar</h1>,
      },
      {
        path: "focus",
        element: <h1>Focus</h1>,
      },
      {
        path: "info-micros",
        element: <h1>Info Micros</h1>,
      },
      {
        path: "to-do",
        element: <h1>To Do</h1>,
      },
      {
        path: "weather",
        element: <h1>Weather</h1>,
      },
    ],
  },
]);

const MyRoutes = (): JSX.Element => <RouterProvider router={router} />;

export default MyRoutes;
