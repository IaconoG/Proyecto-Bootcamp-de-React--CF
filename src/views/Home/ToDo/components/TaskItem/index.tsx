import styles from './TaskItem.module.css';
import { formatDate } from '../../utils/helpers';

import { MdDeleteForever } from 'react-icons/md';
import { Task } from '../../utils/types';

interface TaskItemProps extends Task {
  onDelete: (id: string, completed: boolean) => void;
  onComplete: (id: string, completed: boolean) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  date,
  title,
  description,
  completed,
  priority,
  onDelete,
  onComplete,
}) => {
  const handleDelete = (id: string, completed: boolean) => {
    onDelete(id, completed);
  };
  // const handleEdit = (id: number) => {
  //   onEdit(id);
  // };
  const handleComplete = (id: string, completed: boolean) => {
    onComplete(id, completed);
  };

  return (
    <div
      className={`${styles.taskContainer} ${
        styles[priority.toLocaleLowerCase()]
      } 
        ${description ? styles.gridWithDescription : ''} ${
        completed && styles.completed
      }
      `}
    >
      <h4 className={styles.taskTitle}>{title}</h4>
      {description && (
        <div className={styles.taskDescriptionContainer}>
          <p className={styles.taskDesciption}>{description}</p>
        </div>
      )}
      <p className={styles.taskDate}>{formatDate(date)}</p>
      <label
        htmlFor={`taskComplete-${id}`}
        className={styles.taskComplete}
        onClick={() => handleComplete(id, completed)}
      >
        <input
          type="checkbox"
          id={`taskComplete-${id}`}
          defaultChecked={completed}
        />
      </label>
      <div className={styles.buttons}>
        {/* <button name="edit" className={styles.editButton} onClick={() => handleEdit(id)}>
          <MdEdit />
        </button> */}
        <button
          name="delete"
          className={styles.deleteButton}
          onClick={() => handleDelete(id, completed)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
