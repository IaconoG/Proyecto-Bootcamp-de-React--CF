// ** FIXME **/
// Debería ser tipos puros, sin dependencias externas
// O tener archivos separados:
// - todo.domain.types.ts (tipos de dominio)
// - todo.ui.types.ts (tipos de UI)
// - todo.form.types.ts (tipos de formulario)

import { WidgetTitle } from "../../../../../state/utils/types";

export type EstadoTaskSelect = "Pendiente" | "Completada";
export type PriorityTask = "high" | "medium" | "low";
export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  date: Date;
  priority: PriorityTask;
}
export type TaskFilter = "priority" | "date";
type SubTaskPriorityFilter = PriorityTask | "all";
type TaskOrder = "asc" | "desc";

export interface TaskListConfig {
  filter: TaskFilter;
  subFilter: SubTaskPriorityFilter;
  order: TaskOrder;
  search: string;
}
interface TaskList {
  tasks: Task[];
  config: TaskListConfig;
}

export interface ToDo {
  title: WidgetTitle;
  data: {
    completedTasks: TaskList;
    incompletedTasks: TaskList;
  };
}
//
export interface FormNewTask extends Pick<
  Task,
  "title" | "description" | "priority" | "completed"
> {}
