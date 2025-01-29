// ** Styles **
import { useUserInfoStore } from "../../../state/stores/userInfo/userInfo-store";
import styles from "./Header.module.css";

// ** Components **
import LocationSection from "./location-section";
import TimeSection from "./time-section";
import WeatherSection from "./weather-section";

type SidebarHeaderProps = {
  isCollapsed: boolean;
};

const SidebarHeader: React.FC<SidebarHeaderProps> = ({ isCollapsed }) => {
  const { getUserLocation } = useUserInfoStore();
  const { province, city } = getUserLocation();

  return (
    <div className={`${styles.header} ${isCollapsed ? styles.collapsed : ""}`}>
      <LocationSection
        province={province}
        city={city}
        className={styles.locationSection}
        isCollapsed={isCollapsed}
      />
      <TimeSection className={styles.timeSection} />
      <WeatherSection className={styles.weatherSection} />
    </div>
  );
};

export default SidebarHeader;
