import { ROUTES } from "../../../types/routes-types";
import { Widget } from "./types";
import { WidgetsState } from "./widgets-store";

export const WIDGETS_NAMES: Record<string, string> = {
  BALANCE: "Balance",
  CALENDAR: "Calendar",
  FOCUS: "Focus",
  INFO_MICROS: "Info Micros",
  TO_DO: "ToDo",
  WEATHER: "Weather",
};

export const WIDGETS_INITIAL_STATE: WidgetsState = {
  balance: {
    id: 1,
    active: false,
  },
  calendar: {
    id: 2,
    active: false,
  },
  focus: {
    id: 3,
    active: false,
  },
  infoMicros: {
    id: 4,
    active: false,
  },
  toDo: {
    id: 5,
    active: false,
  },
  weather: {
    id: 6,
    active: false,
  },
};

export const WIDGETS_DATA: Widget[] = [
  {
    id: 1,
    active: false,
    name: WIDGETS_NAMES.BALANCE,
    path: ROUTES.BALANCE,
    icon: "NoneIcon",
  },
  {
    id: 2,
    active: false,
    name: WIDGETS_NAMES.CALENDAR,
    path: ROUTES.CALENDAR,
    icon: "NoneIcon",
  },
  {
    id: 3,
    active: false,
    name: WIDGETS_NAMES.FOCUS,
    path: ROUTES.FOCUS,
    icon: "NoneIcon",
  },
  {
    id: 4,
    active: false,
    name: WIDGETS_NAMES.INFO_MICROS,
    path: ROUTES.INFO_MICROS,
    icon: "NoneIcon",
  },
  {
    id: 5,
    active: false,
    name: WIDGETS_NAMES.TO_DO,
    path: ROUTES.TO_DO,
    icon: "NoneIcon",
  },
  {
    id: 6,
    active: false,
    name: WIDGETS_NAMES.WEATHER,
    path: ROUTES.WEATHER,
    icon: "NoneIcon",
  },
];
