import { Option } from "../../../../../../components/Select/utils/interfaces";
import { PriorityTask, TaskFilter, TaskListConfig } from "../../utils/types";
import Select from "../../../../../../components/Select";
import todoInfo from "../../../../../../state/stores/toDo/todo-info";
import { IoIosArrowUp } from "react-icons/io";

import styles from "./FilterAndOrderControls.module.css";

import { useState } from "react";

interface FilterAndOrderControlsProps {
  title?: string;
  config: TaskListConfig;
  typeTask: "incompleted" | "completed";
  selectStyles?: string;
}

const filterOptions: Option[] = [
  { value: "date", label: "Fecha" },
  { value: "priority", label: "Prioridad" },
];
const priorityOptions: Option[] = [
  { value: "all", label: "Todas" },
  { value: "high", label: "Alto" },
  { value: "medium", label: "Medio" },
  { value: "low", label: "Baja" },
];

const FilterAndOrderControls: React.FC<FilterAndOrderControlsProps> = ({
  title,
  config,
  selectStyles,
  typeTask,
}) => {
  const { filter, subFilter, order } = config;
  const { setTaskCompletedConfig, setTaskIncompletedConfig } = todoInfo();

  const [isPrioritySelected, setIsPrioritySelected] = useState(
    filter === "priority"
  );

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = event.target.value as TaskFilter;
    const isPrioritySelected = newFilter === "priority";
    if (typeTask === "completed") {
      setIsPrioritySelected(isPrioritySelected);
      setTaskCompletedConfig({
        ...config,
        filter: newFilter,
      });
    } else {
      setIsPrioritySelected(isPrioritySelected);
      setTaskIncompletedConfig({
        ...config,
        filter: newFilter,
      });
    }
  };

  const handleChangeSubFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSubFilter = event.target.value as PriorityTask;
    if (typeTask === "completed") {
      setTaskCompletedConfig({
        ...config,
        subFilter: newSubFilter,
      });
    } else {
      setTaskIncompletedConfig({
        ...config,
        subFilter: newSubFilter,
      });
    }
  };
  const handelClickOrder = () => {
    const newOrder = order === "asc" ? "desc" : "asc";
    if (typeTask === "incompleted")
      setTaskIncompletedConfig({ ...config, order: newOrder });
    else setTaskCompletedConfig({ ...config, order: newOrder });
  };

  return (
    <div className={styles.taskHeaderContainer}>
      <h3 className={styles.subtitles}>{title}</h3>
      <div className={styles.orderAndFilterContainer}>
        <div className={styles.filterContainer}>
          <Select
            name="Filter"
            defaultValue={filter}
            options={filterOptions}
            onChange={(event) => {
              handleChangeFilter(event);
            }}
            className={selectStyles}
          />
          {isPrioritySelected && (
            <Select
              name="PriorityOptions"
              defaultValue={subFilter}
              options={priorityOptions}
              className={selectStyles}
              onChange={(event) => {
                handleChangeSubFilter(event);
              }}
            />
          )}
        </div>
        <div
          className={`${styles.orderContainer} ${
            order === "desc" ? styles.desc : ""
          }  `}
          onClick={handelClickOrder}
        >
          <span>Orden</span>
          <IoIosArrowUp />
        </div>
      </div>
    </div>
  );
};

export default FilterAndOrderControls;
