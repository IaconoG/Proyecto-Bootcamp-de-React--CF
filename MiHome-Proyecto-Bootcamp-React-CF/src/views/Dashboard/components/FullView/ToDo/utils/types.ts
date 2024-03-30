//* Balance
export interface Balance {
  bancos: { nombre: string }[];
}

//* Calendar
// Al utilizar la API ESTO SEGURO CAMBIA
export interface Calendar {
  events: { title: string; date: string }[];
}

//* Focus
type FocusActivity = {
  title: string;
  time: number;
  progress: number;
};
export interface Focus {
  activitys: FocusActivity[];
}

//* InfoMicros
// Al utilizar la API ESTO SEGURO CAMBIA
export interface InfoMicros {
  micros: { title: string; description: string }[];
}

//* ToDo
export type EstadoTaskSelect = 'Pendiente' | 'Completada';
export type PriorityTask = 'Alta' | 'Media' | 'Baja';
export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  date: string;
  priority: PriorityTask;
}
export interface ToDo {
  tasks: Task[];
}

//
