// TODO: Los estilos del componente deben ser especificados en las propiedades del componente.
import { SelectProps } from './utils/interfaces';
import styles from './Select.module.css';

const Select: React.FC<SelectProps & React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  options,
  selectStyles, // tama;o se modifica con min-width y min-height
  selectTextStyles,
  selectArrowStyles,
  defaultValue,
  onChange,
  ...rest
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={selectStyles + ' ' + selectArrowStyles + ' ' + styles.customSelect}>
      <select
        {...rest}
        className={selectTextStyles + ' ' + styles.select}
        onChange={handleChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
