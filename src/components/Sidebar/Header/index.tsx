// ** components **
// import { Icon } from "../../../components/icons/Icon";
// ** Styles **
import styles from "./Header.module.css";
/* store */
import { useSidebarStore } from "../../../state/stores/sidebar/sidebar.store";

const SidebarHeader: React.FC = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);
  return (
    <div className={`${styles.header} ${isCollapsed ? styles.collapsed : ""}`}>
      {/* <Icon icon={"NoneIcon"} width={32} height={32} /> */}
      <p className={styles.appName}>Nombre de la app</p>
    </div>
  );
};

export default SidebarHeader;
