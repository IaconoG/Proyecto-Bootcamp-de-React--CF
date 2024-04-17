import weatherInfo from '../../../../state/stores/weather/weather-info';
import styles from './Time.module.css';
import { useEffect, useState } from 'react';

const Time: React.FC = () => {
  const { getLocationLocalTime } = weatherInfo();
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const locationLocalTime = getLocationLocalTime();

  const updateDateTime = (time: string | Date) => {
    const formattedTime = formatTime(time);
    const formattedDate = formatDate(time);
    setTime(formattedTime);
    setDate(formattedDate);
  };
  const formatTime = (time: string | Date): string => {
    const hours = new Date(time).getHours();
    const minutes = new Date(time).getMinutes();
    return `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
  };
  const formatDate = (date: string | Date): string => {
    return new Date(date)
      .toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
      .toUpperCase();
  };

  useEffect(() => {
    if (locationLocalTime) updateDateTime(locationLocalTime);
  }, [locationLocalTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      updateDateTime(new Date());
    }, 60000); // 1 minute
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
