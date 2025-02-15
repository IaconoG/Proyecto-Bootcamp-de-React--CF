export interface TOption {
  value: string;
  label: string;
}

type OptionProps = TOption;

const Option: React.FC<OptionProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

export default Option;
