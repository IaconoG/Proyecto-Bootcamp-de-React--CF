// ** State **
import userInfo from "../../../state/stores/userInfo/user-info";
import { Widget } from "../../../state/utils/types";
import LinkContainer from "../LinkContainer";

type SidebarContentProps = {
  pageSelected: string;
  isCollapsed: boolean;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ pageSelected, isCollapsed }) => {
  const { getAllWidgets } = userInfo();
  const allLinks = getAllWidgets();

  const RenderLinks = allLinks.map((widget: Widget) => (
    <LinkContainer
      key={widget.title}
      icon={"NoneIcon"} // FIXME: Change this default icon to the correct one when i have all the icons
      text={widget.title}
      link={`/dashboard/${widget.path}`}
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
        link="/dashboard"
        isActive={pageSelected == ""}
        isCollapsed={isCollapsed}
      />
      {RenderLinks}
    </div>
  );
};

export default SidebarContent;
