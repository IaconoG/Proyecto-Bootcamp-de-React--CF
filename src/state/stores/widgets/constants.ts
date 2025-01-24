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
