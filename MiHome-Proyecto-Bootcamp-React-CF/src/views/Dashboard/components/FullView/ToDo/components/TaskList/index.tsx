import TaskItem from '../TaskItem';

import styles from './TaksList.module.css';

import useToDoDataStorage from '../../hooks/useToDoDataStorage';

interface TaskListProps {
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TaksList: React.FC<TaskListProps> = ({ onDelete, onComplete }) => {
  const {
    haveAnyTask,
    haveCompletedAllTasks,
    isEmptyIncompletedTasks,
    isEmptyCompletedTasks,
    getIncompletedTasks,
    getCompletedTasks,
  } = useToDoDataStorage();

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.title}>Lista de tareas</h2>
      <div className={styles.tasksList}>
        {!haveAnyTask() ? (
          <div className={styles.messageContainer}>
            <p className={styles.message}>No hay tareas 😴</p>
          </div>
        ) : (
          <>
            {haveCompletedAllTasks() && (
              <div className={styles.messageContainer}>
                <p className={styles.message}>Completaste todas tus tareas 🥳</p>
              </div>
            )}
            {!isEmptyIncompletedTasks() && <h3 className={styles.subtitles}>Tareas incompletas</h3>}
            {getIncompletedTasks().map((task) => (
              <TaskItem key={task.id} {...task} onDelete={onDelete} onComplete={onComplete} />
            ))}
            {!isEmptyCompletedTasks() && <h3 className={styles.subtitles}>Tareas completas</h3>}
            {getCompletedTasks().map((task) => (
              <TaskItem key={task.id} {...task} onDelete={onDelete} onComplete={onComplete} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TaksList;
