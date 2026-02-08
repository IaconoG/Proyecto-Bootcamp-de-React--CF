import { OptionProps } from "../components/Form/Option";
// import { ToDoProps } from "../components/ToDo/ToDo";

interface SortOptions {
  options: OptionProps[];
  ascending?: boolean;
}

// Ordenar alfabéticamente (A-Z o Z-A) | Province | City | ToDo
export const sortAlphabetically = ({ options, ascending = true }: SortOptions): OptionProps[] => {
  return [...options].sort((a, b) => {
    const first = a.label.toLowerCase();
    const second = b.label.toLowerCase();
    return ascending ? first.localeCompare(second) : second.localeCompare(first);
  });
};

// Ordenar numéricamente por id | Province | City | ToDo
export const sortNumerically = ({ options, ascending = true }: SortOptions): OptionProps[] => {
  return [...options].sort((a, b) => {
    const first = Number(a.id);
    const second = Number(b.id);
    return ascending ? first - second : second - first;
  });
};

// Ordenar por fecha de creación | ToDo
// export const sortByDate = ({options, ascending = true}: SortOptions): ToDoProps[] => {
//   return [...options].sort((a, b) => {
//     const dateA = new Date(a.date).getTime();
//     const dateB = new Date(b.date).getTime();
//     return ascending ? dateA - dateB : dateB - dateA;
//   });
// };
