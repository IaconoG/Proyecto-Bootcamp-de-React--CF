import { useState, useEffect } from 'react';

import { Task, PriorityTask } from '../../../Widgets/utils/types';
import { LOCAL_STORAGE_TODO } from '../../../Widgets/utils/constants';
import { INITIAL_USER_INFORMATION } from '../../../../../../utils/constants';
import { UserInformation } from '../../../../../../utils/types';

import {
  getUserInformationFromLocalStorage,
  setUserInformationToLocalStorage,
} from '../../../../../../utils/helpers';

interface ToDoDataStorageHook {
  //** Trabajamos con las tasks incompletas **//
  isEmptyIncompletedTasks: () => boolean;
  getIncompletedTasks: () => Task[];
  addIncompletedTask: (task: Task) => boolean;
  deleteIncompletedTaskById: (id: string) => boolean;
  markTaskAsCompleteById: (id: string) => boolean;
  // //** Trabajamos con las tasks completas **//
  isEmptyCompletedTasks: () => boolean;
  getCompletedTasks: () => Task[];
  addCompletedTasks: (task: Task) => boolean;
  // deleteCompletedTaskById: (id: number) => boolean;
  // markTaskAsIncompleteById: (id: number) => boolean;
  // //** Filtramos las tasks
  // filterTasksHighPriority: () => boolean;
  // filterByCreatedDate: () => boolean;
  // //** Trabajamos con todos las tasks **//
  // getTaskByName: (name: string) => Task;
  // updateTaskById: (id: number, updatedTask: Task) => {};
  haveAnyTask: () => boolean;
  haveCompletedAllTasks: () => boolean;
}

const useToDoDataStorage = (): ToDoDataStorageHook => {
  const [storedUserData, setStoredUserData] = useState<UserInformation | null>(
    INITIAL_USER_INFORMATION
  );

  useEffect(() => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    setStoredUserData(storedUserInformation);
    setUserInformationToLocalStorage(storedUserInformation);
  }, []);

  //** Trabajamos con las tasks incompletas **//
  const isEmptyIncompletedTasks = (): boolean => {
    return storedUserData?.widgetsOptions.toDo.data.incompletedTasks.length === 0;
  };
  const getIncompletedTasks = (): Task[] => {
    return storedUserData ? storedUserData?.widgetsOptions.toDo.data.incompletedTasks : [];
  };
  const addIncompletedTask = (newTask: Task): boolean => {
    if (!storedUserData) return false;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.unshift(newTask);

    setStoredUserData(updatedStoredUserData);
    setUserInformationToLocalStorage(updatedStoredUserData);
    return true;
  };
  const deleteIncompletedTaskById = (id: string): boolean => {
    console.log('deleteIncompletedTaskById', id);
    return true;
  };

  const markTaskAsCompleteById = (id: string): boolean => {
    if (!storedUserData) return false;
    // Buscamos la task a completar
    const taskToComplete = storedUserData?.widgetsOptions.toDo.data.incompletedTasks.filter(
      (task) => task.id === id
    );
    if (!taskToComplete) return false;
    return addCompletedTasks(taskToComplete[0]);
  };

  //** Trabajamos con las tasks completas **//
  const isEmptyCompletedTasks = (): boolean => {
    return storedUserData?.widgetsOptions.toDo.data.completedTasks.length === 0;
  };

  const getCompletedTasks = (): Task[] => {
    return storedUserData ? storedUserData?.widgetsOptions.toDo.data.completedTasks : [];
  };
  const addCompletedTasks = (newTask: Task): boolean => {
    if (!storedUserData) return false;

    const updatedStoredUserData = { ...storedUserData };

    // Eliminamos la tarea de incompletas
    const incompletedTasks = storedUserData.widgetsOptions.toDo.data.incompletedTasks.filter(
      (task) => task.id !== newTask.id
    );
    updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks = incompletedTasks;

    // Agregamos la tarea a completadas
    updatedStoredUserData.widgetsOptions.toDo.data.completedTasks.unshift(newTask);

    setStoredUserData(updatedStoredUserData);
    setUserInformationToLocalStorage(updatedStoredUserData);
    return true;
  };
  // const deleteCompletedTaskById = (id: number) => {};
  // const markTaskAsIncompleteById = (id: number) => {};

  //** Filtramos las tasks
  // const filterTasksHighPriority = (): boolean => {
  //   // El estado de de las tasks es el que se modifica en el localStorage y el filter
  //   const HIGH_PRIORITY: PriorityTask = 'Alta';
  //   return false;
  // };
  // const filterByCreatedDate = (): boolean => {
  //   // El estado de de las tasks es el que se modifica en el localStorage
  //   return false;
  // };

  // //** Trabajamos con todos las tasks **//
  // const getTaskByName = (name: string): Task => {};
  // // const updateTaskById = (id: number, updatedTask: Task) => {};
  const haveAnyTask = (): boolean => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    const isEmptyIncompletedTasks =
      storedUserInformation?.widgetsOptions.toDo.data.incompletedTasks.length === 0;
    const isEmptyCompletedTasks =
      storedUserInformation?.widgetsOptions.toDo.data.completedTasks.length === 0;

    return !isEmptyIncompletedTasks || !isEmptyCompletedTasks;
  };

  const haveCompletedAllTasks = (): boolean => {
    return isEmptyIncompletedTasks() && !isEmptyCompletedTasks();
  };

  return {
    isEmptyIncompletedTasks,
    getIncompletedTasks,
    addIncompletedTask,
    deleteIncompletedTaskById,
    markTaskAsCompleteById,
    isEmptyCompletedTasks,
    getCompletedTasks,
    addCompletedTasks,
    // deleteCompletedTaskById,
    // markTaskAsIncompleteById,
    // filterTasksHighPriority,
    // filterByCreatedDate,
    // getTaskByName,
    haveAnyTask,
    haveCompletedAllTasks,
  };
};

export default useToDoDataStorage;
