import { useCurrentTime } from "../../../../hooks/useCurrentTime";

import styles from "./TimeSection.module.css";

type TimeSectionProps = {
  className?: string;
  isCollapsed: boolean;
};

const TimeSection: React.FC<TimeSectionProps> = ({ className, isCollapsed }) => {
  const { currentTime } = useCurrentTime();

  return (
    <div className={`${className || ""} ${styles.timeContainer} ${isCollapsed ? styles.collapsed : ""}`}>
      <p className={styles.hours}>{currentTime.hours}</p>
      <p className={styles.minutes}>{currentTime.minutes}</p>
      <p className={styles.seconds}>{currentTime.seconds}</p>
    </div>
  );
};

export default TimeSection;
