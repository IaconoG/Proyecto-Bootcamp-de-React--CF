// import { useEffect } from 'react';

// import {
//   Task,
//   TaskList,
//   PriorityTask,
//   TaskListConfig,
// } from '../../../utils/types';
// import { INITIAL_TASK_CONFIG } from '../../../utils/constants';
// import { INITIAL_USER_INFORMATION } from '../../../utils/constants';
// import { UserInformation } from '../../../utils/types';

// import {
//   getUserInformationFromLocalStorage,
//   setUserInformationToLocalStorage,
// } from '../../../utils/helpers';
// import { filterTasks } from '../utils/helpers';

// interface ToDoDataStorageHook {
//   addNewTask: (newTask: Task) => boolean;
//   //***** Trabajamos con las tasks incompletas *****//
//   isEmptyIncompletedTasks: () => boolean;
//   getIncompletedTasks: () => Task[];
//   getTaskIncompletedConfig: () => TaskListConfig;
//   setTaskIncompletedConfig: (config: TaskListConfig) => void;
//   //***** Trabajamos con las tasks completas *****//
//   isEmptyCompletedTasks: () => boolean;
//   getCompletedTasks: () => Task[];
//   getTaskCompletedConfig: () => TaskListConfig;
//   setTaskCompletedConfig: (config: TaskListConfig) => void;
//   //***** Trabajamos con todos las tasks *****//
//   // getTaskByName: (name: string) => Task;
//   // updateTaskById: (id: number, updatedTask: Task) => {};
//   haveAnyTask: () => boolean;
//   haveCompletedAllTasks: () => boolean;
//   deleteTaskById: (id: string, completed: boolean) => boolean;
//   markTaskAsIncompleteOrCompletedById: (
//     id: string,
//     completada: boolean
//   ) => boolean;
// }

