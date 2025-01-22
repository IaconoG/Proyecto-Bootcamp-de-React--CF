import { Link } from "react-router-dom";

// ** Styles **
import styles from "./SidebarFooter.module.css";
// ** Components **
import { Icon } from "../../icons/Icon";

interface SidebarFooterProps {
  isSelected: boolean;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isSelected }) => {
  return (
    <div>
      <Link to="/dashboard/settings" className={`${isSelected && styles.active}`}>
        <Icon icon="Settings" width={24} height={24} />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default SidebarFooter;
