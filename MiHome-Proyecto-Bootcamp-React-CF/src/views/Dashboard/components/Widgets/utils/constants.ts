import { ToDo, Balance, Calendar, Focus, InfoMicros } from './types';

export const INITIAL_BALANCE_CONFIG: Balance = {
  title: 'Balance',
  active: false,
  path: 'balance',
  data: {
    bancos: [{ nombre: '' }],
  },
};

export const INITIAL_CALENDAR_CONFIG: Calendar = {
  title: 'Calendar',
  active: false,
  path: 'calendar',
  data: {
    events: [],
  },
};

export const INITIAL_FOCUS_CONFIG: Focus = {
  title: 'Focus',
  active: false,
  path: 'focus',
  data: {
    activitys: [],
  },
};

export const INITIAL_INFOMICROS_CONFIG: InfoMicros = {
  title: 'Info Micros',
  active: false,
  path: 'info-micros',
  data: {
    micros: [],
  },
};

export const INITIAL_TODO_CONFIG: ToDo = {
  title: 'ToDo',
  active: false,
  path: 'to-do',
  data: {
    completedTasks: [],
    incompletedTasks: [],
    filter: 'date',
  },
};
