import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormMessage from '../../components/FormMessage';

import { FormDataType, FormProps } from './utils/types';

import styles from './Form.module.css';

const Form: React.FC<FormProps> = ({ defaultValues, children, onSubmit, formLayout }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues,
  });

  const [isFormUpdated, setIsFormUpdated] = useState<boolean>(false);

  const handleFormSubmit: SubmitHandler<FormDataType> = (data) => {
    try {
      onSubmit(data);
      setIsFormUpdated(true);
      setTimeout(() => {
        setIsFormUpdated(false);
      }, 2000);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form + ' ' + formLayout}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.name) {
            if (child.type === 'button') {
              return child;
            }
            return React.createElement(child.type, {
              ...{
                ...child.props,
                ...register(child.props.name),
                key: child.props.name,
              },
            });
          }
          return child;
        })}
      </form>

      {/* {errors.username && (
        <FormMessage
          message="El nombre de usuario no puede tener más de 20 caracteres."
          error={true}
        />
      )} */}
      {isFormUpdated && <FormMessage message="Formulario Actualizado" submit={true} />}
    </>
  );
};

export default Form;
