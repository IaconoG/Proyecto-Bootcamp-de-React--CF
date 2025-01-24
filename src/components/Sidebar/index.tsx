import { useLocation } from "react-router-dom";
import { useState } from "react";

// ** Styles **
import styles from "./Sidebar.module.css";

// ** Components **
import SidebarHeader from "./Header";
import SidebarContent from "./Content";
import SidebarFooter from "./Footer";
import { Icon } from "../icons/Icon";
// import SunAndMoon from './components/SunAndMoon';
// import Weather from './components/Weather';
// import Time from './components/Time';

// ** State **

// ** Utils **
import { WidgetPath } from "../../state/utils/types";

const Sidebar: React.FunctionComponent = () => {
  type PathName = WidgetPath | "settings" | "";
  const location = useLocation();
  const pathName = location.pathname as PathName; // /dashboard/etc
  const pageSelected = pathName.substring("/dashboard/".length) as PathName;

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}>
      <button className={styles.collapseButton} onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? (
          <Icon icon={"Maximize"} width={18} height={18} />
        ) : (
          <Icon icon={"Minimize"} width={18} height={18} />
        )}
      </button>
      <SidebarHeader />
      <SidebarContent pageSelected={pageSelected} isCollapsed={isCollapsed} />
      <SidebarFooter isSelected={pageSelected === "settings"} isCollapsed={isCollapsed} />
    </nav>
  );
};

export default Sidebar;
