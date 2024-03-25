export type WidgetName =
  | 'Agrega un Widget'
  | 'Balance'
  | 'Calendar'
  | 'Focus'
  | 'Info Micros'
  | 'ToDo';

export type Path =
  | 'settings'
  | 'balance'
  | 'calendar'
  | 'focus'
  | 'info-micros'
  | 'to-do'
  | 'default';

export interface WidgetOption {
  name: WidgetName;
  body?: React.ReactElement;
  path: Path;
}
