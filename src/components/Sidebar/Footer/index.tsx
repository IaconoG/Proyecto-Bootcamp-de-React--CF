// ** Components **
import LinkContainer from "../LinkContainer";

type SidebarFooterProps = {
  isSelected: boolean;
  isCollapsed: boolean;
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isSelected, isCollapsed }) => {
  return (
    <div>
      <LinkContainer
        icon="Settings"
        text="Settings"
        link="/dashboard/settings"
        isActive={isSelected}
        isCollapsed={isCollapsed}
      />
    </div>
  );
};

export default SidebarFooter;
