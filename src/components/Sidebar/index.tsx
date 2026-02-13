// ** Styles **
import styles from "./Sidebar.module.css";

// ** Components **
import SidebarHeader from "./Header";
import SidebarContent from "./Content";
import SidebarFooter from "./Footer";
import TopControls from "./Controls";

/* store */
import { useSidebarStore } from "../../state/stores/sidebar/sidebar.store";

const Sidebar: React.FunctionComponent = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);

  return (
    <nav className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <TopControls />
      <SidebarHeader />
      <hr className={styles.divider} />
      <SidebarContent />
      <hr className={styles.divider} />
      <SidebarFooter />
    </nav>
  );
};

export default Sidebar;
