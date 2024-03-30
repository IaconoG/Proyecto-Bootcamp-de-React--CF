import { ToDo, Balance, Calendar, Focus, InfoMicros } from './types';

export const INITIAL_BALANCE_CONFIG: Balance = {
  bancos: [],
};
export const LOCAL_STORAGE_BALANCE = 'balance';

export const INITIAL_CALENDAR_CONFIG: Calendar = {
  events: [],
};
export const LOCAL_STORAGE_CALENDAR = 'calendar';

export const INITIAL_FOCUS_CONFIG: Focus = {
  activitys: [],
};
export const LOCAL_STORAGE_FOCUS = 'focus';

export const INITIAL_INFOMICROS_CONFIG: InfoMicros = {
  micros: [],
};
export const LOCAL_STORAGE_INFOMICROS = 'infoMicros';

export const INITIAL_TODO_CONFIG: ToDo = {
  tasks: [],
};
export const LOCAL_STORAGE_TODO = 'toDo';
