import React, { SelectHTMLAttributes } from "react";

import styles from "./Select.module.css";

import Option, { OptionProps } from "../Option";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: Array<OptionProps>;
  firstValue?: OptionProps;
}

const Select: React.FC<SelectProps> = ({ id, options, firstValue, ...props }) => {
  return (
    <select id={id} className={styles.select} {...props}>
      {firstValue && <Option id={firstValue.id} value="" label={firstValue.label} />}
      {options.map((option) => (
        <Option id={option.id} key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
};

export default Select;
