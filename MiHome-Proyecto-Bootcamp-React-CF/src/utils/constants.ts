import { UserInformation, UserData, WidgetsOptions } from './types';

import {
  INITIAL_BALANCE_CONFIG,
  INITIAL_CALENDAR_CONFIG,
  INITIAL_FOCUS_CONFIG,
  INITIAL_INFOMICROS_CONFIG,
  INITIAL_TODO_CONFIG,
} from '../views/Dashboard/components/Widgets/utils/constants';

const INITIAL_WIDGETS_OPTIONS: WidgetsOptions = {
  balance: INITIAL_BALANCE_CONFIG,
  calendar: INITIAL_CALENDAR_CONFIG,
  focus: INITIAL_FOCUS_CONFIG,
  infoMicros: INITIAL_INFOMICROS_CONFIG,
  toDo: INITIAL_TODO_CONFIG,
};

const INITIAL_USER_DATA: UserData = {
  username: null,
  oficio: null,
};

export const LOCAL_STORAGE_USER_INFORMATION = 'userInformation';

export const INITIAL_USER_INFORMATION: UserInformation = {
  userData: INITIAL_USER_DATA,
  widgetsOptions: INITIAL_WIDGETS_OPTIONS,
};
