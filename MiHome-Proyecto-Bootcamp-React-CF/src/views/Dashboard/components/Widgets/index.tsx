import Default from './componentes/Default';
import WidgetComponent from './componentes/WidgetComponent';

import TodoMiniView from '../ToDo/MiniView';

import {
  WidgetKeys,
  Widget,
  WidgetPath,
  WidgetTitle,
} from '../../../../state/utils/types';

import userInfo from '../../../../state/stores/user-info';

const Widgets: React.FunctionComponent = () => {
  const { addWidget, getAddedWidgets, areAllWidgetsAdded } = userInfo();

  const bodyExample = (widgetName: WidgetTitle): React.ReactElement => (
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
  // FIXME: Suplantar por las mini view de los widgets
  const body = (widgetTitle: WidgetTitle): React.ReactElement => {
    switch (widgetTitle) {
      case 'Balance':
      case 'Calendar':
      case 'Focus':
      case 'Info Micros':
        return bodyExample(widgetTitle);
      case 'ToDo':
        return <TodoMiniView />;
      default:
        return <div>No se ha proporcionado un componente para este título</div>;
    }
  };

  const handleAddWidget = (name: WidgetKeys) => {
    addWidget(name);
  };
  const renderWidgets = (): React.ReactElement[] => {
    const addedWidgets = getAddedWidgets();
    return addedWidgets.map((widget: Widget, index: number) => (
      <WidgetComponent
        key={index}
        title={widget.title}
        body={body(widget.title)}
        path={widget?.path as WidgetPath}
      />
    ));
  };

  return (
    <>
      {renderWidgets()}
      {!areAllWidgetsAdded() && <Default onAddWidget={handleAddWidget} />}
      <Default onAddWidget={handleAddWidget} />
      <Default onAddWidget={handleAddWidget} />
    </>
  );
};

export default Widgets;
