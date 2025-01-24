import {
  Task,
  TaskListConfig,
} from '../../../../views/Dashboard/components/ToDo/utils/types';

export const filterTasks = (tasks: Task[], config: TaskListConfig) => {
  if (tasks.length === 0) return tasks;
  const { filter, subFilter, order } = config;
  let filteredTasks = tasks.slice();

  if (filter === 'priority' && subFilter === 'all') {
    const priorityOrder = ['high', 'medium', 'low'];
    filteredTasks = filteredTasks.sort((a, b) => {
      return (
        priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
      );
    });
  } else if (filter === 'priority') {
    filteredTasks = filteredTasks.filter((task) => task.priority === subFilter);
  }

  if (order === 'asc') filteredTasks = filteredTasks.reverse();

  // Filter by search
  if (config.search.length > 0) {
    filteredTasks = filteredTasks.filter((task) =>
      task.title.toLowerCase().includes(config.search.toLowerCase())
    );
  }

  return filteredTasks;
};
