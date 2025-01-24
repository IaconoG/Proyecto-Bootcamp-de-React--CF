import { IconType } from "../../../types/icon-types";
import { ROUTES } from "../../../types/routes-types";
import { WIDGETS_NAMES } from "./constants";

export type WidgetsNames = (typeof WIDGETS_NAMES)[keyof typeof WIDGETS_NAMES];

export type Widget = {
  id: number;
  active: boolean;
  name: WidgetsNames;
  path: ROUTES;
  icon: IconType;
};
