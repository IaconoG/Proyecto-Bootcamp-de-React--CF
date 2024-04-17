import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Sidebar.module.css';

import userInfo from '../../state/stores/userInfo/user-info';
import { Widget, WidgetPath } from '../../state/utils/types';
import SunAndMoon from './components/SunAndMoon';
import Weather from './components/Weather';
import Time from './components/Time';
import {
  startAutoRefresh,
  fetchForecastWeatherData,
} from '../../api/WeatherAPI/services/weatherService';
import { useEffect } from 'react';
import { ForecastWeatherParams } from '../../api/WeatherAPI/endpoints';

type PathName = WidgetPath | 'settings' | '';

const RenderLinks: React.FunctionComponent = () => {
  // FIXME: Solo se debe mostrar los widgets que el usuario haya activado. obviando el settings
  const { getAddedWidgets, getAllWidgets, getUserLocalidad } = userInfo();
  const location = useLocation();
  const pathName = location.pathname as PathName; // /dashboard/etc
  const pageSelected = pathName.substring('/dashboard/'.length) as PathName;

  // Refresh the weather data every 3hours and when the component is mounted
  useEffect(() => {
    console.log('mounted Sidebar');
    const fetchData = () => {
      const params: ForecastWeatherParams = {
        localidad: getUserLocalidad(),
      };
      fetchForecastWeatherData(params);
    };
    fetchData();
    const refreshInterval = startAutoRefresh(fetchData);
    return () => clearInterval(refreshInterval);
  }, []);

  // FIXME: DETELETE getAllWidgets
  return (
    <>
      <div
        className={`${styles.linkContainer} ${!pageSelected && styles.active}`}
      >
        <Link to="/dashboard" className={styles.homeContainer}>
          MiHome
        </Link>
      </div>
      {/* FIXME: DELETE getAllWidgets */}
      {getAllWidgets().map((widget: Widget) => (
        <div
          key={widget.title}
          className={`${styles.linkContainer} ${
            pageSelected === widget.path && styles.active
          }`}
        >
          <Link to={`/dashboard/${widget.path}`}>{widget.title}</Link>
        </div>
      ))}
      {/* use this */}
      {/* {getAddedWidgets().map((widget: Widget) => (
        <div
          key={widget.title}
          className={`${styles.linkContainer} ${
            pageSelected === widget.path && styles.active
          }`}
        >
          <Link to={`/dashboard/${widget.path}`}>{widget.title}</Link>
        </div>
      ))} */}
      <div
        className={`${styles.linkContainer} ${
          pageSelected === 'settings' && styles.active
        }`}
      >
        <Link to="/dashboard/settings" className={styles.widgetSettings}>
          Settings
        </Link>
      </div>
    </>
  );
};

const Sidebar: React.FunctionComponent = () => {
  const { getUserLocalidad } = userInfo();
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        {getUserLocalidad() && (
          <>
            <Time />
            <Weather />
          </>
        )}
        <SunAndMoon />
      </div>
      <div className={`${styles.gradient}`}></div>
      <div className={styles.linksContainer}>{<RenderLinks />}</div>
    </div>
  );
};

export default Sidebar;
