import TaskList from '../../../components/TaskList';
import FilterAndOrderControls from '../../../components/FilterAndOrderControls';

import styles from './TaksListFullView.module.css';

import todoInfo from '../../../../../state/stores/todo-info';
import { Task, TaskListConfig } from '../../../utils/types';

const TaksListFullView: React.FC = () => {
  const {
    //
    haveAnyTask,
    haveCompletedAllTasks,
    setSearchTask,
    //
    getFilteredIncompletedTasks,
    getTaskIncompletedConfig,
    isEmptyIncompletedTasks,
    //
    getFilteredCompletedTasks,
    getTaskCompletedConfig,
    isEmptyCompletedTasks,
  } = todoInfo();

  const completedConfig: TaskListConfig = getTaskCompletedConfig();
  const incompletedConfig: TaskListConfig = getTaskIncompletedConfig();
  const completedTask: Task[] = getFilteredCompletedTasks();
  const incompletedTask: Task[] = getFilteredIncompletedTasks();

  const messagesEsp: { [key: string]: string } = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTask(event.target.value);
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.headerTaskList}>
        <h2>Lista de tareas</h2>
        <input
          className={styles.searchInput}
          type="text"
          name="search"
          placeholder="Buscar por nombre"
          maxLength={40}
          onChange={(event) => {
            handleSearch(event);
          }}
        />
      </div>

      <div className={styles.tasksList}>
        {!haveAnyTask() ? (
          <div className={styles.messageContainer}>
            <p className={styles.message}>No hay tareas 😴</p>
          </div>
        ) : (
          <>
            {haveCompletedAllTasks() && (
              <div className={styles.messageContainer}>
                <p className={styles.message}>
                  Completaste todas tus tareas 🥳
                </p>
              </div>
            )}
            {!isEmptyIncompletedTasks() && (
              <>
                <FilterAndOrderControls
                  title="Tareas pendientes"
                  config={incompletedConfig}
                  typeTask="incompleted"
                />
                {incompletedTask.length === 0 ? (
                  <div className={styles.messageContainer}>
                    <p className={styles.message}>
                      No hay tareas de prioridad{' '}
                      {messagesEsp[incompletedConfig.subFilter]}
                    </p>
                  </div>
                ) : (
                  <TaskList tasks={incompletedTask} />
                )}
              </>
            )}
            {!isEmptyCompletedTasks() && (
              <>
                <FilterAndOrderControls
                  title="Tareas completadas"
                  config={completedConfig}
                  typeTask="completed"
                />
                {completedTask.length === 0 ? (
                  <div className={styles.messageContainer}>
                    <p className={styles.message}>
                      No hay tareas de prioridad{' '}
                      {messagesEsp[completedConfig.subFilter]}
                    </p>
                  </div>
                ) : (
                  <TaskList tasks={completedTask} />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TaksListFullView;
