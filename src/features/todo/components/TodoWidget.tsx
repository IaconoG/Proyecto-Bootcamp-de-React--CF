/* styles */
import styles from "../styles/TodoWidget.module.css";
/* components */
import TaskList from "./TaskList";
import FilterAndOrderControls from "./FilterAndOrderControls";
/* hooks */
import { useTodoData } from "../hooks";

const TodoWidget: React.FC = () => {
  const {
    getIncompletedTasks,
    getTaskIncompletedConfig,
    isEmptyIncompletedTasks,
  } = useTodoData();
  return (
    <div className={styles.container}>
      {isEmptyIncompletedTasks() ? (
        <div className={styles.messageContainer}>
          <p className={styles.message}>No hay tareas 😴</p>
        </div>
      ) : (
        <>
          <FilterAndOrderControls
            title="Tareas pendientes"
            config={getTaskIncompletedConfig()}
            typeTask="incompleted"
            selectStyles={styles.selectStyles}
          />
          <TaskList tasks={getIncompletedTasks()} />
        </>
      )}
    </div>
  );
};

export default TodoWidget;
