import { UserData, UserWidgets, Widget, WidgetKeys } from '../utils/types';
import {
  INITIAL_USER_INFORMATION,
  LOCAL_STORAGE_USER_INFORMATION,
} from '../utils/constants';

import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import { devtools } from 'zustand/middleware';

type Actions = {
  getUserData: () => UserData;
  updateUserData: (userData: UserData) => void;
  getUserWidgets: () => UserWidgets;
  updateUserWidgets: (userWidgets: UserWidgets) => void;
  getAddedWidgets: () => Widget[];
  getNotAddedWidgets: () => Widget[];
  areAllWidgetsAdded: () => boolean;
  addWidget: (widgetName: WidgetKeys) => void;
  deleteWidget: (widgetName: WidgetKeys) => void;
};

type State = {
  userData: UserData;
  userWidgets: UserWidgets;
};

const initialState: State = {
  ...INITIAL_USER_INFORMATION,
};

const userInfo = create<State & Actions>()(
  immer(
    devtools(
      persist(
        (set, get) => ({
          ...initialState,

          // User Data
          getUserData: () => get().userData,
          updateUserData: (userData: UserData) => {
            set((state) => {
              state.userData = userData;
            });
          },

          // User Widgets
          getUserWidgets: () => get().userWidgets,
          updateUserWidgets: (userWidgets: UserWidgets) => {
            set((state) => {
              state.userWidgets = userWidgets;
            });
          },

          getAddedWidgets: () => {
            const widgets = get().userWidgets;
            if (!widgets) return [];

            const arrayWidgets: Widget[] = [];

            for (const key of Object.keys(widgets) as WidgetKeys[]) {
              const widget: Widget = widgets[key];
              if (widgets[key].active) {
                arrayWidgets.push(widget);
              }
            }
            return arrayWidgets;
          },
          getNotAddedWidgets: () => {
            const widgets = get().userWidgets;
            if (!widgets) return [];

            const arrayWidgets: Widget[] = [];

            for (const key of Object.keys(widgets) as WidgetKeys[]) {
              const widget: Widget = widgets[key];
              if (!widgets[key].active) {
                arrayWidgets.push(widget);
              }
            }
            return arrayWidgets;
          },
          areAllWidgetsAdded: () => {
            const widgets = get().userWidgets;
            if (!widgets) return false;

            for (const key of Object.keys(widgets) as WidgetKeys[]) {
              const widget = widgets[key];
              if (!widget.active) {
                return false;
              }
            }
            return true;
          },

          addWidget: (widgetName: WidgetKeys) => {
            set((state) => {
              state.userWidgets[widgetName].active = true;
            });
          },
          deleteWidget: (widgetName: WidgetKeys) => {
            set((state) => {
              state.userWidgets[widgetName].active = false;
            });
          },

          //
        }),
        {
          name: LOCAL_STORAGE_USER_INFORMATION,
          storage: createJSONStorage(() => localStorage),
        }
      )
    )
  )
);
export default userInfo;
