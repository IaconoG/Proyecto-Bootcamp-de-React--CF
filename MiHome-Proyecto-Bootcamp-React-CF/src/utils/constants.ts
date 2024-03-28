import { WidgetOption, UserInformation, UserData } from './types';

export const OPTIONS_WIDGETS: WidgetOption[] = [
  { name: 'Balance', path: 'balance' },
  { name: 'Calendar', path: 'calendar' },
  { name: 'Focus', path: 'focus' },
  { name: 'Info Micros', path: 'info-micros' },
  { name: 'ToDo', path: 'to-do' },
];

const INITIAL_WIDGETS_OPTIONS: WidgetOption[] = []; // FIXME: Es necesario que exporte esto?

export const LOCAL_STORAGE_USER_INFORMATION = 'userInformation';

const INITIAL_USER_DATA: UserData = {
  username: null,
  oficio: null,
};

export const INITIAL_USER_INFORMATION: UserInformation = {
  userData: INITIAL_USER_DATA,
  userWidgetsOptions: INITIAL_WIDGETS_OPTIONS,
};
