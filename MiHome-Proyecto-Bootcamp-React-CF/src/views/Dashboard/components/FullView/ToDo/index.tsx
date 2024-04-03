import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

import styles from './ToDo.module.css';

import { Task, FormNewTask } from '../../Widgets/utils/types';
import { generateId } from './utils/helpers';

import useToDoDataStorage from './hooks/useToDoDataStorage';

const ToDo: React.FC = () => {
  const { addIncompletedTask, deleteIncompletedTaskById, markTaskAsCompleteById } =
    useToDoDataStorage();

  const handleAddTask = (newTaskForm: FormNewTask) => {
    const newTask: Task = {
      ...newTaskForm,
      id: generateId(newTaskForm.title),
      date: new Date(),
    };
    addIncompletedTask(newTask);
  };
  const handleDeleteTask = (id: string) => {
    console.log('id', id);
    deleteIncompletedTaskById(id);
  };

  const handelCompleteTask = (id: string) => {
    markTaskAsCompleteById(id);
  };

  return (
    <div>
      <h1 className={styles.title}>ToDo desde componente</h1>
      <div className={styles.todoContainer}>
        <AddTaskForm onAdd={handleAddTask} />
        <TaskList onDelete={handleDeleteTask} onComplete={handelCompleteTask} />
      </div>
    </div>
  );
};

export default ToDo;

/* TODO: Cosas por hacer
 * - [x] Crear un componente AddTaskForm
 *   - [x] Almacenar la data del form en el widget ToDo en el localStorage
 * - [x] Crear un componente TaskList
 * - [?] Crear un componente TaskItem
 *
 */
