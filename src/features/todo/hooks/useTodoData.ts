import todoInfo from "../../../state/stores/toDo/todo-info";

/**
 * Hook personalizado para manejar la lógica de datos de ToDo
 * Abstrae la lógica de filtrado, ordenamiento y configuración de tareas
 * Proporciona funciones para obtener tareas filtradas y configuraciones de listas
 * CRUD: Read y Update (filtrado, ordenamiento, búsqueda)
 */

export const useTodoData = () => {
  const {
    // Lista de tareas
    getIncompletedTasks,
    getFilteredIncompletedTasks,
    getTaskIncompletedConfig,
    isEmptyIncompletedTasks,

    // Lista de tareas completadas
    getFilteredCompletedTasks,
    getTaskCompletedConfig,
    isEmptyCompletedTasks,

    // Funciones de estado
    haveAnyTask,
    haveCompletedAllTasks,

    // Acciones
    setSearchTask,
    markTaskAsCompleted,
    markTaskAsIncompleted,
    deleteTaskById,
  } = todoInfo();

  return {
    // Tareas incompletas
    getIncompletedTasks,
    getFilteredIncompletedTasks,
    getTaskIncompletedConfig,
    isEmptyIncompletedTasks,
    // Tareas completadas
    getFilteredCompletedTasks,
    getTaskCompletedConfig,
    isEmptyCompletedTasks,
    // Funciones de estado
    haveAnyTask,
    haveCompletedAllTasks,
    // Acciones
    setSearchTask,
    markTaskAsCompleted,
    markTaskAsIncompleted,
    deleteTaskById,
  };
};
