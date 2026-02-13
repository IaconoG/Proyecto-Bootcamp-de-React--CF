// ** Styles **
import styles from "./Content.module.css";
import NavSection from "./NavSection";
import WeatherWidget from "./WeatherWidget";
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
      <WeatherWidget />
    </div>
  );
};

export default SidebarContent;
