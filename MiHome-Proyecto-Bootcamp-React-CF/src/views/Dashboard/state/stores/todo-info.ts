import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Task, TaskListConfig, ToDo } from '../../components/ToDo/utils/types';
import { WidgetTitle } from '../../../../state/utils/types';
import {
  INITIAL_TASK_CONFIG,
  INITIAL_TODO_STATE,
  LOCAL_STORAGE_TODO,
} from '../../components/ToDo/utils/constants';
import { filterTasks } from '../utils/helpers';

type Actions = {
  getTitle: () => WidgetTitle;
  addNewTask: (newTask: Task, completed: boolean) => void;
  //***** Trabajamos con las tasks incompletas *****//
  getIncompletedTasks: () => Task[] | [];
  getTaskIncompletedConfig: () => TaskListConfig;
  getFilteredIncompletedTasks: () => Task[] | [];
  isEmptyIncompletedTasks: () => boolean;
  setTaskIncompletedConfig: (config: TaskListConfig) => void;
  //***** Trabajamos con las tasks completas *****//
  getCompletedTasks: () => Task[] | [];
  getTaskCompletedConfig: () => TaskListConfig;
  getFilteredCompletedTasks: () => Task[] | [];
  isEmptyCompletedTasks: () => boolean;
  setTaskCompletedConfig: (config: TaskListConfig) => void;
  //***** Trabajamos con todos las tasks *****//
  getTaskById: (id: string) => Task | undefined;
  setSearchTask: (title: string) => void;
  // updateTaskById: (id: number, updatedTask: Task) => {};
  haveAnyTask: () => boolean;
  haveCompletedAllTasks: () => boolean;
  deleteTaskById: (id: string, completed: boolean) => void;
  markTaskAsIncompleteOrCompletedById: (id: string) => void;
};

type State = ToDo;

const todoInfo = create<State & Actions>()(
  immer(
    persist(
      (set, get) => ({
        ...INITIAL_TODO_STATE,
        getTitle: () => get().title,
        addNewTask: (newTask: Task, completed: boolean) => {
          set((state) => {
            if (completed) state.data.completedTasks.tasks.unshift(newTask);
            else state.data.incompletedTasks.tasks.unshift(newTask);
          });
        },

        //***** Trabajamos con las tasks incompletas *****//
        getIncompletedTasks: () => {
          return get().data.incompletedTasks.tasks || [];
        },
        getTaskIncompletedConfig: () => {
          return get().data.incompletedTasks.config || INITIAL_TASK_CONFIG;
        },
        getFilteredIncompletedTasks: () => {
          return filterTasks(
            get().getIncompletedTasks(),
            get().getTaskIncompletedConfig()
          );
        },
        isEmptyIncompletedTasks: () => {
          const storedIncompleteTasks = get().getIncompletedTasks();
          return storedIncompleteTasks.length === 0;
        },
        setTaskIncompletedConfig: (config: TaskListConfig) => {
          set((state) => {
            state.data.incompletedTasks.config = config;
          });
        },

        //***** Trabajamos con las tasks completas *****//
        getCompletedTasks: () => {
          return get().data.completedTasks.tasks || [];
        },
        getTaskCompletedConfig: () => {
          return get().data.completedTasks.config || INITIAL_TASK_CONFIG;
        },
        getFilteredCompletedTasks: () => {
          return filterTasks(
            get().getCompletedTasks(),
            get().getTaskCompletedConfig()
          );
        },
        isEmptyCompletedTasks: () => {
          const storedCompletedTasks = get().getCompletedTasks();
          return storedCompletedTasks.length === 0;
        },
        setTaskCompletedConfig: (config: TaskListConfig) => {
          set((state) => {
            state.data.completedTasks.config = config;
          });
        },

        //***** Trabajamos con todos las tasks *****//
        haveAnyTask: () => {
          return (
            !get().isEmptyIncompletedTasks() || !get().isEmptyCompletedTasks()
          );
        },
        haveCompletedAllTasks: () => {
          return (
            get().isEmptyIncompletedTasks() && !get().isEmptyCompletedTasks()
          );
        },
        getTaskById: (id: string) => {
          const task = get()
            .getIncompletedTasks()
            .find((task) => task.id === id);
          if (task) return task;
          return get()
            .getCompletedTasks()
            .find((task) => task.id === id);
        },
        setSearchTask: (search: string) => {
          set((state) => {
            state.data.completedTasks.config.search = search;
            state.data.incompletedTasks.config.search = search;
          });
        },

        deleteTaskById: (id: string, completed: boolean) => {
          set((state) => {
            if (completed) {
              state.data.completedTasks.tasks =
                state.data.completedTasks.tasks.filter(
                  (task) => task.id !== id
                );
            } else {
              console.log('delete id', id);
              state.data.incompletedTasks.tasks =
                state.data.incompletedTasks.tasks.filter(
                  (task) => task.id !== id
                );
            }
          });
        },
        markTaskAsIncompleteOrCompletedById: (id: string) => {
          set((state) => {
            // Buscamos la task
            const task = state.getTaskById(id);

            // Si no existe la task, no hacemos nada
            if (!task) return;

            // XXX: :((((
            // get().deleteTaskById(id, task.completed);
            // state.addNewTask(task, !task.completed);

            // Eliminamos la task de la lista de tasks
            // XXX: No se porque no funciona cunado llamamos a deleteTaskById directamente :(
            // set((en vez de STATE enviar la info [probar esto]) ) => {
            if (task.completed) {
              state.data.completedTasks.tasks =
                state.data.completedTasks.tasks.filter(
                  (task) => task.id !== id
                );
            } else {
              console.log('delete id', id);
              state.data.incompletedTasks.tasks =
                state.data.incompletedTasks.tasks.filter(
                  (task) => task.id !== id
                );
            }

            // Cambiamos el estado de la task
            const updatedTask = { ...task, completed: !task.completed };

            // Añadimos la task a la lista de tasks correspondiente
            // XXX: No se porque no funciona cunado llamamos a addNewTask directamente :(
            if (updatedTask.completed)
              state.data.completedTasks.tasks.unshift(updatedTask);
            else state.data.incompletedTasks.tasks.unshift(updatedTask);
          });
        },

        //
      }),
      {
        name: LOCAL_STORAGE_TODO,
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default todoInfo;
