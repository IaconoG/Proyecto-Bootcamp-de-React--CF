import { generateId } from "../services/todoHelpers";
import todoInfo from "../../../../state/stores/toDo/todo-info";
import type { FormNewTask, Task } from "../types/todo.types";

/**
 * Hook personalizado para manejar acciones de ToDo
 * Abstrae la lógica de creación de tareas
 * Proporciona funciones para agregar nuevas tareas al estado global
 * CRUD: Create, Update, Delete
 *
 */
export const useTodoActions = () => {
  const { addNewTask } = todoInfo();

  const handleAddTask = (newTaskForm: FormNewTask) => {
    const newTask: Task = {
      ...newTaskForm,
      id: generateId(newTaskForm.title),
      date: new Date(),
    };
    addNewTask(newTask, false);
  };

  return {
    handleAddTask,
  };
};
