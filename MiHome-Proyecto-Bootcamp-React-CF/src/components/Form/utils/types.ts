import { UserData } from '../../../utils/types';
import { FormNewTask } from '../../../views/Dashboard/components/Widgets/utils/types';

export type FormDataType = UserData | FormNewTask;

export interface FormProps {
  defaultValues: FormDataType;
  children: React.ReactNode;
  onSubmit: (data: FormDataType) => void;
  formLayout?: string;
  validationRules?: Record<string, Record<string, unknown>>;
}
