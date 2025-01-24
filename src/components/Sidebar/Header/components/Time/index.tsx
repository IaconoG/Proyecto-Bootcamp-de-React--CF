import weatherInfo from '../../../../../state/stores/weather/weather-info';
import styles from './Time.module.css';
import { useEffect, useState } from 'react';

interface Data {
  time: string;
  date: string;
}

const Time: React.FC = () => {
  const { getLocationTimeZoneId } = weatherInfo();
  const [data, setData] = useState<Data>({
    time: '00:00',
    date: 'Loading...',
  });
  const [timeZoneId, setTimeZoneId] = useState<string>('');

  const newTimZoneId = getLocationTimeZoneId();
  if (newTimZoneId !== timeZoneId) setTimeZoneId(newTimZoneId);

  useEffect(() => {
    const updateDateTime = () => {
      if (!timeZoneId) return;
      const time = new Date().toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: timeZoneId,
      });
      const data = new Date()
        .toLocaleDateString('es-ES', {
          day: 'numeric',
          month: 'short',
          timeZone: timeZoneId,
        })
        .toUpperCase();
      setData({ time, date: data });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // 1 minuto
    return () => clearInterval(interval);
  }, [timeZoneId]);

  return (
    <div className={styles.timeContainer}>
      <p className={styles.time}>{data.time}</p>
      <p className={styles.date}>{data.date}</p>
    </div>
  );
};

export default Time;
