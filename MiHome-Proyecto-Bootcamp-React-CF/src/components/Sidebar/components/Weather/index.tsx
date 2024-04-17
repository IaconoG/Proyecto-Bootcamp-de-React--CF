import weatherInfo from '../../../../state/stores/weather/weather-info';
import styles from './Weather.module.css';

const Weather: React.FC = () => {
  const { getCurrentConditionIcon, getCurrentTempC, getCurrentConditionText } =
    weatherInfo();
  const temp = getCurrentTempC();
  const condition = getCurrentConditionText();
  // const iconSrc = `/images/WeatherAPIIcons/${getCurrentConditionIcon()}`;
  const iconSrc = `/images/WeatherAPIIcons/day/116.png`;

  return (
    <>
      <div className={styles.weatherContainer}>
        <div className={styles.weatherDataContainer}>
          <div className={styles.weatherTemp}>{temp}°C</div>
          <div className={styles.weatherCondition}>{condition}</div>
        </div>
        <div className={styles.weatherIconContainer}>
          <img
            src={iconSrc}
            alt="Weather Icon"
            className={styles.weatherIcon}
          />
        </div>
      </div>
    </>
  );
};

export default Weather;
