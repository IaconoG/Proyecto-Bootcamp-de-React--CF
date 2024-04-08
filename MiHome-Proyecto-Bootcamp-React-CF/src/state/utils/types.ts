import { FormNewTask } from '../../views/Dashboard/components/ToDo/utils/types';

export type OccupationType = 'Estudiante' | 'Trabajador' | 'Otro' | '';
export type WidgetKeys =
  | 'balance'
  | 'calendar'
  | 'focus'
  | 'infoMicros'
  | 'toDo';

export type WidgetTitle =
  | 'Agrega un Widget'
  | 'Balance'
  | 'Calendar'
  | 'Focus'
  | 'Info Micros'
  | 'ToDo';
export type WidgetPath =
  | 'settings'
  | 'balance'
  | 'calendar'
  | 'focus'
  | 'info-micros'
  | 'to-do'
  | 'dont';

export type FormDataType = UserData | FormNewTask;

export interface UserData {
  userName: string;
  occupation: OccupationType;
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
}

export interface UserInformation {
  userData: UserData;
  userWidgets: UserWidgets;
}
