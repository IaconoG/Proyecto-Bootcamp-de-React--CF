import styles from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default Card;
