import { WidgetTitle } from '../../../../../state/utils/types';

// Al utilizar la API ESTO SEGURO CAMBIA

export interface Micro {
  name: string;
  description: string;
}

export interface InfoMicros {
  title: WidgetTitle;
  data: {
    micros: Micro[];
  };
}
