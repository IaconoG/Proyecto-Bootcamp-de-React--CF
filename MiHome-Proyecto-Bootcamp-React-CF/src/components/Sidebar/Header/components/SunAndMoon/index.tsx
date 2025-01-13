import styles from './SunAndMoon.module.css';
import moonImg from '/images/moon.png';
import sunImg from '/images/sun.png';

import React, { useState, useEffect } from 'react';

const SunAndMoon: React.FC = () => {
  const [curretnTime, setCurrentTime] = useState(new Date());
  // const [timeTest, setTimeTest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      // setTimeTest((prev) => prev + 1);
      // Actulizamos cada 1 minuto
    }, 60000); // 60000 milisegundos = 1 minuto

    return () => clearInterval(interval); // Limpiamos el intervalo
  }, []);

  const getSunMoonPosition = () => {
    // TODO: Al tener location y utilizar la api, podemos conocer cuando se pone el sol y la luna
    const hours = curretnTime.getHours();
    const minutes = curretnTime.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    const angle = ((totalMinutes % 1440) / 1440) * 360; // 1440 minutos en un dia // 360 grados en un circulo
    return angle;
    // return timeTest
  };

  return (
    <div
      className={styles.sunMoonContainer}
      style={{
        transform: `rotate(${getSunMoonPosition()}deg)`,
      }}
    >
      <div className={styles.border}></div>
      <div className={styles.moonContainer}>
        <img src={moonImg} alt="Luna" className={styles.moon} loading="lazy" />
      </div>
      <div className={styles.sunContainer}>
        <img src={sunImg} alt="Sol" className={styles.sun} loading="lazy" />
      </div>
    </div>
  );
};

export default SunAndMoon;
