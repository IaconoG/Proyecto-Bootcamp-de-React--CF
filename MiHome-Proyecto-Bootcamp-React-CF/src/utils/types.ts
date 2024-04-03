import {
  Balance,
  Calendar,
  Focus,
  InfoMicros,
  ToDo,
} from '../views/Dashboard/components/Widgets/utils/types';

export type Path = 'settings' | 'balance' | 'calendar' | 'focus' | 'info-micros' | 'to-do' | 'dont';

export type OficioTypeUser = 'Estudiante' | 'Trabajador' | 'Otro' | '';

export interface UserData {
  username: string;
  oficio: OficioTypeUser;
}

export type WidgetKeys = 'balance' | 'calendar' | 'focus' | 'infoMicros' | 'toDo';
export type WidgetType = Balance | Calendar | Focus | InfoMicros | ToDo;

export type Widgets = Record<WidgetKeys, WidgetType>;

export interface WidgetsOptions {
  balance: Balance;
  calendar: Calendar;
  focus: Focus;
  infoMicros: InfoMicros;
  toDo: ToDo;
}

export interface UserInformation {
  userData: UserData;
  widgetsOptions: WidgetsOptions;
}
