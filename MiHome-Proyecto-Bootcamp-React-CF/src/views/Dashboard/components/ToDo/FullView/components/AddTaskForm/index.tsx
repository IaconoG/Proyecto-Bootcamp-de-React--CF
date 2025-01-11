import styles from "./AddTaskForm.module.css";

// import useAutoSizeHeightTextArea from './hooks/useAutoSizeHeightTextArea';

import Form from "../../../../../../../components/Form";
import { FormNewTask } from "../../../utils/types";
import { FormDataType } from "../../../../../../../state/utils/types";
import Select from "../../../../../../../components/Select";

interface AddTaskFormProps {
  onAdd: (newTask: FormNewTask, completed: boolean) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const defaultValues: FormNewTask = {
    title: "",
    description: "",
    priority: "low",
    completed: false,
  };

  const validationRules = {
    title: {
      maxLength: {
        value: 40,
        message: "El titulo de la tarea no puede tener mas de 40 caracteres.",
      },
      required: "El titulo de la tarea es requerido.",
    },
    description: {
      maxLength: {
        value: 175,
        message:
          "La descripcion de la tarea no puede tener mas de 175 caracteres.",
      },
    },
  };

  // const [textAreaValue, setTextAreaValue] = useState<string>('');
  // const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  // useAutoSizeHeightTextArea(textAreaRef.current, textAreaValue);

  // const selectRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitForm = (data: FormDataType) => {
    data = data as FormNewTask;
    onAdd(data, false);
    // selectRef.current?.style.removeProperty('color');
  };

  return (
    <>
      <Form
        defaultValues={defaultValues}
        onSubmit={handleSubmitForm}
        formLayout={styles.formLayout}
        validationRules={validationRules}
      >
        <input
          type="text"
          name="title"
          placeholder="Título de la Tarea"
          maxLength={40}
          // ref={selectRef}
          className={styles.title}
          tabIndex={1}
        />
        <Select
          name="priority"
          options={[
            { value: "low", label: "Baja" },
            { value: "medium", label: "Media" },
            { value: "high", label: "Alta" },
          ]}
          className={styles.priority}
          defaultValue="low"
          tabIndex={3}
        />
        <textarea
          name="description"
          placeholder="Descripcion de la Tarea"
          className={styles.description}
          // rows={1}
          maxLength={200}
          // ref={textAreaRef}
          // value={textAreaValue}
          // onChange={(e) => setTextAreaValue(e.target.value)}
          tabIndex={2}
        />
        <button type="submit" className={styles.formBtn} tabIndex={4}>
          Añadir
        </button>
      </Form>
    </>
  );
};

export default AddTaskForm;
