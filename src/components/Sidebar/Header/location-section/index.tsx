import { UserLocation } from "../../../../state/stores/userInfo/types";
import styles from "./LocationSection.module.css";

type LocationSectionProps = Pick<UserLocation, "province" | "city"> & {
  className?: string;
  isCollapsed: boolean;
};

const LocationSection: React.FC<LocationSectionProps> = ({ province, city, className, isCollapsed }) => {
  return (
    <div className={`${className || ""} ${styles.locationContainer}`}>
      <p className={styles.location}>
        {/* {city}, */}
        <span className={styles.fadeIn}>La Plata</span>
        <span className={`${isCollapsed ? styles.fadeOut : styles.fadeIn}`}>
          , Buenos Aires{/* , {province} */}
        </span>
      </p>
    </div>
  );
};

export default LocationSection;
