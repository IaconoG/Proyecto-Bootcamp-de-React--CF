import Option, { TOption } from "../Option";

interface DatalistProps {
  id: string;
  options: Array<TOption>;
}

const Datalist: React.FC<DatalistProps> = ({ id, options }) => {
  return (
    <datalist id={id}>
      {options.map((option, idx) => (
        <Option key={idx} value={option.value} label={option.label} />
      ))}
    </datalist>
  );
};

export default Datalist;
