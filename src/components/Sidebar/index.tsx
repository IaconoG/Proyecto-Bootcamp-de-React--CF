import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Sidebar.module.css';
import Header from './Header';

import userInfo from '../../state/stores/userInfo/user-info';
import { Widget, WidgetPath } from '../../state/utils/types';
// import SunAndMoon from './components/SunAndMoon';
// import Weather from './components/Weather';
// import Time from './components/Time';
import { Icon } from '../icons/Icon';
import { startAutoRefresh, fetchForecastWeatherData } from '../../api/WeatherAPI/services/weatherService';
import { useEffect } from 'react';
import { ForecastWeatherParams } from '../../api/WeatherAPI/endpoints';

type PathName = WidgetPath | 'settings' | '';

const RenderLinks: React.FunctionComponent<{ userLocalidad: string }> = ({ userLocalidad }) => {
  // FIXME: Solo se debe mostrar los widgets que el usuario haya activado. obviando el settings
  const { getAddedWidgets, getAllWidgets, getUserLocation } = userInfo();
  const location = useLocation();
  const pathName = location.pathname as PathName; // /dashboard/etc
  const pageSelected = pathName.substring('/dashboard/'.length) as PathName;

  // Refresh the weather data every 3hours and when the component is mounted
  // useEffect(() => {
  //   const fetchData = () => {
  //     const params: ForecastWeatherParams = {
  //       localidad: userLocalidad,
  //     };
  //     fetchForecastWeatherData(params);
  //   };
  //   fetchData();
  //   const refreshInterval = startAutoRefresh(fetchData);
  //   return () => clearInterval(refreshInterval);
  // }, []);

  // FIXME: DETELETE getAllWidgets
  return (
    <>
      <div className={`${styles.linkContainer} ${!pageSelected && styles.active}`}>
        <Link to="/dashboard" className={styles.homeContainer}>
          <Icon icon="Home" width={24} height={24} />
          MiHome
        </Link>
      </div>
      {/* FIXME: DELETE getAllWidgets */}
      {getAllWidgets().map((widget: Widget) => (
        <div
          key={widget.title}
          className={`${styles.linkContainer} ${pageSelected === widget.path && styles.active}`}
        >
          <Link to={`/dashboard/${widget.path}`}>
            <Icon icon="NoneIcon" width={24} height={24} />
            {widget.title}
          </Link>
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
      <div className={`${styles.linkContainer} ${pageSelected === 'settings' && styles.active}`}>
        <Link to="/dashboard/settings" className={styles.widgetSettings}>
          <Icon icon="Settings" width={24} height={24} />
          <span>Settings</span>
        </Link>
      </div>
    </>
  );
};

const Sidebar: React.FunctionComponent = () => {
  const { getUserLocation } = userInfo();
  const userLocalidad = getUserLocation();

  return (
    <div className={styles.sidebar}>
      {userLocalidad && (
        <>
          <Header />
          <div className={`${styles.gradient}`}></div>
        </>
      )}

      {/* <div className={styles.linksContainer}>{<RenderLinks userLocalidad={userLocalidad} />}</div> */}
    </div>
  );
};

export default Sidebar;
