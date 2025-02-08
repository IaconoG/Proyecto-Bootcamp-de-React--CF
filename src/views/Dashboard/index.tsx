import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../layouts/Sidebar";
import Widgets from "./components/Widgets";

// import { useEffect } from "react";
// import weatherInfo from "../../state/stores/weather/weather-info";
// import userInfo from "../../state/stores/userInfo/user-info";

const Dashboard: React.FunctionComponent = () => {
  const location = useLocation();
  const isDashboardMain: boolean = location.pathname === "/dashboard";
  // const { getUserLocation } = userInfo();
  // const { setWeatherData } = weatherInfo();

  // useEffect(() => {
  //   const userLocation = getUserLocation();
  //   // if (userLocation)
  //   //   setWeatherData(userLocation.province + " " + userLocation.city);
  // }, []);

  return (
    <>
      <Sidebar />
      <main>{isDashboardMain ? <Widgets /> : <Outlet />}</main>
    </>
  );
};

export default Dashboard;
