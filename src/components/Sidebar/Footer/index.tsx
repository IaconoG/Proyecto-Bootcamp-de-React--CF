/* types */
import { ROUTES } from "../../../types/routes-types";

/* components */
import LinkContainer from "../common/LinkContainer";

const SidebarFooter: React.FC = () => {
  return (
    <div>
      <LinkContainer icon="Settings" text="Settings" link={ROUTES.SETTINGS} />
    </div>
  );
};

export default SidebarFooter;
