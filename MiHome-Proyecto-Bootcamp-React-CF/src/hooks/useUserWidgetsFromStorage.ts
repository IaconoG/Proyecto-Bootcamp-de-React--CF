import { useEffect, useState } from 'react';

import { UserInformation, WidgetType, WidgetKeys } from '../utils/types';
import { INITIAL_USER_INFORMATION } from '../utils/constants';
import { WidgetName } from '../views/Dashboard/components/Widgets/utils/types';
import {
  getUserInformationFromLocalStorage,
  setUserInformationToLocalStorage,
} from '../utils/helpers';

interface WidgetOptionsHook {
  getAddedWidgets: () => WidgetType[];
  getNotAddedWidgets: () => WidgetType[];
  areAllWidgetsAdded: () => boolean;
  addWidgets: (widgetName: WidgetName) => void;
  deleteWidgets: (widgetName: WidgetName) => void;
}

const useUserWidgetsFromStorage = (): WidgetOptionsHook => {
  const [storedUserData, setStoredUserData] = useState<UserInformation | null>(
    INITIAL_USER_INFORMATION
  );

  useEffect(() => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    setUserInformationToLocalStorage(storedUserInformation);
    setStoredUserData(storedUserInformation);
  }, []);

  const getAddedWidgets = (): WidgetType[] => {
    if (!storedUserData) return [];

    const arrayWidgets: WidgetType[] = [];
    const widgets = storedUserData.widgetsOptions;
    for (const key of Object.keys(widgets) as WidgetKeys[]) {
      const widget = widgets[key];
      if (widget.active) {
        arrayWidgets.push(widget);
      }
    }
    return arrayWidgets;
  };

  const getNotAddedWidgets = (): WidgetType[] => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    if (!storedUserInformation) return [];

    const arrayWidgets: WidgetType[] = [];
    const widgets = storedUserInformation.widgetsOptions;
    for (const key of Object.keys(widgets) as WidgetKeys[]) {
      const widget = widgets[key];
      if (!widget.active) {
        arrayWidgets.push(widget);
      }
    }

    return arrayWidgets;
  };

  const areAllWidgetsAdded = (): boolean => {
    if (!storedUserData) return false;
    const widgets = storedUserData.widgetsOptions;

    for (const key of Object.keys(widgets) as WidgetKeys[]) {
      const widget = widgets[key];
      if (!widget.active) {
        return false;
      }
    }
    return true;
  };

  const addWidgets = (widgetName: WidgetName): void => {
    if (!storedUserData) return;

    widgetName = widgetName.charAt(0).toLowerCase() + widgetName.slice(1);

    let widgetKey = widgetName as WidgetKeys;
    const shouldModifyName = widgetName === 'info Micros';
    if (shouldModifyName) widgetKey = 'infoMicros' as WidgetKeys;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.widgetsOptions[widgetKey].active = true;

    setUserInformationToLocalStorage(updatedStoredUserData);
    setStoredUserData(updatedStoredUserData);
  };

  const deleteWidgets = (widgetName: WidgetName): void => {
    console.log('deleteWidgets', widgetName);
    // FIXME: Implementar la eliminación de un widget, esto se debe realizar desde la pagina del widget
  };

  return {
    getAddedWidgets,
    getNotAddedWidgets,
    areAllWidgetsAdded,
    addWidgets,
    deleteWidgets,
  };
};

export default useUserWidgetsFromStorage;
