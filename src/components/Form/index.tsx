import styles from "./Form.module.css";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
};

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
