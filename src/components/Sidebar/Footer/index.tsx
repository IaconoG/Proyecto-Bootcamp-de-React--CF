import { ROUTES } from "../../../types/routes-types";
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
        link={ROUTES.SETTINGS}
        isActive={isSelected}
        isCollapsed={isCollapsed}
      />
    </div>
  );
};

export default SidebarFooter;
