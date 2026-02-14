import { OptionProps } from "../../../../../components/Form/Option";
import { UserInfo } from "../../../../../state/stores/userInfo/types";

export type LocationFieldsProps = {
  selectedProvince: string;
  selectedCity: string;
  provinces: OptionProps[];
  cities: OptionProps[];
  errors: Record<string, string>;
  handleProvinceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProvinceClick: () => void;
};

export type UserInfoFormProps = {
  onSubmit: (e: React.FormEvent) => void;
  values: UserInfo;
  errors: Record<string, string>;
  hasChanges: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  children: React.ReactNode;
  stillNoChanges: boolean;
};
