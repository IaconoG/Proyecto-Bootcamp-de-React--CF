export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  options: Option[];
  selectStyles?: string;
  selectTextStyles?: string;
  selectArrowStyles?: string;
}
