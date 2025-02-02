// ** hooks **
import { useDayPeriod } from "../../../hooks/useDayPeriod";
// ** constants **
import { WIDGETS_DATA, WIDGETS_NAMES } from "../../../state/stores/widgets/constants";
// ** components **
import LinkContainer from "../common/LinkContainer";
// ** types **
import { Widget } from "../../../state/stores/widgets/types";
import { ROUTES } from "../../../types/routes-types";
type SidebarContentProps = {
  pageSelected: string;
  isCollapsed: boolean;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ pageSelected, isCollapsed }) => {
  const { dayPeriod } = useDayPeriod();

  const RenderLinks = WIDGETS_DATA.map((widget: Widget) => (
    <LinkContainer
      key={widget.name + "-" + widget.id}
      icon={
        widget.name === WIDGETS_NAMES.WEATHER ? (dayPeriod === "day" ? "SunFog" : "MoonFog") : widget.icon
      }
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
