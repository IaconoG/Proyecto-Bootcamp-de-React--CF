import styles from './MiniView.module.css';

import TaskList from '../components/TaskList';
import FilterAndOrderControls from '../components/FilterAndOrderControls';

import todoInfo from '../../../stores/todo-info';

const MiniView: React.FC = () => {
  const {
    getIncompletedTasks,
    getTaskIncompletedConfig,
    isEmptyIncompletedTasks,
  } = todoInfo();
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

export default MiniView;
