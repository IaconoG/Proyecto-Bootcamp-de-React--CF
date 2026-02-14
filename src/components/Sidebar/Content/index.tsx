// ** Styles **
import styles from "./Content.module.css";
import NavSection from "./NavSection";
// import WeatherWidget from "./WeatherWidget"; // WeatherWidget temporarily disabled - will be added in separate PR with API integration
import { useSidebarStore } from "../../../state/stores/sidebar/sidebar.store";

const SidebarContent: React.FC = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);

  return (
    <div
      className={`${styles.contentContainer} ${
        isCollapsed ? styles.collapsed : ""
      }`}
    >
      <NavSection />
      {/* WeatherWidget temporarily disabled - will be added in separate PR with API integration */}
      {/* <WeatherWidget /> */}
    </div>
  );
};

export default SidebarContent;
