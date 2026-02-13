import { Link, useLocation } from "react-router-dom";
import { useSidebarStore } from "../../../../state/stores/sidebar/sidebar.store";
import { IconType } from "../../../../types/icon-types";
import { Icon } from "../../../../components/icons/Icon";

import styles from "./LinkContainer.module.css";

type LinkContainerProps = {
  icon: IconType;
  text: string;
  link: string;
};

const LinkContainer = ({ icon, text, link }: LinkContainerProps) => {
  const isCollapsed = useSidebarStore((s) => s.isCollapsed);
  const location = useLocation();

  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`
        ${styles.link}
        ${isActive ? styles.active : ""}
        ${isCollapsed ? styles.collapsed : ""}
      `}
    >
      <Icon icon={icon} width={24} height={24} />
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default LinkContainer;
