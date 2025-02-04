import styles from "./DateSection.module.css";
import { useCurrentDate } from "../../../../hooks/useCurrentDate";

type DateSectionPrps = {
  className?: string;
  isCollapsed: boolean;
};

const DateSection: React.FC<DateSectionPrps> = ({ className, isCollapsed }) => {
  const { currentDate } = useCurrentDate();
  const { day, month, year } = currentDate;
  return (
    <div className={`${className || ""} ${styles.date} ${isCollapsed ? styles.collapsed : ""}`}>
      <p className={styles.dateText}>
        {day} {month} {year}
      </p>
    </div>
  );
};

export default DateSection;
