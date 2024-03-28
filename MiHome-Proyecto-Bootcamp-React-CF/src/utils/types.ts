export type WidgetName =
  | 'Agrega un Widget'
  | 'Balance'
  | 'Calendar'
  | 'Focus'
  | 'Info Micros'
  | 'ToDo';

export type Path = 'settings' | 'balance' | 'calendar' | 'focus' | 'info-micros' | 'to-do' | 'dont';

export interface WidgetOption {
  name: WidgetName;
  body?: React.ReactElement;
  path: Path;
}

export type OccupationTypeUser = 'Estudiante' | 'Trabajador' | 'Otro';

export interface UserData {
  username: string | null;
  oficio: OccupationTypeUser | null;
}

export interface UserInformation {
  userData: UserData;
  userWidgetsOptions: WidgetOption[];
}
