import weatherInfo from '../../../../state/stores/weather/weather-info';
import styles from './Time.module.css';
import { useEffect, useState } from 'react';

const Time: React.FC = () => {
  const { getLocationLocalTime } = weatherInfo();
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      const localTime = getLocationLocalTime();
      console.log('asd ' + localTime);
      const hours = new Date(localTime).getHours();
      const minutes = new Date(localTime).getMinutes();
      setTime(
        `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }`
      );
      setDate(
        new Date(localTime)
          .toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
          .toUpperCase()
      );
    }, 10000); // 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.timeContainer}>
      <div className={styles.time}>{time}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

export default Time;
