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
  getIncompletedTasks: () => Task[];
  addIncompletedTask: (task: Task) => boolean;
  deleteIncompletedTaskById: (id: string) => void;
  // markTaskAsCompleteById: (id: number) => boolean;
  // //** Trabajamos con las tasks completas **//
  // getCompletedTasks: () => Task[];
  // addCompletedTasks: (task: Task) => boolean;
  // deleteCompletedTaskById: (id: number) => boolean;
  // markTaskAsIncompleteById: (id: number) => boolean;
  // //** Filtramos las tasks
  // filterTasksHighPriority: () => boolean;
  // filterByCreatedDate: () => boolean;
  // //** Trabajamos con todos las tasks **//
  // getTaskByName: (name: string) => Task;
  // const updateTaskById = (id: number, updatedTask: Task) => {};
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
  const getIncompletedTasks = (): Task[] => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    return storedUserInformation?.widgetsOptions.toDo.data.incompletedTasks || [];
  };
  const addIncompletedTask = (newTask: Task): boolean => {
    if (!storedUserData) return false;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.widgetsOptions.toDo.data.incompletedTasks.unshift(newTask);

    setStoredUserData(updatedStoredUserData);
    setUserInformationToLocalStorage(updatedStoredUserData);

    return true;
  };
  const deleteIncompletedTaskById = (id: string): void => {
    console.log('deleteIncompletedTaskById', id);
  };
  // const markTaskAsCompleteById = (id: number) => {};

  // //** Trabajamos con las tasks completas **//
  // const getCompletedTasks = (): Task[] => {};
  // const addCompletedTasks = (task: Task): void => {}; // unshift a incompletedTasks
  // const deleteCompletedTaskById = (id: number) => {};
  // const markTaskAsIncompleteById = (id: number) => {};

  // //** Filtramos las tasks
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

  return {
    getIncompletedTasks,
    addIncompletedTask,
    deleteIncompletedTaskById,
    // markTaskAsCompleteById,
    // getCompletedTasks,
    // addCompletedTasks,
    // deleteCompletedTaskById,
    // markTaskAsIncompleteById,
    // filterTasksHighPriority,
    // filterByCreatedDate,
    // getTaskByName,
  };
};

export default useToDoDataStorage;
