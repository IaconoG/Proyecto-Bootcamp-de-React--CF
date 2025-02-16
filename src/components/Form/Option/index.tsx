export type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {
  id: string;
  value: string;
  label: string;
};

const Option: React.FC<OptionProps> = ({ id, value, label }) => {
  return (
    <option id={id} value={value}>
      {label}
    </option>
  );
};

export default Option;
