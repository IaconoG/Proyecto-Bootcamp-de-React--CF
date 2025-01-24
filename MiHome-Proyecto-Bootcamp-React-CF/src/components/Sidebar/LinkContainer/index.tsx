import { Link } from "react-router-dom";
import { IconType } from "../../../types/icon-types";
import { Icon } from "../../icons/Icon";

import styles from "./LinkContainer.module.css";

type LinkContainerProps = {
  icon: IconType;
  text: string;
  link: string;
  isActive: boolean;
};

const LinkContainer = ({ icon, text, link, isActive }: LinkContainerProps) => {
  return (
    <Link to={link} className={`${styles.link} ${isActive ? styles.active : ""}`}>
      <Icon icon={icon} width={24} height={24} />
      <span>{text}</span>
    </Link>
  );
};

export default LinkContainer;
