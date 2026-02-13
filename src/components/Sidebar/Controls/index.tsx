/* store */
import { useSidebarStore } from "../../../state/stores/sidebar/sidebar.store";

/* components */
import SidebarToggleButton from "./SidebarToggle";
import ThemeToggle from "./ThemeToggle";

/* styles*/
import styles from "./TopControls.module.css";

const TopControls: React.FunctionComponent = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);
  return (
    <div
      className={`${styles.topControlsContainer} ${
        isCollapsed && styles.topControlsCollapsed
      }`}
    >
      <SidebarToggleButton />
      <ThemeToggle />
    </div>
  );
};

export default TopControls;
