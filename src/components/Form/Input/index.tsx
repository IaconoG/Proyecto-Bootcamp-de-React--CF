import React, { FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  className?: string;
}

const Input: FC<InputProps> = ({ label, htmlFor, className = "", ...props }) => {
  return <input {...props} id={htmlFor} className={styles.input} />;
};

export default Input;
