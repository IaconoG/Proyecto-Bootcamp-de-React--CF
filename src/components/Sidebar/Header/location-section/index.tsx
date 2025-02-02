import { UserLocation } from "../../../../state/stores/userInfo/types";
import styles from "./LocationSection.module.css";

type LocationSectionProps = Pick<UserLocation, "province" | "city"> & {
  className?: string;
  isCollapsed: boolean;
};

const LocationSection: React.FC<LocationSectionProps> = ({ province, city, className, isCollapsed }) => {
  return (
    <div className={`${className || ""}`}>
      <p className={`${styles.location} ${isCollapsed ? styles.collapsed : ""}`}>
        <span>{province || "Provincia"}, </span>
        {city || "Ciudad"}
      </p>
    </div>
  );
};

export default LocationSection;
