import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../../components/Sidebar";
import Widgets from "./components/Widgets";

import styles from "./Dashboard.module.css";
import { useEffect } from "react";
import weatherInfo from "../../state/stores/weather/weather-info";
import userInfo from "../../state/stores/userInfo/user-info";

const Dashboard: React.FunctionComponent = () => {
  const location = useLocation();
  const isDashboardMain: boolean = location.pathname === "/dashboard";
  const { getUserLocation } = userInfo();
  const { setWeatherData } = weatherInfo();

  useEffect(() => {
    const userLocation = getUserLocation();
    // if (userLocation)
    //   setWeatherData(userLocation.province + " " + userLocation.city);
  }, []);

  return (
    <>
      <Sidebar />
      <main>
        <div className={styles.dashboardContent}>
          {isDashboardMain ? (
            <>
              <div className={styles.widgetsContainer}>
                <Widgets />
              </div>
            </>
          ) : (
            <div className={styles.outlet}>
              <Outlet />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
