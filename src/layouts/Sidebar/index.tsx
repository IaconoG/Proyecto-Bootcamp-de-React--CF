import { useLocation } from "react-router-dom";
import { useState } from "react";

// ** Styles **
import styles from "./Sidebar.module.css";

// ** Components **
import SidebarHeader from "./Header";
import SidebarContent from "./Content";
import SidebarFooter from "./Footer";
import SidebarToggleButton from "./SidebarToggleButton/SidebarToggleButton";

// ** Types **
import { ROUTES } from "../../types/routes-types";

const Sidebar: React.FunctionComponent = () => {
  const location = useLocation();
  const pageSelected = location.pathname as ROUTES;

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <SidebarToggleButton isCollapsed={isCollapsed} onClick={() => setIsCollapsed(!isCollapsed)} />
      <SidebarHeader isCollapsed={isCollapsed} />
      <hr className={styles.divider} />
      <SidebarContent pageSelected={pageSelected} isCollapsed={isCollapsed} />
      <hr className={styles.divider} />
      <SidebarFooter isSelected={pageSelected === ROUTES.SETTINGS} isCollapsed={isCollapsed} />
    </nav>
  );
};

export default Sidebar;
