export type WidgetName =
  | 'Agrega un Widget'
  | 'Balance'
  | 'Calendar'
  | 'Focus'
  | 'Info Micros'
  | 'ToDo';

//* Balance
export interface Balance {
  title: WidgetName;
  active: boolean;
  path: string;
  data: {
    bancos: { nombre: string }[];
  };
}

//* Calendar
// Al utilizar la API ESTO SEGURO CAMBIA
export interface Calendar {
  title: WidgetName;
  active: boolean;
  path: string;
  data: {
    events: { title: string; date: string }[];
  };
}

//* Focus
type FocusActivity = {
  title: WidgetName;
  time: number;
  progress: number;
};
export interface Focus {
  title: WidgetName;
  active: boolean;
  path: string;
  data: {
    activitys: FocusActivity[];
  };
}

//* InfoMicros
// Al utilizar la API ESTO SEGURO CAMBIA
export interface InfoMicros {
  title: WidgetName;
  active: boolean;
  path: string;
  data: {
    micros: { title: string; description: string }[];
  };
}

//* ToDo
export type EstadoTaskSelect = 'Pendiente' | 'Completada';
export type PriorityTask = 'Alta' | 'Media' | 'Baja';
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  date: Date;
  priority: PriorityTask;
}
export interface FormNewTask
  extends Pick<Task, 'title' | 'description' | 'priority' | 'completed'> {}

export interface ToDo {
  title: WidgetName;
  active: boolean;
  path: string;
  data: {
    completedTasks: Task[];
    incompletedTasks: Task[];
    filter: 'priority' | 'date';
  };
}

//
