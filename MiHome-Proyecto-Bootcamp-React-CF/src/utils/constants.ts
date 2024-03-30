import { WidgetOption, UserInformation, UserData } from './types';

import {
  INITIAL_BALANCE_CONFIG,
  INITIAL_CALENDAR_CONFIG,
  INITIAL_FOCUS_CONFIG,
  INITIAL_INFOMICROS_CONFIG,
  INITIAL_TODO_CONFIG,
} from '../views/Dashboard/components/FullView/ToDo/utils/constants';

export const OPTIONS_WIDGETS: WidgetOption[] = [
  { name: 'Balance', path: 'balance', config: INITIAL_BALANCE_CONFIG },
  { name: 'Calendar', path: 'calendar', config: INITIAL_CALENDAR_CONFIG },
  { name: 'Focus', path: 'focus', config: INITIAL_FOCUS_CONFIG },
  { name: 'Info Micros', path: 'info-micros', config: INITIAL_INFOMICROS_CONFIG },
  { name: 'ToDo', path: 'to-do', config: INITIAL_TODO_CONFIG },
];

const INITIAL_WIDGETS_OPTIONS: WidgetOption[] = []; // FIXME: Es necesario que exporte esto?

export const LOCAL_STORAGE_USER_INFORMATION = 'userInformation';

const INITIAL_USER_DATA: UserData = {
  username: null,
  oficio: null,
};

export const INITIAL_USER_INFORMATION: UserInformation = {
  userData: INITIAL_USER_DATA,
  widgetsOptions: INITIAL_WIDGETS_OPTIONS,
};
