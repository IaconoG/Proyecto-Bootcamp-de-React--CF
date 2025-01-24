// ** Components **
import LinkContainer from "../LinkContainer";

type SidebarFooterProps = {
  isSelected: boolean;
};

const SidebarFooter: React.FC<SidebarFooterProps> = ({ isSelected }) => {
  return (
    <div>
      <LinkContainer icon="Settings" text="Settings" link="/dashboard/settings" isActive={isSelected} />
    </div>
  );
};

export default SidebarFooter;
