import { WidgetTitle } from '../../../../../state/utils/types';

// Al utilizar la API ESTO SEGURO CAMBIA

export interface Calendar {
  title: WidgetTitle;
  data: {
    events: { title: string; date: string }[];
  };
}
