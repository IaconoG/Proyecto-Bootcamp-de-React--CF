import { WidgetTitle } from '../../../../../state/utils/types';

type FocusActivity = {
  title: WidgetTitle;
  time: number;
  progress: number;
};
export interface Focus {
  title: WidgetTitle;
  data: {
    activitys: FocusActivity[];
  };
}
