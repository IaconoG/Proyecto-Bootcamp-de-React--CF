// ** State **
import { WIDGETS_DATA } from "../../../state/stores/widgets/constants";
import { Widget } from "../../../state/stores/widgets/types";
import { ROUTES } from "../../../types/routes-types";
import LinkContainer from "../LinkContainer";

type SidebarContentProps = {
  pageSelected: string;
  isCollapsed: boolean;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ pageSelected, isCollapsed }) => {
  const RenderLinks = WIDGETS_DATA.map((widget: Widget) => (
    <LinkContainer
      key={widget.name + "-" + widget.id}
      icon={"NoneIcon"} // FIXME: Change this default icon to the correct one when i have all the icons
      text={widget.name}
      link={widget.path}
      isActive={pageSelected === widget.path}
      isCollapsed={isCollapsed}
    />
  ));
  return (
    <div>
      <LinkContainer
        key={"Home"}
        icon="Home"
        text="MiHome"
        link={ROUTES.DASHBOARD}
        isActive={pageSelected == ROUTES.DASHBOARD}
        isCollapsed={isCollapsed}
      />
      {RenderLinks}
    </div>
  );
};

export default SidebarContent;
