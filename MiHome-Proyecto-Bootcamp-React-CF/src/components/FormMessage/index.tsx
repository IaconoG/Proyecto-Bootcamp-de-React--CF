import styles from './FormMessage.module.css';

interface FormMessageProps {
  message: string;
  error?: boolean;
  submit?: boolean;
}

const FormMessage: React.FC<FormMessageProps> = ({ message, error, submit }) => {
  const classNames = [
    styles.messageFormContainer,
    error ? styles.errorMessageContainer : '',
    submit ? styles.submitMessageContainer : '',
  ].join(' ');

  // console.log('error', error);
  // console.log('submit', submit);
  // console.log('classNames', classNames);

  return (
    <div className={classNames}>
      <p className={styles.paragraphMessageForm}>{message}</p>
    </div>
  );
};

export default FormMessage;
