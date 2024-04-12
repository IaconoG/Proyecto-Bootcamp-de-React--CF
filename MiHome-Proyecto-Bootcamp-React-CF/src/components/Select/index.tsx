import React, { forwardRef } from 'react';
import { SelectProps } from './utils/interfaces';
import styles from './Select.module.css';

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, options, selectStyles, defaultValue, onChange, ...rest }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <select
        ref={ref}
        name={name}
        className={`${styles.select} ${selectStyles} `}
        onChange={handleChange}
        defaultValue={defaultValue}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

export default Select;

// FIXME: ELIMNAR LOS ESTILOS Y DARLE UN CLASE DE REST, LUEGO AQUEL QUE UTILICE EL COMPONENTE DEBERA DARLE LOS ESTILOS
// FIXME: DEBE SER MAS GENERICO EL SELECT E UTILIZARLO EN AddTASK Y EL FOMRULARIO DE SETTINGS
