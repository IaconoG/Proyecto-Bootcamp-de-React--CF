// ** Styles **
import DateSection from "./DateSection";
import styles from "./Header.module.css";

// ** Components **
import TimeSection from "./TimeSection";
import WeatherSection from "./WeatherSection";

type SidebarHeaderProps = {
  isCollapsed: boolean;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isCollapsed }) => {
  return (
    <div className={`${styles.header} ${isCollapsed ? styles.collapsed : ""}`}>
      <DateSection className={styles.dateSection} isCollapsed={isCollapsed} />
      <TimeSection className={styles.timeSection} isCollapsed={isCollapsed} />
      <WeatherSection className={styles.weatherSection} isCollapsed={isCollapsed} />
    </div>
  );
};

export default SidebarHeader;
