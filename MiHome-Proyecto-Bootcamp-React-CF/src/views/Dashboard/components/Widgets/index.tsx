import Default from './componentes/Default';
import WidgetComponent from './componentes/WidgetComponent';

import useUserWidgetsFromStorage from '../../../../hooks/useUserWidgetsFromStorage';

import { WidgetType } from '../../../../utils/types';
import { WidgetName } from './utils/types';
import { Path } from '../../../../utils/types';

const Widget: React.FunctionComponent = () => {
  const bodyExample = (widgetName: WidgetName): React.ReactElement => (
    <div
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
      }}
    >
      BODY de {widgetName}
    </div>
  );

  const { getAddedWidgets, areAllWidgetsAdded, addWidgets } = useUserWidgetsFromStorage();

  const handleAddWidget = (name: WidgetName) => {
    addWidgets(name);
  };

  const renderWidgets = (): React.ReactElement[] => {
    const addedWidgets = getAddedWidgets();
    return addedWidgets.map((widget: WidgetType, index: number) => (
      <WidgetComponent
        key={index}
        title={widget.title}
        body={bodyExample(widget.title)}
        path={widget?.path as Path}
      />
    ));
  };

  return (
    <>
      {renderWidgets()}
      {!areAllWidgetsAdded() && <Default onAddWidget={handleAddWidget} />}
    </>
  );
};

export default Widget;
