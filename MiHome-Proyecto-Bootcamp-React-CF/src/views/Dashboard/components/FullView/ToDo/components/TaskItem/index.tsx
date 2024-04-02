import { Task } from '../../../../Widgets/utils/types';
import styles from './TaskItem.module.css';
import { formatDate } from '../../utils/helpers';

import { MdDeleteForever } from 'react-icons/md';
// import { MdEdit } from 'react-icons/md';

interface TaskItemProps extends Task {
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  id,
  date,
  title,
  description,
  priority,
  onDelete,
  // onEdit,
}) => {
  const handleDelete = (id: string) => {
    onDelete(id);
  };
  // const handleEdit = (id: number) => {
  //   onEdit(id);
  // };

  return (
    <div className={styles.taskContainer + ' ' + styles[priority.toLocaleLowerCase()]}>
      <h4 className={styles.taskTitle}>{title}</h4>
      <p className={styles.taskDesciption}>{description}</p>
      <p className={styles.taskDate}>{formatDate(date)}</p>
      <label htmlFor="taskComplete" className={styles.taskComplete}>
        <input type="checkbox" id="taskComplete" />
      </label>
      <div className={styles.buttons}>
        {/* <button name="edit" className={styles.editButton} onClick={() => handleEdit(id)}>
          <MdEdit />
        </button> */}
        <button name="delete" className={styles.deleteButton} onClick={() => handleDelete(id)}>
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
