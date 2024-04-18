import weatherInfo from '../../../../../state/stores/weather/weather-info';
import styles from './Weather.module.css';

const Weather: React.FC = () => {
  const {
    isDataEmpty,
    getCurrentConditionIcon,
    getCurrentTempC,
    getCurrentConditionText,
  } = weatherInfo();

  let temp: number = 0;
  let condition: string = 'Loading...';
  if (!isDataEmpty()) {
    temp = getCurrentTempC();
    condition = getCurrentConditionText();
  }
  // const iconSrc = `/images/WeatherAPIIcons/${getCurrentConditionIcon()}`;
  const iconSrc = `/images/WeatherAPIIcons/day/116.png`;

  return (
    <>
      <div className={styles.weatherIconContainer}>
        <img src={iconSrc} alt="Weather Icon" className={styles.weatherIcon} />
      </div>
      <div className={styles.weatherDataContainer}>
        <p className={styles.weatherTemp}>
          {temp}
          <span>°C</span>
        </p>
        <p className={styles.weatherCondition}>{condition}</p>
      </div>
    </>
  );
};

export default Weather;
