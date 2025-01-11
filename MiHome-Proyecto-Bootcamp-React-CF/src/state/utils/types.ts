import { FormNewTask } from "../../views/Dashboard/components/ToDo/utils/types";

export type OccupationType = "Estudiante" | "Trabajador" | "Otro" | "";
export type WidgetKeys =
  | "balance"
  | "calendar"
  | "focus"
  | "infoMicros"
  | "toDo"
  | "weather";

export type WidgetTitle =
  | "Agrega un Widget"
  | "Balance"
  | "Calendar"
  | "Focus"
  | "Info Micros"
  | "ToDo"
  | "Weather";
export type WidgetPath =
  | "balance"
  | "calendar"
  | "focus"
  | "info-micros"
  | "to-do"
  | "weather";

export type FormDataType = UserData | FormNewTask;

export interface UserLocation {
  province: string;
  city: string;
}

export interface UserData {
  userName: string;
  occupation: OccupationType;
  userLocation: UserLocation;
}

export interface Widget {
  title: WidgetTitle;
  active: boolean;
  path: WidgetPath;
}

export interface UserWidgets {
  balance: Widget;
  calendar: Widget;
  focus: Widget;
  infoMicros: Widget;
  toDo: Widget;
  weather: Widget;
}

export interface UserInformation {
  userData: UserData;
  userWidgets: UserWidgets;
}

// Options for Datalist
export interface Options {
  id: string;
  value: string;
}
