import styles from './Alert.module.css';

import { IoClose } from 'react-icons/io5';

type InfoBtns = { message: string; accion: () => void; priority: boolean }[];

interface AlertProps {
  message: string;
  infoBtns: InfoBtns;
}

const CustomAlert: React.FunctionComponent<AlertProps> = ({ message, infoBtns }) => {
  return (
    <div className={styles.alertContainer}>
      <div className={styles.iconContainer}>
        <IoClose />
      </div>
      <div className={styles.alertMessage}>{message}</div>
      <div className={styles.alertCointainerBtns}>
        {infoBtns.map((infoBtn, idx) => (
          <button
            key={idx}
            onClick={infoBtn.accion}
            className={`${styles.alertBtn} ${infoBtn.priority ? styles.alertBtnPriority : ''}`}
          >
            {infoBtn.message}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomAlert;
