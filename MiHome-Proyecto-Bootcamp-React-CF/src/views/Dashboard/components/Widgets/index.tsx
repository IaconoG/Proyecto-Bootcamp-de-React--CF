import Default from './componentes/Default';
import WidgetComponent from './componentes/WidgetComponent';

import useSelectWidgets from '../../../../hooks/useUserWidgetsFromStorage';

import { WidgetName } from '../../../../utils/types';

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

  const { getAddedWidgets, areAllWidgetsAdded, addWidgets } = useSelectWidgets();

  const handleAddWidget = (name: WidgetName) => {
    addWidgets(name);
  };

  const addedWidgets = getAddedWidgets();

  return (
    <>
      {addedWidgets.map((widget, idx) => (
        <WidgetComponent
          key={idx}
          title={widget.name}
          body={bodyExample(widget.name)}
          path={widget?.path}
        />
      ))}
      {!areAllWidgetsAdded() && <Default onAddWidget={handleAddWidget} />}
    </>
  );
};

export default Widget;
