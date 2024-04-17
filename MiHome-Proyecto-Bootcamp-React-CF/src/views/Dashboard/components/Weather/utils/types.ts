import { WeatherData } from '../../../../../api/WeatherAPI/models/wather';
import { WidgetTitle } from '../../../../../state/utils/types';

interface ErrorAPI {
  status: number;
  code: number;
  message: string;
}
export interface Weather {
  title: WidgetTitle;
  data: WeatherData | undefined;
  error: ErrorAPI | null;
}
