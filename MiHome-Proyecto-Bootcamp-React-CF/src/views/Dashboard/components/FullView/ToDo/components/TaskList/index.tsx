import TaskItem from '../TaskItem';

import styles from './TaksList.module.css';

import { Task } from '../../../../Widgets/utils/types';

interface TaskListProps {
  incompletedTasks: () => Task[];
  onDelete: (id: string) => void;
}

const TaksList: React.FC<TaskListProps> = ({ incompletedTasks, onDelete }) => {
  return (
    <div>
      <h2 className={styles.title}>Lista de tareas</h2>
      <div className={styles.tasksList}>
        {incompletedTasks().map((task) => (
          <TaskItem key={task.id} {...task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default TaksList;
