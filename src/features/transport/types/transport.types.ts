import { WidgetTitle } from "../../../../../state/utils/types";

// Al utilizar la API ESTO SEGURO CAMBIA

export interface Transporte {
  name: string;
  description: string;
}

export interface Transport {
  title: WidgetTitle;
  data: {
    transport: Transporte[];
  };
}
