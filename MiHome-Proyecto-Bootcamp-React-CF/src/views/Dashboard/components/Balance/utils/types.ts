import { WidgetTitle } from '../../../../../state/utils/types';

export interface Balance {
  title: WidgetTitle;
  data: {
    bancos: { nombre: string }[];
  };
}
