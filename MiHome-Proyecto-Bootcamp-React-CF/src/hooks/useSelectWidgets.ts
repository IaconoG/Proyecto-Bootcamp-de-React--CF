import { useEffect, useState } from 'react';

import { WidgetOption, WidgetName } from '../utils/types';
import { INITIAL_WIDGETS_OPTIONS, OPTION_WIDGETS_OPTIONS } from '../utils/constants';

interface WidgetOptionsHook {
  getAddedWidgets: () => WidgetOption[];
  getNotAddedWidgets: () => WidgetOption[];
  areAllWidgetsAdded: () => boolean;
  addWidgets: (widgetName: WidgetName) => void;
  deleteWidgets: (widgetName: WidgetName) => void;
}

const useSelectWidgets = (): WidgetOptionsHook => {
  const storedWidgetsOptions = localStorage.getItem('widgetsOptionsUser');
  const initialOptions = storedWidgetsOptions
    ? JSON.parse(storedWidgetsOptions)
    : INITIAL_WIDGETS_OPTIONS;

  const [_, setWidgetsOptions] = useState<WidgetOption[]>(initialOptions);

  useEffect(() => {
    if (!storedWidgetsOptions) {
      localStorage.setItem('widgetsOptionsUser', JSON.stringify(INITIAL_WIDGETS_OPTIONS));
    }
  }, []); // FIXME: Add dependency. En el curso se menciona como realizarlo

  const getAddedWidgets = (): WidgetOption[] => {
    const storedWidgetsOptions = localStorage.getItem('widgetsOptionsUser');
    const optionsFromStorage = storedWidgetsOptions ? JSON.parse(storedWidgetsOptions) : [];

    return optionsFromStorage;
  };

  const getNotAddedWidgets = (): WidgetOption[] => {
    const storedWidgetsOptions = localStorage.getItem('widgetsOptionsUser');
    const optionsFromStorage = storedWidgetsOptions ? JSON.parse(storedWidgetsOptions) : [];

    const listAllWidgets = OPTION_WIDGETS_OPTIONS;

    if (optionsFromStorage === 0) return listAllWidgets;

    const notAddedWidgets = listAllWidgets.filter(
      (widget) => !optionsFromStorage.some((option: WidgetOption) => option.name === widget.name)
    );

    return notAddedWidgets;
  };

  const areAllWidgetsAdded = (): boolean => {
    const optionsFromStorage: WidgetOption | [] = storedWidgetsOptions
      ? JSON.parse(storedWidgetsOptions)
      : [];
    const optionsFromStorageNames = Array.isArray(optionsFromStorage)
      ? optionsFromStorage.map((widget: WidgetOption) => widget.name)
      : [];

    const allWidgetsNames = OPTION_WIDGETS_OPTIONS.map((widget) => widget.name);

    const allWidgetsAdded = allWidgetsNames.every((widgetName) =>
      optionsFromStorageNames.includes(widgetName)
    );

    return allWidgetsAdded;
  };

  const addWidgets = (widgetName: WidgetName): void => {
    const newWidget = OPTION_WIDGETS_OPTIONS.find((widget) => widget.name === widgetName);
    if (!newWidget) return;

    const storedWidgetsOptions = localStorage.getItem('widgetsOptionsUser');

    const updatedOptions = storedWidgetsOptions
      ? [...JSON.parse(storedWidgetsOptions), newWidget]
      : [newWidget];

    localStorage.setItem('widgetsOptionsUser', JSON.stringify(updatedOptions));
    setWidgetsOptions(updatedOptions);
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

export default useSelectWidgets;
