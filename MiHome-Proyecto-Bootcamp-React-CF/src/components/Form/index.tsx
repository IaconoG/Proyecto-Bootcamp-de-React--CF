import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormMessage from '../../components/FormMessage';

import { FormDataType, FormProps } from './utils/types';

import styles from './Form.module.css';

const Form: React.FC<FormProps> = ({
  defaultValues,
  children,
  onSubmit,
  formLayout,
  validationRules = {},
  resetForm = true,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
      }, 1500);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
    if (resetForm) reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={formLayout + ' ' + styles.form}
      >
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            child.props.name &&
            child.props.type !== 'button'
          ) {
            return React.createElement(child.type, {
              ...{
                ...child.props,
                ...register(child.props.name, {
                  ...validationRules[child.props.name],
                }),
                key: child.props.name,
              },
            });
          }
          return child;
        })}
        {isFormUpdated && (
          <FormMessage message="Formulario Actualizado" submit={true} />
        )}

        {errors && Object.keys(errors).length !== 0 && (
          <>
            {Object.keys(errors).map((key) => (
              <FormMessage
                key={key}
                message={errors[key as keyof FormDataType]['message']}
                error={true}
              />
            ))}
          </>
        )}
      </form>
    </>
  );
};

export default Form;
