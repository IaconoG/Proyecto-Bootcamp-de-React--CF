/* store */
import { useUserInfoStore } from "../../../../../state/stores/userInfo/userInfo-store";
/* types */
import { UserLocation } from "../../../../../state/stores/userInfo/types";
/* styles */
import styles from "./LocationSection.module.css";

type LocationSectionProps = {
  className?: string;
  isCollapsed: boolean;
};

const LocationSection: React.FC<LocationSectionProps> = ({
  className,
  isCollapsed,
}) => {
  const { province, city } = useUserInfoStore((s) =>
    s.getUserLocation(),
  ) as UserLocation;

  return (
    <div className={`${className || ""}`}>
      <p
        className={`
        ${styles.location}
        ${isCollapsed ? styles.collapsed : ""}`}
      >
        {city || "Ciudad"} <span>,{province || "Provincia"}</span>
      </p>
    </div>
  );
};

export default LocationSection;
