import { Options } from "../../state/utils/types";

type DatalistProps = {
  id: string;
  options: Options[];
  placeholder?: string;
  styles?: string;
};

const Datalist: React.FC<DatalistProps> = ({ id, options, styles }) => {
  return (
    <datalist id={id} className={styles}>
      {options.map((option) => (
        <option key={option.id} value={option.value} />
      ))}
    </datalist>
  );
};

export default Datalist;
