import { FC } from "react";
import styles from "./FormError.module.css";

const FormError: FC<{ error: string }> = ({ error }) => {
  return error ? <span className={styles.error}>{error}</span> : null;
};
export default FormError;
