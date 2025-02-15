import React, { FC, SelectHTMLAttributes } from "react";

import styles from "./Select.module.css";

import Option, { TOption } from "../Option";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  options: Array<TOption>;
  firstValue?: TOption;
}

const Select: React.FC<SelectProps> = ({ id, options, firstValue, ...props }) => {
  return (
    <select id={id} className={styles.select} {...props}>
      {firstValue && <Option value="" label={firstValue.label} />}
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
};

export default Select;
