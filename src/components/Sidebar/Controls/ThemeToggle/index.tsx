/* store */
import { Icon } from "../../../../components/icons/Icon";
import { useSidebarStore } from "../../../../state/stores/sidebar/sidebar.store";
/* types */
import { IconType } from "../../../../types/icon-types";
import styles from "./ThemeToggle.module.css";

const ThemeToggle: React.FunctionComponent = () => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);
  // const toggle = useSidebarStore((s) => s.toggle); // Todo crear en el store la funcoin para cambiar el theme y utilizarlo aca

  const sun: IconType = "Sun";
  const moon: IconType = "MoonHalf";

  return (
    <div
      className={`${styles.themeToggleContainer} ${
        isCollapsed && styles.themeToggleContainerCollapsed
      }`}
    >
      <input type="checkbox" name="theme-toggle" id="theme-toggle" />
      <label htmlFor="theme-toggle">
        <Icon
          icon={sun}
          width={14}
          height={14}
          data-theme="light"
          className={`${styles.icon} ${styles.themeToggleIconCollapsed}`}
        />
        <Icon
          icon={moon}
          width={14}
          height={14}
          data-theme="dark"
          className={`${styles.icon} ${styles.themeToggleIconCollapsed}`}
        />
      </label>
    </div>
  );
};

export default ThemeToggle;
