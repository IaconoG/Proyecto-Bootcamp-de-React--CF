import {
  Balance,
  Calendar,
  Focus,
  InfoMicros,
  ToDo,
} from '../views/Dashboard/components/FullView/ToDo/utils/types';

export type WidgetName =
  | 'Agrega un Widget'
  | 'Balance'
  | 'Calendar'
  | 'Focus'
  | 'Info Micros'
  | 'ToDo';

export type Path = 'settings' | 'balance' | 'calendar' | 'focus' | 'info-micros' | 'to-do' | 'dont';
type Config = Balance | Calendar | Focus | InfoMicros | ToDo;
export interface WidgetOption {
  name: WidgetName;
  body?: React.ReactElement;
  path: Path;
  config: Config;
}

export type OccupationTypeUser = 'Estudiante' | 'Trabajador' | 'Otro';

export interface UserData {
  username: string | null;
  oficio: OccupationTypeUser | null;
}

export interface UserInformation {
  userData: UserData;
  widgetsOptions: WidgetOption[];
}
