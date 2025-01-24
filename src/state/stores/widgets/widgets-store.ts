import { create } from "zustand";
import { persist } from "zustand/middleware";

import { Widget } from "./types";
import { WIDGETS_INITIAL_STATE } from "./constants";

type WidgetState = Pick<Widget, "id" | "active">;

export type WidgetsState = {
  balance: WidgetState;
  calendar: WidgetState;
  focus: WidgetState;
  infoMicros: WidgetState;
  toDo: WidgetState;
  weather: WidgetState;
};

type WidgetsActions = {
  getAllWidgets: () => WidgetsState;
  setInitialWidgets: () => void;
  toggleWidget: (widgetName: keyof WidgetsState) => void;
};

export const useWidgetsStore = create(
  persist<WidgetsState & WidgetsActions>(
    (set, get) => ({
      ...WIDGETS_INITIAL_STATE,

      // Obtener todos los widgets
      getAllWidgets: () => get(),
      // Establecer los widgets iniciales
      setInitialWidgets: () => {
        set(WIDGETS_INITIAL_STATE);
      },
      // Cambiar el estado de un widget
      toggleWidget: (widgetName) => {
        set((state) => ({
          ...state,
          [widgetName]: {
            ...state[widgetName],
            active: !state[widgetName].active,
          },
        }));
      },
    }),
    { name: "widgets-store" }
  )
);
