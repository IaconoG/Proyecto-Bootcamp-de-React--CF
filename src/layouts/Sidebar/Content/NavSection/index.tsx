// ** hooks **
import { useDayPeriod } from "../../../../hooks/useDayPeriod";
// ** constants **
import {
  WIDGETS_DATA,
  WIDGETS_NAMES,
} from "../../../../state/stores/widgets/constants";
// ** components **
import LinkContainer from "../../common/LinkContainer";
// ** types **
import { Widget } from "../../../../state/stores/widgets/types";

// ** Styles **
import styles from "./NavSection.module.css";
import { ROUTES } from "../../../../types/routes-types";

const NavSection: React.FC = () => {
  const { dayPeriod } = useDayPeriod();

  const RenderLinks = WIDGETS_DATA.map((widget: Widget) => (
    <LinkContainer
      key={widget.name + "-" + widget.id}
      icon={
        widget.name === WIDGETS_NAMES.WEATHER
          ? dayPeriod === "day"
            ? "SunFog"
            : "MoonFog"
          : widget.icon
      }
      text={widget.name}
      link={widget.path}
    />
  ));

  return (
    <div className={styles.navContainer}>
      <LinkContainer key={"Home"} icon="Home" text="Home" link={ROUTES.HOME} />
      {RenderLinks}
    </div>
  );
};

export default NavSection;
