// ** Styles **
import styles from "./Header.module.css";

// ** Components **
import SunAndMoon from "./components/SunAndMoon";
import Weather from "./components/Weather";
import Time from "./components/Time";

// ** State **
import weatherInfo from "../../../state/stores/weather/weather-info";

// ** API **
// import { startAutoRefresh, fetchForecastWeatherData } from '../../api/WeatherAPI/services/weatherService';
// import { ForecastWeatherParams } from '../../api/WeatherAPI/endpoints';

//   // Refresh the weather data every 3hours and when the component is mounted
//   // useEffect(() => {
//   //   const fetchData = () => {
//   //     const params: ForecastWeatherParams = {
//   //       localidad: userLocalidad,
//   //     };
//   //     fetchForecastWeatherData(params);
//   //   };
//   //   fetchData();
//   //   const refreshInterval = startAutoRefresh(fetchData);
//   //   return () => clearInterval(refreshInterval);
//   // }, []);

const SidebarHeader = () => {
  const { getLocation } = weatherInfo();
  const { name, region, country } = getLocation();

  return (
    <div className={styles.header}>
      <p> Header</p>
      <div className={`${styles.gradient}`}></div>

      {/* // <div className={styles.header}>
    //   <p className={styles.localidad}>{`${name}, ${region}, ${country}`}</p>
    //   <div className={styles.watherAndTime}>
    //     <Time />
    //     <Weather />
    //   </div>

    //   <SunAndMoon /> */}
    </div>
  );
};

export default SidebarHeader;
