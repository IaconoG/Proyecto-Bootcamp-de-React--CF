import { Icon } from "../../icons/Icon";
import styles from "./SidebarToggleButton.module.css";

type SidebarToggleButtonProps = {
  isCollapsed: boolean;
  onclick: () => void;
};

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ isCollapsed, onclick }) => {
  return (
    <button className={`${isCollapsed ? styles.collapsed : ""} ${styles.toggleButton}`} onClick={onclick}>
      {isCollapsed ? <hr /> : <Icon icon={"Settings"} width={15} height={15} />}
    </button>
  );
};

export default SidebarToggleButton;
