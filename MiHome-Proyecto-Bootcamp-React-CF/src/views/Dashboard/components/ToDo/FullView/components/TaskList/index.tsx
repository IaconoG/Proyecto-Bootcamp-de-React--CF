import React, { useState } from 'react';
import TaskItem from '../TaskItem';
import Select from '../../../../../../../components/Select';

import { Option } from '../../../../../../../components/Select/utils/interfaces';

import styles from './TaksList.module.css';
import { IoIosArrowUp } from 'react-icons/io';

// import useToDoDataStorage from '../../../hooks/useToDoDataStorage';
import todoInfo from '../../../../../state/stores/todo-info';
import {
  PriorityTask,
  Task,
  TaskFilter,
  TaskListConfig,
} from '../../../utils/types';

interface TaskListProps {}

const TaksList: React.FC<TaskListProps> = () => {
  const {
    //
    haveAnyTask,
    haveCompletedAllTasks,
    deleteTaskById,
    markTaskAsIncompleteOrCompletedById,
    //
    getFilteredIncompletedTasks,
    getTaskIncompletedConfig,
    isEmptyIncompletedTasks,
    setTaskIncompletedConfig,
    //
    getFilteredCompletedTasks,
    getTaskCompletedConfig,
    isEmptyCompletedTasks,
    setTaskCompletedConfig,
  } = todoInfo();

  const completedConfig: TaskListConfig = getTaskCompletedConfig();
  const incompletedConfig: TaskListConfig = getTaskIncompletedConfig();
  const completedTask: Task[] = getFilteredCompletedTasks();
  const incompletedTask: Task[] = getFilteredIncompletedTasks();

  const filterOptions: Option[] = [
    { value: 'date', label: 'Fecha' },
    { value: 'priority', label: 'Prioridad' },
  ];
  const priorityOptions: Option[] = [
    { value: 'all', label: 'Todas' },
    { value: 'high', label: 'Alto' },
    { value: 'medium', label: 'Medio' },
    { value: 'low', label: 'Baja' },
  ];
  const messagesEsp: { [key: string]: string } = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
  };

  const [isPriorityOfIncompletedSelected, setIsPriorityOfIncompletedSelected] =
    useState(incompletedConfig.filter === 'priority');
  const [isPriorityOfCompletedSelected, setIsPriorityOfCompletedSelected] =
    useState(completedConfig.filter === 'priority');

  const handleChangeFilter = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    const newFilter = event.target.value as TaskFilter;
    const isPrioritySelected = newFilter === 'priority';
    if (type === 'completed') {
      setIsPriorityOfCompletedSelected(isPrioritySelected);
      setTaskCompletedConfig({
        ...completedConfig,
        filter: newFilter,
      });
    } else {
      setIsPriorityOfIncompletedSelected(isPrioritySelected);
      setTaskIncompletedConfig({
        ...incompletedConfig,
        filter: newFilter,
      });
    }
  };

  const handleChangeSubFilter = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string
  ) => {
    const newSubFilter = event.target.value as PriorityTask;
    if (type === 'completed') {
      setTaskCompletedConfig({
        ...completedConfig,
        subFilter: newSubFilter,
      });
    } else {
      setTaskIncompletedConfig({
        ...incompletedConfig,
        subFilter: newSubFilter,
      });
    }
  };

  const handelClickOrder = (type: string) => {
    if (type === 'incompleted') {
      const newOrder = incompletedConfig.order === 'asc' ? 'desc' : 'asc';
      setTaskIncompletedConfig({ ...incompletedConfig, order: newOrder });
    } else {
      const newOrder = completedConfig.order === 'asc' ? 'desc' : 'asc';
      setTaskCompletedConfig({ ...completedConfig, order: newOrder });
    }
  };

  const handelCompleteTask = (id: string) => {
    markTaskAsIncompleteOrCompletedById(id);
  };
  const handleDeleteTask = (id: string, completed: boolean) => {
    deleteTaskById(id, completed);
  };

  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.title}>Lista de tareas</h2>
      <div className={styles.tasksList}>
        {!haveAnyTask() ? (
          <div className={styles.messageContainer}>
            <p className={styles.message}>No hay tareas 😴</p>
          </div>
        ) : (
          <>
            {haveCompletedAllTasks() && (
              <div className={styles.messageContainer}>
                <p className={styles.message}>
                  Completaste todas tus tareas 🥳
                </p>
              </div>
            )}
            {!isEmptyIncompletedTasks() && (
              <>
                <div className={styles.taskHeaderContainer}>
                  <h3 className={styles.subtitles}>Tareas incompletas</h3>
                  <div className={styles.orderAndFilterContainer}>
                    <div className={styles.filterContainer}>
                      <Select
                        name="Filter"
                        defaultValue={incompletedConfig.filter}
                        options={filterOptions}
                        selectStyles={styles.selectStyles}
                        selectTextStyles={styles.selectTextStyles}
                        selectArrowStyles={styles.selectArrowStyles}
                        onChange={(event) => {
                          handleChangeFilter(event, 'incompleted');
                        }}
                      />
                      {isPriorityOfIncompletedSelected && (
                        <Select
                          name="PriorityOptions"
                          defaultValue={incompletedConfig.subFilter}
                          options={priorityOptions}
                          selectStyles={styles.selectStyles}
                          selectTextStyles={styles.selectTextStyles}
                          selectArrowStyles={styles.selectArrowStyles}
                          onChange={(event) => {
                            handleChangeSubFilter(event, 'incompleted');
                          }}
                        />
                      )}
                    </div>
                    <div
                      className={`${styles.orderContainer} ${
                        incompletedConfig.order === 'desc' ? styles.desc : ''
                      }  `}
                      onClick={() => handelClickOrder('incompleted')}
                    >
                      <span>Orden</span>
                      <IoIosArrowUp />
                    </div>
                  </div>
                </div>
                {incompletedTask.length === 0 ? (
                  <div className={styles.messageContainer}>
                    <p className={styles.message}>
                      No hay tareas de prioridad{' '}
                      {messagesEsp[incompletedConfig.subFilter]}
                    </p>
                  </div>
                ) : (
                  <>
                    {incompletedTask.map((task) => (
                      <TaskItem
                        key={task.id}
                        {...task}
                        onDelete={handleDeleteTask}
                        onComplete={handelCompleteTask}
                      />
                    ))}
                  </>
                )}
              </>
            )}
            {!isEmptyCompletedTasks() && (
              <>
                <div className={styles.taskHeaderContainer}>
                  <h3 className={styles.subtitles}>Tareas completas</h3>
                  <div className={styles.orderAndFilterContainer}>
                    <div className={styles.filterContainer}>
                      <Select
                        name="Filter"
                        defaultValue={completedConfig.filter}
                        options={filterOptions}
                        selectStyles={styles.selectStyles}
                        selectTextStyles={styles.selectTextStyles}
                        selectArrowStyles={styles.selectArrowStyles}
                        onChange={(event) => {
                          handleChangeFilter(event, 'completed');
                        }}
                      />
                      {isPriorityOfCompletedSelected && (
                        <Select
                          name="PriorityOptions"
                          defaultValue={completedConfig.subFilter}
                          options={priorityOptions}
                          selectStyles={styles.selectStyles}
                          selectTextStyles={styles.selectTextStyles}
                          selectArrowStyles={styles.selectArrowStyles}
                          onChange={(event) => {
                            handleChangeSubFilter(event, 'completed');
                          }}
                        />
                      )}
                    </div>

                    <div
                      className={`${styles.orderContainer} ${
                        completedConfig.order === 'desc'
                          ? styles.desc
                          : styles.asc
                      }  `}
                      onClick={() => handelClickOrder('completed')}
                    >
                      <span>Orden</span>
                      <IoIosArrowUp />
                    </div>
                  </div>
                </div>
                {completedTask.length === 0 ? (
                  <div className={styles.messageContainer}>
                    <p className={styles.message}>
                      No hay tareas de prioridad{' '}
                      {messagesEsp[completedConfig.subFilter]}
                    </p>
                  </div>
                ) : (
                  <>
                    {completedTask.map((task) => (
                      <TaskItem
                        key={task.id}
                        {...task}
                        onDelete={handleDeleteTask}
                        onComplete={handelCompleteTask}
                      />
                    ))}
                  </>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TaksList;
