import Default from "./componentes/Default";
import WidgetComponent from "./componentes/WidgetComponent";

import TodoMiniView from "../ToDo/MiniView";

// import { WidgetKeys, Widget } from "../../../../state/utils/types";

import { useWidgetsStore } from "../../../../state/stores/widgets/widgets-store";
import { WidgetsNames } from "../../../../state/stores/widgets/types";
import { ROUTES } from "../../../../types/routes-types";

const Widgets: React.FunctionComponent = () => {
  // const { addWidget, getAddedWidgets, areAllWidgetsAdded } = useWidgetsStore();

  // const bodyExample = (widgetName: WidgetsNames): React.ReactElement => (
  //   <div
  //     style={{
  //       width: "100%",
  //       height: "100px",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       flexGrow: 1,
  //     }}
  //   >
  //     BODY de {widgetName}
  //   </div>
  // );
  // // FIXME: Suplantar por las mini view de los widgets
  // const body = (widgetTitle: WidgetsNames): React.ReactElement => {
  //   switch (widgetTitle) {
  //     case "Balance":
  //     case "Calendar":
  //     case "Focus":
  //     case "Info Micros":
  //     case "Weather":
  //       return bodyExample(widgetTitle);
  //     case "ToDo":
  //       return <TodoMiniView />;
  //     default:
  //       return <div>No se ha proporcionado un componente para este título</div>;
  //   }
  // };

  // const handleAddWidget = (name: WidgetKeys) => {
  //   addWidget(name);
  // };
  // const renderWidgets = (): React.ReactElement[] => {
  //   const addedWidgets = getAddedWidgets();
  //   return addedWidgets.map((widget: Widget, index: number) => (
  //     <WidgetComponent
  //       key={index}
  //       title={widget.name}
  //       body={body(widget.name)}
  //       path={widget?.path as ROUTES}
  //     />
  //   ));
  // };

  return (
    <>
      <h1>WidgetCopmonente</h1>
      {/* {renderWidgets()} */}
      {/* {!areAllWidgetsAdded() && <Default onAddWidget={handleAddWidget} />} */}
    </>
  );
};

export default Widgets;
