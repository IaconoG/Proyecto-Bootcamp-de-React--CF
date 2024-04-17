import { CurrentElement } from '../../../../../api/WeatherAPI/models/wather';

export interface WeatherSideBar
  extends Pick<CurrentElement, 'temp_c' | 'condition'> {}
