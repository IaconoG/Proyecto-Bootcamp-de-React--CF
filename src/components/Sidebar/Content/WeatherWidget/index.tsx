// ** Styles **
import styles from "./WeatherWidget.module.css";

// ** Components **
import DateSection from "./DateSection";
import LocationSection from "./LocationSection";
import TimeSection from "./TimeSection";
// import WeatherSection from "./WeatherSection";

/* store */
import { useSidebarStore } from "../../../../state/stores/sidebar/sidebar.store";

const WeatherWidget: React.FC = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);

  return (
    <div
      className={`
        ${styles.weatherWidgetContainer}
        ${isCollapsed ? styles.collapsed : ""}
      `}
    >
      <LocationSection
        className={styles.locationSection}
        isCollapsed={isCollapsed}
      />
      <TimeSection className={styles.timeSection} isCollapsed={isCollapsed} />
      <DateSection className={styles.dateSection} isCollapsed={isCollapsed} />
      {/* <WeatherSection
        className={styles.weatherSection}
        isCollapsed={isCollapsed}
      /> */}
    </div>
  );
};

export default WeatherWidget;
