import React from 'react';

import AddTaskForm from './components/AddTaskForm';
import TaskListFullView from './components/TaskListFullView';

import styles from './ToDo.module.css';

import { generateId } from '../utils/helpers';
import todoInfo from '../../../state/stores/todo-info';
import { FormNewTask, Task } from '../utils/types';

import useRedirectIfWidgetNotActive from '../../../hooks/useRedirectIfWidgetNotActive';

const ToDo: React.FC = () => {
  useRedirectIfWidgetNotActive('toDo');

  const { addNewTask } = todoInfo();

  const handleAddTask = (newTaskForm: FormNewTask) => {
    const newTask: Task = {
      ...newTaskForm,
      id: generateId(newTaskForm.title),
      date: new Date(),
    };
    addNewTask(newTask, false);
  };

  return (
    <div className={styles.todoContainer}>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskListFullView />
    </div>
  );
};

export default ToDo;
