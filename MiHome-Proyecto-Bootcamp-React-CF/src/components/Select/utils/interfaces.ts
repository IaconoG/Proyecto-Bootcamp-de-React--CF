export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  name: string;
  options: Option[];
  selectStyles?: string;
  selectTextStyles?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  tabIndex?: number;
}
