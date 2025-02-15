import styles from "./Label.module.css";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  label: string;
  htmlFor?: string;
  className?: string;
  hidden?: boolean;
};

const Label: React.FC<LabelProps> = ({ label, htmlFor, className = "", hidden, ...props }) => {
  return (
    <label
      className={`${styles.label} ${hidden ? styles.hidden : ""} ${className}`}
      htmlFor={htmlFor}
      {...props}
    >
      {label}
    </label>
  );
};

export default Label;
