import React from "react";
import styles from "./Select.module.css";

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  id?: string; // FIXME: Eliminar el 'optional'. Luego enviar el id a el componente cada vez que se utilice
  name: string;
  options: Option[];
  className?: string;
  selectTextStyles?: string;
  defaultValue?: string;
  tabIndex?: number;
}

const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  defaultValue,
  className,

  // FIXME: Atrapar childs para que los options no esten aca
}) => {
  console.log("Options: ", options);
  return (
    <select
      id={id}
      defaultValue={defaultValue}
      name={name}
      className={styles.select + " " + className}
    >
      {}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

// FIXME: ELIMNAR LOS ESTILOS Y DARLE UN CLASE DE REST, LUEGO AQUEL QUE UTILICE EL COMPONENTE DEBERA DARLE LOS ESTILOS
// FIXME: DEBE SER MAS GENERICO EL SELECT E UTILIZARLO EN AddTASK Y EL FOMRULARIO DE SETTINGS
