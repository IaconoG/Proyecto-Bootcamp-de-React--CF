import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import styles from './Settings.module.css';
import { FaGoogleDrive } from 'react-icons/fa';

import { UserData } from '../../utils/types';

import useUserDataFromStorage from '../../hooks/useUserDataFromStorage';

// FIXME: Eliminar este método, solo es de preuba
const handleClickClearWidgetFromLocalStorage = () => {
  localStorage.removeItem('userInformation');
  window.location.reload();
};

const Settings = (): JSX.Element => {
  const { getUserName, getUserOficio, addUserName, addUserOficio } = useUserDataFromStorage();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<UserData>();
  const [isFormUpdated, setIsFormUpdated] = useState(false);

  useEffect(() => {
    try {
      setValue('username', getUserName());
      setValue('oficio', getUserOficio());
    } catch (error) {
      console.error('Error al obtener la informacion del usuario', error);
    }
  }, [setValue, getUserName, getUserOficio]);

  const handleSubmitForm: SubmitHandler<UserData> = (data) => {
    if (data.username === getUserName() && data.oficio === getUserOficio()) return;

    addUserName(data.username);
    addUserOficio(data.oficio);
    setIsFormUpdated(true);

    setTimeout(() => {
      setIsFormUpdated(false);
    }, 1500);
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Informacion de Usuario</h3>
        <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
          <label htmlFor="username" className={styles.label}>
            <span>Username:</span>
            <input
              type="text"
              {...register('username', { maxLength: 36 })}
              placeholder="Tu nombre de usuario"
              className={styles.input}
              maxLength={30}
            />
          </label>
          <label htmlFor="oficio" className={styles.label}>
            <span>Oficio:</span>
            <select {...register('oficio')} className={styles.select}>
              <option value="" defaultChecked>
                Selecciona una opcion
              </option>
              <option value="estudiante">Estudiante</option>
              <option value="trabajador">Trabajador</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <button type="submit" value="Guardar" className={styles.submitBtn}>
            Guardar
          </button>
        </form>
        {errors.username && (
          <div className={styles.messageFormContainer + ' ' + styles.errorMessageContainer}>
            <p className={styles.paragraphMessageForm}>
              El nombre de usuario no puede tener más de 20 caracteres.
            </p>
          </div>
        )}
        {isFormUpdated && (
          <div className={styles.messageFormContainer + ' ' + styles.submitMessageContianer}>
            <p className={styles.paragraphMessageForm}>Formulario Actualizado</p>
          </div>
        )}
      </div>
      <div className={styles.container}>
        <p>Sincronizar informacion con google</p>
        <button>
          {/* XXX: Imposible :'(, pense q era mas simple*/}
          {/* TODO: Seguir buscando info y leer sobre firebase */}
          <FaGoogleDrive className={styles.googleIcon} />
          <span>Iniciar sesión en Google Drive</span>
        </button>
      </div>
      <div className={styles.container}>
        Restear informacion de la cuenta 🫠
        {/* FIXME: Elimnar el boton, solo es de prueba */}
        <div>
          <button onClick={handleClickClearWidgetFromLocalStorage}>
            <span>Clear Local Storage</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
