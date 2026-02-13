import { useCurrentTime } from "../../../../../hooks/useCurrentTime";

import styles from "./TimeSection.module.css";

type TimeSectionProps = {
  className?: string;
  isCollapsed: boolean;
};

const TimeSection: React.FC<TimeSectionProps> = ({
  className,
  isCollapsed,
}) => {
  const { currentTime } = useCurrentTime();

  const hours = parseInt(currentTime.hours);
  const minutes = parseInt(currentTime.minutes);

  const tenHours = Math.floor(hours / 10);
  const unitHours = hours % 10;

  const tenMinutes = Math.floor(minutes / 10);
  const unitMinutes = minutes % 10;

  return (
    <div
      className={`${className || ""} ${styles.timeContainer} ${
        isCollapsed ? styles.collapsed : ""
      }`}
    >
      <div className={styles.hoursContainer}>
        <p className={styles.hours}>{tenHours}</p>
        <p className={styles.hours}>{unitHours}</p>
      </div>
      {!isCollapsed && <p className={styles.separator}>:</p>}
      <div className={styles.minutesContainer}>
        <p className={styles.minutes}>{tenMinutes}</p>
        <p className={styles.minutes}>{unitMinutes}</p>
      </div>
    </div>
  );
};

export default TimeSection;
