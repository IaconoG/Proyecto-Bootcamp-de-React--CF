import { Icon } from "../../../../components/icons/Icon";
import styles from "./SidebarToggleButton.module.css";
import { useSidebarStore } from "../../../../state/stores/sidebar/sidebar.store";

const SidebarToggleButton: React.FC = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);
  const toggleCollapsed = useSidebarStore((s) => s.toggleCollapsed);

  return (
    <button
      className={`${isCollapsed ? styles.collapsed : ""} ${
        styles.toggleButton
      }`}
      onClick={toggleCollapsed}
    >
      <Icon icon={"SidebarIcon"} width={20} height={20} />
    </button>
  );
};

export default SidebarToggleButton;
