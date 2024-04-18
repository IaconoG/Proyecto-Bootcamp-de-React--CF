import styles from './Header.module.css';

import SunAndMoon from './components/SunAndMoon';
import Weather from './components/Weather';
import Time from './components/Time';
import weatherInfo from '../../../state/stores/weather/weather-info';

const Header = () => {
  const { getLocation } = weatherInfo();
  const { name, region, country } = getLocation();

  return (
    <div className={styles.header}>
      <p className={styles.localidad}>{`${name}, ${region}, ${country}`}</p>
      <div className={styles.watherAndTime}>
        <Time />
        <Weather />
      </div>

      <SunAndMoon />
    </div>
  );
};

export default Header;
