// ** State **
import userInfo from "../../../state/stores/userInfo/user-info";
import { Widget } from "../../../state/utils/types";
import LinkContainer from "../LinkContainer";

type SidebarContentProps = {
  pageSelected: string;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ pageSelected }) => {
  const { getAllWidgets } = userInfo();
  const allLinks = getAllWidgets();

  console.log(allLinks);
  console.log(pageSelected);

  const RenderLinks = allLinks.map((widget: Widget) => (
    <LinkContainer
      key={widget.title}
      icon={"NoneIcon"} // FIXME: Change this default icon to the correct one when i have all the icons
      text={widget.title}
      link={`/dashboard/${widget.path}`}
      isActive={pageSelected === widget.path}
    />
  ));

  return (
    <div>
      <LinkContainer key={"Home"} icon="Home" text="MiHome" link="/dashboard" isActive={pageSelected == ""} />
      {RenderLinks}
    </div>
  );
};

export default SidebarContent;
