import { ToDo, TaskListConfig } from './types';

export const INITIAL_TASK_CONFIG: TaskListConfig = {
  filter: 'date',
  subFilter: 'all',
  order: 'desc',
};

export const INITIAL_TODO_STATE: ToDo = {
  title: 'ToDo',
  data: {
    completedTasks: {
      tasks: [],
      config: INITIAL_TASK_CONFIG,
    },
    incompletedTasks: {
      tasks: [],
      config: INITIAL_TASK_CONFIG,
    },
  },
};

export const LOCAL_STORAGE_TODO = 'toDoWidget';
