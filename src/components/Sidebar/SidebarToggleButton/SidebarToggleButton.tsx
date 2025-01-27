import { Icon } from "../../icons/Icon";
import styles from "./SidebarToggleButton.module.css";

type SidebarToggleButtonProps = {
  isCollapsed: boolean;
  onclick: () => void;
};

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ isCollapsed, onclick }) => {
  return (
    <button className={`${isCollapsed ? styles.collapsed : ""} ${styles.toggleButton}`} onClick={onclick}>
      {isCollapsed ? (
        <Icon icon={"ArrowRight"} width={18} height={18} />
      ) : (
        <Icon icon={"ArrowLeft"} width={18} height={18} />
      )}
    </button>
  );
};

export default SidebarToggleButton;
