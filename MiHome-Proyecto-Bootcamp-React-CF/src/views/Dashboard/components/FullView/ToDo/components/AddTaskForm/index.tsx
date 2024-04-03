// import { useRef, useState } from 'react';
import styles from './AddTaskForm.module.css';

import { PriorityTask, FormNewTask } from '../../../../Widgets/utils/types';
import { FormDataType } from '../../../../../../../components/Form/utils/types';

// import useAutoSizeHeightTextArea from './hooks/useAutoSizeHeightTextArea';

import Form from '../../../../../../../components/Form';

interface AddTaskFormProps {
  onAdd: (newTask: FormNewTask) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAdd }) => {
  const defaultValues: FormNewTask = {
    title: '',
    description: '',
    priority: 'Baja',
    completed: false,
  };

  const validationRules = {
    title: {
      maxLength: {
        value: 40,
        message: 'El titulo de la tarea no puede tener mas de 40 caracteres.',
      },
      required: 'El titulo de la tarea es requerido.',
    },
    description: {
      maxLength: {
        value: 175,
        message: 'La descripcion de la tarea no puede tener mas de 175 caracteres.',
      },
    },
    priority: {
      required: 'Debe seleccionar una prioridad para la tarea.',
    },
  };

  // const [textAreaValue, setTextAreaValue] = useState<string>('');
  // const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  // useAutoSizeHeightTextArea(textAreaRef.current, textAreaValue);

  // const selectRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitForm = (data: FormDataType) => {
    data = data as FormNewTask;
    onAdd(data);
    // selectRef.current?.style.removeProperty('color');
  };

  const handleOptionSelected = (target: HTMLSelectElement) => {
    const value: PriorityTask = target.value as PriorityTask;
    if (value === 'Baja') target.style.color = 'rgba(0, 255, 0, 0.7)';
    if (value === 'Media') target.style.color = 'rgba(255, 255, 0, 0.8)';
    if (value === 'Alta') target.style.color = ' rgba(255, 0, 0, 0.9)';
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
        />
        <select
          name="priority"
          className={styles.priority}
          onChange={(e) => handleOptionSelected(e.target)}
          defaultValue={''}
          // ref={selectRef}
          id="priority-select"
        >
          <option value="" disabled hidden>
            Prioridad
          </option>
          <option value="Baja" className={styles.optionLow}>
            Baja
          </option>
          <option value="Media" className={styles.optionMedium}>
            Media
          </option>
          <option value="Alta" className={styles.optionHigh}>
            Alta
          </option>
        </select>

        <textarea
          name="description"
          placeholder="Descripcion de la Tarea"
          className={styles.description}
          // rows={1}
          maxLength={200}
          // ref={textAreaRef}
          // value={textAreaValue}
          // onChange={(e) => setTextAreaValue(e.target.value)}
        />
        <button type="submit" className={styles.formBtn}>
          Añadir
        </button>
      </Form>
    </>
  );
};

export default AddTaskForm;
