import todoInfo from '../../../../state/stores/todo-info';
import { Task } from '../../utils/types';

import TaskItem from '../../components/TaskItem';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const { markTaskAsIncompleteOrCompletedById, deleteTaskById } = todoInfo();

  const handelCompleteTask = (id: string) => {
    markTaskAsIncompleteOrCompletedById(id);
  };
  const handleDeleteTask = (id: string, completed: boolean) => {
    deleteTaskById(id, completed);
  };

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          onDelete={handleDeleteTask}
          onComplete={handelCompleteTask}
        />
      ))}
    </>
  );
};

export default TaskList;
