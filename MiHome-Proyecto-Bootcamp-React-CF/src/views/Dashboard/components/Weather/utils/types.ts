import { WeatherData } from '../../../../../api/WeatherAPI/models/wather';
import { WidgetTitle } from '../../../../../state/utils/types';

export interface Weather {
  title: WidgetTitle;
  data: WeatherData;
}