// const useToDoDataStorage = () => {
//   const useToDoDataStorage = (): ToDoDataStorageHook => {
//     useEffect(() => {
//       // console.log('useEffect ToDoDataStorageHook');
//       const storedUserInformation = getUserInformationFromLocalStorage();
//       setUserInformationToLocalStorage(storedUserInformation);
//     }, []);
//     //** Trabajamos con las tasks incompletas **//
//     // const isEmptyIncompletedTasks = (): boolean => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   return (
//     //     storedUserData?.widgetsOptions.toDo.data.incompletedTasks.tasks.length ===
//     //     0
//     //   );
//     // };
//     // const getIncompletedTasks = (): Task[] => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   if (!storedUserData) return [];
//     //   const config = getTaskIncompletedConfig();
//     //   const tasks =
//     //     storedUserData.widgetsOptions.toDo.data.incompletedTasks.tasks;
//     //   return filterTasks(tasks, config);
//     // };
//     // const addNewTask = (newTask: Task): boolean => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   if (!storedUserData) return false;
//     //   const updatedStoredUserData = { ...storedUserData };
//     //   updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.tasks.unshift(
//     //     newTask
//     //   );
//     //   setUserInformationToLocalStorage(updatedStoredUserData);
//     //   return true;
//     // };
//     // const getTaskIncompletedConfig = (): TaskListConfig => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   return storedUserData
//     //     ? storedUserData?.widgetsOptions.toDo.data.incompletedTasks.config
//     //     : INITIAL_TASK_CONFIG;
//     // };
//     // const setTaskIncompletedConfig = (config: TaskListConfig): void => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   if (!storedUserData) return;
//     //   const updatedStoredUserData = { ...storedUserData };
//     //   updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.config =
//     //     config;
//     //   setUserInformationToLocalStorage(updatedStoredUserData);
//     // };
//     //***** Trabajamos con las tasks completas  *****//
//     // const isEmptyCompletedTasks = (): boolean => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   return (
//     //     storedUserData?.widgetsOptions.toDo.data.completedTasks.tasks.length === 0
//     //   );
//     // };
//     // const getCompletedTasks = (): Task[] => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   if (!storedUserData) return [];
//     //   const config = getTaskCompletedConfig();
//     //   const tasks = storedUserData.widgetsOptions.toDo.data.completedTasks.tasks;
//     //   return filterTasks(tasks, config);
//     // };
//     // const getTaskCompletedConfig = (): TaskListConfig => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   return storedUserData
//     //     ? storedUserData?.widgetsOptions.toDo.data.completedTasks.config
//     //     : INITIAL_TASK_CONFIG;
//     // };
//     // const setTaskCompletedConfig = (config: TaskListConfig): void => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   if (!storedUserData) return;
//     //   const updatedStoredUserData = { ...storedUserData };
//     //   updatedStoredUserData.widgetsOptions.toDo.data.completedTasks.config =
//     //     config;
//     //   setUserInformationToLocalStorage(updatedStoredUserData);
//     // };
//     //***** Trabajamos con todos las tasks *****//
//     // const getTaskByName = (name: string): Task => {};
//     // const updateTaskById = (id: number, updatedTask: Task) => {};
//     // const haveAnyTask = (): boolean => {
//     //   const storedUserInformation = getUserInformationFromLocalStorage();
//     //   const isEmptyIncompletedTasks =
//     //     storedUserInformation?.widgetsOptions.toDo.data.incompletedTasks.tasks
//     //       .length === 0;
//     //   const isEmptyCompletedTasks =
//     //     storedUserInformation?.widgetsOptions.toDo.data.completedTasks.tasks
//     //       .length === 0;
//     //   return !isEmptyIncompletedTasks || !isEmptyCompletedTasks;
//     // };
//     // const haveCompletedAllTasks = (): boolean => {
//     //   return isEmptyIncompletedTasks() && !isEmptyCompletedTasks();
//     // };
//     // const deleteTaskById = (id: string, completed: boolean): boolean => {
//     //   const storedUserData = getUserInformationFromLocalStorage();
//     //   if (!storedUserData) return false;
//     //   const updatedStoredUserData = { ...storedUserData };
//     //   // Obtenemos las tasks a eliminar segun si la tarea a eliminar es completada o no
//     //   const tasks = completed
//     //     ? updatedStoredUserData.widgetsOptions.toDo.data.completedTasks.tasks
//     //     : updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.tasks;
//     //   // Eliminamos la tarea
//     //   const updatedTasks = tasks.filter((task) => task.id !== id);
//     //   // Actualizamos las tasks
//     //   completed
//     //     ? (updatedStoredUserData.widgetsOptions.toDo.data.completedTasks.tasks =
//     //         updatedTasks)
//     //     : (updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.tasks =
//     //         updatedTasks);
//     //   setUserInformationToLocalStorage(updatedStoredUserData);
//     //   return true;
//     // };
//     const markTaskAsIncompleteOrCompletedById = (
//       id: string,
//       completed: boolean
//     ): boolean => {
//       const storedUserData = getUserInformationFromLocalStorage();
//       if (!storedUserData) return false;
//       // Buscamos la task a completar o incompletar
//       const taskToComplete = completed
//         ? storedUserData?.widgetsOptions.toDo.data.incompletedTasks.tasks.filter(
//             (task) => task.id === id
//           )
//         : storedUserData?.widgetsOptions.toDo.data.completedTasks.tasks.filter(
//             (task) => task.id === id
//           );
//       if (taskToComplete.length === 0) return false;
//       taskToComplete[0].completed = completed;
//       return moveTaskToCompletedOrIncompleted(taskToComplete[0], completed);
//     };
//     const moveTaskToCompletedOrIncompleted = (
//       newTask: Task,
//       completed: boolean
//     ): boolean => {
//       const storedUserData = getUserInformationFromLocalStorage();
//       if (!storedUserData) return false;
//       const updatedStoredUserData = { ...storedUserData };
//       // Eliminamos la tarea de incompletas o completadas
//       const updatedTasks = completed
//         ? storedUserData.widgetsOptions.toDo.data.incompletedTasks.tasks.filter(
//             (task) => task.id !== newTask.id
//           )
//         : storedUserData.widgetsOptions.toDo.data.completedTasks.tasks.filter(
//             (task) => task.id !== newTask.id
//           );
//       if (completed) {
//         // Actualizamos las tasks de incompletas o completadas
//         updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.tasks =
//           updatedTasks;
//         // Agregamos la tarea a completadas
//         updatedStoredUserData.widgetsOptions.toDo.data.completedTasks.tasks.unshift(
//           newTask
//         );
//       } else {
//         updatedStoredUserData.widgetsOptions.toDo.data.completedTasks.tasks =
//           updatedTasks;
//         updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.tasks.unshift(
//           newTask
//         );
//       }
//       setUserInformationToLocalStorage(updatedStoredUserData);
//       return true;
//     };
//     return {
//       addNewTask,
//       isEmptyIncompletedTasks,
//       getIncompletedTasks,
//       setTaskIncompletedConfig,
//       getTaskIncompletedConfig,
//       isEmptyCompletedTasks,
//       getCompletedTasks,
//       getTaskCompletedConfig,
//       setTaskCompletedConfig,
//       // markTaskAsIncompleteById,
//       // filterTasksHighPriority,
//       // filterByCreatedDate,
//       // getTaskByName,
//       haveAnyTask,
//       haveCompletedAllTasks,
//       deleteTaskById,
//       markTaskAsIncompleteOrCompletedById,
//     };
// };

// export default useToDoDataStorage;
