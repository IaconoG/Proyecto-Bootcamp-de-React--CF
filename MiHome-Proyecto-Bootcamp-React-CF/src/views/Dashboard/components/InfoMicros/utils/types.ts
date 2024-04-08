import { WidgetTitle } from '../../../../../state/utils/types';

// Al utilizar la API ESTO SEGURO CAMBIA
export interface InfoMicros {
  title: WidgetTitle;
  data: {
    micros: { title: string; description: string }[];
  };
}
