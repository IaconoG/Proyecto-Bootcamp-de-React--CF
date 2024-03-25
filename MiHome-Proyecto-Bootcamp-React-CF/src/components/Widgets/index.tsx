import Default from './componentes/Default';
import WidgetComponent from './componentes/WidgetComponent';

import useSelectWidgets from '../../hooks/useSelectWidgets';

import { WidgetName } from '../../utils/types';

const Widget: React.FunctionComponent = () => {
  const bodyExample: React.ReactElement = <div></div>;

  const { getAddedWidgets, areAllWidgetsAdded, addWidgets } = useSelectWidgets();

  const handleAddWidget = (name: WidgetName) => {
    addWidgets(name);
  };

  const addedWidgets = getAddedWidgets();

  // FIXME: Eliminar este método y estado, solo son de preuba
  const handleClickClearWidgetFromLocalStorage = () => {
    localStorage.setItem('widgetsOptionsUser', JSON.stringify([]));
    window.location.reload();
  };

  return (
    <>
      {addedWidgets.map((widget, idx) => (
        <WidgetComponent key={idx} title={widget.name} body={bodyExample} path={widget?.path} />
      ))}
      {!areAllWidgetsAdded() && <Default onAddWidget={handleAddWidget} />}
      {/* FIXME: Elimnar el boton, solo es de prueba */}
      <div>
        <button onClick={handleClickClearWidgetFromLocalStorage}>Clear Local Storage</button>
      </div>
    </>
  );
};

export default Widget;
