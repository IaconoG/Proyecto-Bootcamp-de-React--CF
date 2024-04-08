import { UserData } from '../../../state/utils/types';
import { FormNewTask } from '../../../views/Dashboard/utils/types';

export type FormDataType = UserData | FormNewTask;

export interface FormProps {
  defaultValues: FormDataType;
  children: React.ReactNode;
  onSubmit: (data: FormDataType) => void;
  formLayout?: string;
  validationRules?: Record<string, Record<string, unknown>>;
  resetForm?: boolean;
}
