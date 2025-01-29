import { useCurrentTime } from "../../../../hooks/useCurrentTime";

import styles from "./TimeSection.module.css";

type TimeSectionProps = {
  className?: string;
};

const TimeSection: React.FC<TimeSectionProps> = ({ className }) => {
  const { currentTime } = useCurrentTime();

  return (
    <div className={`${className || ""} ${styles.timeContainer}`}>
      <div className={styles.date}>
        <span>28 Diciembre 2025</span>
      </div>
      <div className={styles.hour}>
        <span>20</span>
        {/* <span>{currentTime.hours}</span> */}
      </div>
      <div className={styles.timeGroup}>
        <div className={styles.minutes}>
          <span>45</span>
          {/* <span>{currentTime.minutes}</span> */}
        </div>
        <div className={styles.seconds}>
          <span>00</span>
          {/* <span>{currentTime.seconds}</span> */}
        </div>
      </div>
    </div>
  );
};

export default TimeSection;
