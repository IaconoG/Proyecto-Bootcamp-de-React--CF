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
          maxLength={175}
          // ref={textAreaRef}
          // value={textAreaValue}
          // onChange={(e) => setTextAreaValue(e.target.value)}
        />
        <button type="submit" className={styles.formBtn}>
          Añadir
        </button>
      </Form>
      {/* <form onSubmit={handleSubmit(onSubmitForm)} className={styles.form}>
        <div className={styles.containerData}>
          <div className={styles.dataHeader}>
            <input
              type="text"
              placeholder="Título de la Tarea"
              {...register('title', { required: true, maxLength: 40 })}
              maxLength={40}
              // ref={selectRef}
              className={styles.title}
            />
            <select
              {...register('priority', { required: true })}
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
          </div>

          <textarea
            placeholder="Descripcion de la Tarea"
            {...register('description', { maxLength: 175 })}
            className={styles.description}
            // rows={1}
            maxLength={175}
            // ref={textAreaRef}
            // value={textAreaValue}
            // onChange={(e) => setTextAreaValue(e.target.value)}
          />
        </div>
        <div className={styles.containerButtons}>
          {errors.title?.type === 'required' && <span>El campo title es requerido</span>}
          {errors.title?.type === 'maxLength' && (
            <span>El campo title no puede superar los 40 caracteres</span>
          )}
          {errors.description?.type === 'maxLength' && (
            <span>El campo description no puede superar los 150 caracteres</span>
          )}
          <button type="submit" className={styles.formBtn}>
            Añadir
          </button>
        </div>
      </form> */}
    </>
  );
};

export default AddTaskForm;
