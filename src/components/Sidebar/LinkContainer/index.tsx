import { Link } from "react-router-dom";
import { IconType } from "../../../types/icon-types";
import { Icon } from "../../icons/Icon";

import styles from "./LinkContainer.module.css";

type LinkContainerProps = {
  icon: IconType;
  text: string;
  link: string;
  isActive: boolean;
  isCollapsed: boolean;
};

const LinkContainer = ({ icon, text, link, isActive, isCollapsed }: LinkContainerProps) => {
  return (
    <Link
      to={link}
      className={`${styles.link} ${isActive ? styles.active : ""} ${isCollapsed ? styles.collapsed : ""}`}
    >
      <Icon icon={icon} width={24} height={24} />
      <p className={styles.text}>{text}</p>
    </Link>
  );
};

export default LinkContainer;
