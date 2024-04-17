import { UserInformation, UserData, UserWidgets, Widget } from './types';

export const LOCAL_STORAGE_USER_INFORMATION = 'userInformation';

export const INITIAL_USER_DATA: UserData = {
  userName: '',
  occupation: '',
  localidad: '',
};

const INITIAL_BALANCE: Widget = {
  title: 'Balance',
  active: false,
  path: 'balance',
};
const INITIAL_CALENDAR: Widget = {
  title: 'Calendar',
  active: false,
  path: 'calendar',
};

const INITIAL_FOCUS: Widget = {
  title: 'Focus',
  active: false,
  path: 'focus',
};

const INITIAL_INFOMICROS: Widget = {
  title: 'Info Micros',
  active: false,
  path: 'info-micros',
};

const INITIAL_TODO: Widget = {
  title: 'ToDo',
  active: false,
  path: 'to-do',
};

const INITIAL_WEATHER: Widget = {
  title: 'Weather',
  active: false,
  path: 'weather',
};

const INITIAL_WIDGETS_OPTIONS: UserWidgets = {
  balance: INITIAL_BALANCE,
  calendar: INITIAL_CALENDAR,
  focus: INITIAL_FOCUS,
  infoMicros: INITIAL_INFOMICROS,
  toDo: INITIAL_TODO,
  weather: INITIAL_WEATHER,
};

export const INITIAL_USER_INFORMATION: UserInformation = {
  userData: INITIAL_USER_DATA,
  userWidgets: INITIAL_WIDGETS_OPTIONS,
};
