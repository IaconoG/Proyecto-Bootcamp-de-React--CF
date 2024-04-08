import Default from './componentes/Default';
import WidgetComponent from './componentes/WidgetComponent';

// import useUserWidgetsFromStorage from '../../../../hooks/useUserWidgetsFromStorage';

import {
  WidgetKeys,
  Widget,
  WidgetPath,
  WidgetTitle,
} from '../../../../state/utils/types';

import userInfo from '../../../../state/stores/user-info';

const Widgets: React.FunctionComponent = () => {
  const { addWidget, getAddedWidgets, areAllWidgetsAdded } = userInfo();

  // FIXME: Suplantar por las mini view de los widgets
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

  const handleAddWidget = (name: WidgetKeys) => {
    addWidget(name);
  };
  const renderWidgets = (): React.ReactElement[] => {
    const addedWidgets = getAddedWidgets();
    return addedWidgets.map((widget: Widget, index: number) => (
      <WidgetComponent
        key={index}
        title={widget.title}
        body={bodyExample(widget.title)}
        path={widget?.path as WidgetPath}
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

export default Widgets;
