import Option, { OptionProps } from "../Option";

interface DatalistProps {
  id: string;
  options: Array<OptionProps>;
}

const Datalist: React.FC<DatalistProps> = ({ id, options }) => {
  return (
    <datalist id={id}>
      {options.map((option, idx) => (
        <Option key={`${idx}-${option.value}`} id={option.id} value={option.label} label={option.label} />
      ))}
    </datalist>
  );
};

export default Datalist;
