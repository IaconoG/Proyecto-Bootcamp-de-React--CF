import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './Settings.module.css';
import { FaGoogleDrive } from 'react-icons/fa';

import { UserData } from '../../utils/types';

import useUserDataFromStorage from '../../hooks/useUserDataFromStorage';

import { useEffect } from 'react';

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

  useEffect(() => {
    setValue('username', getUserName());
    setValue('oficio', getUserOficio());
  }, [setValue]); // FIXME: Porque me pide las otras dependencias?

  // const onSubmit = (data: DataFormUser) => {
  const handleSubmitForm: SubmitHandler<UserData> = (data) => {
    addUserName(data.username);
    addUserOficio(data.oficio);
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Informacion de Usuario</h3>
        <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
          <label htmlFor="username">
            <span>Username:</span>
            <input
              type="text"
              {...register('username', { maxLength: 20 })}
              placeholder="Tu nombre de usuario"
            />
          </label>
          <label htmlFor="oficio">
            <span>Oficio:</span>
            <select {...register('oficio')}>
              <option value="" defaultChecked>
                Selecciona una opcion
              </option>
              <option value="estudiante">Estudiante</option>
              <option value="trabajador">Trabajador</option>
              <option value="otro">Otro</option>
            </select>
          </label>
          <input type="submit" value="Guardar" className={styles.submitBtn} />
        </form>
        {errors.username && (
          <div className={styles.errorFormContainer}>
            <p className={styles.paragraphErroForm}>
              El nombre de usuario no puede tener más de 20 caracteres.
            </p>
          </div>
        )}
      </div>
      <div className={styles.container}>
        <p>Sincronizar informacion con google</p>
        <button>
          {/* XXX: Imposible :(, pense q era mas simple*/}
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
