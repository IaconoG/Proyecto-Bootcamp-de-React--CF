import { useEffect, useState } from 'react';

import { UserInformation, WidgetOption, WidgetName } from '../utils/types';
import {
  LOCAL_STORAGE_USER_INFORMATION,
  INITIAL_USER_INFORMATION,
  OPTIONS_WIDGETS,
} from '../utils/constants';

interface WidgetOptionsHook {
  getAddedWidgets: () => WidgetOption[];
  getNotAddedWidgets: () => WidgetOption[];
  areAllWidgetsAdded: () => boolean;
  addWidgets: (widgetName: WidgetName) => void;
  deleteWidgets: (widgetName: WidgetName) => void;
}

const useUserWidgetsFromStorage = (): WidgetOptionsHook => {
  const [storedUserData, setStoredUserData] = useState<UserInformation | null>(
    INITIAL_USER_INFORMATION
  );

  useEffect(() => {
    const userInformationFromStorage = localStorage.getItem(LOCAL_STORAGE_USER_INFORMATION);
    const storedUserInformation = userInformationFromStorage
      ? JSON.parse(userInformationFromStorage)
      : INITIAL_USER_INFORMATION;

    setStoredUserData(storedUserInformation);
    localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(storedUserInformation));
  }, []);

  const getAddedWidgets = (): WidgetOption[] => {
    return storedUserData?.widgetsOptions || [];
  };

  const getNotAddedWidgets = (): WidgetOption[] => {
    const userWidgetsOptions = getAddedWidgets();

    const listAllWidgets = OPTIONS_WIDGETS;

    const notAddedWidgets = listAllWidgets.filter(
      (widget) => !userWidgetsOptions.some((userWidget) => userWidget.name === widget.name)
    );

    return notAddedWidgets;
  };

  const areAllWidgetsAdded = (): boolean => {
    const userWidgetsOptions = getAddedWidgets();

    const allWidgetsAdded = OPTIONS_WIDGETS.every((widget) =>
      userWidgetsOptions.some((userWidget) => userWidget.name === widget.name)
    );

    return allWidgetsAdded;
  };

  const addWidgets = (widgetName: WidgetName): void => {
    if (!storedUserData) return;

    const updatedStoredUserData = { ...storedUserData };
    const widgetToAdd = OPTIONS_WIDGETS.find((widget) => widget.name === widgetName);

    if (!widgetToAdd) return;

    updatedStoredUserData.widgetsOptions.push(widgetToAdd);

    setStoredUserData(updatedStoredUserData);
    localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(updatedStoredUserData));
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
