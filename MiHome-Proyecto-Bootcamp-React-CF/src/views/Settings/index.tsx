import { useEffect, useState } from 'react';

import styles from './Settings.module.css';
import { FaGoogleDrive } from 'react-icons/fa';

import { FormDataType } from '../../components/Form/utils/types';
import { UserData } from '../../utils/types';

import useUserDataFromStorage from '../../hooks/useUserDataFromStorage';

import Form from '../../components/Form';

// FIXME: Eliminar este método, solo es de preuba
const handleClickClearWidgetFromLocalStorage = () => {
  localStorage.removeItem('userInformation');
  window.location.reload();
};

const Settings = (): JSX.Element => {
  const { getUserName, getUserOficio, addUserName, addUserOficio } = useUserDataFromStorage();

  const [defaultValues, setDefaultValues] = useState<UserData>({
    username: getUserName(),
    oficio: getUserOficio(),
  });

  const validationRules = {
    username: {
      maxLength: {
        value: 50,
        message: 'El nombre de usuario no puede tener más de 50 caracteres.',
      },
    },
    oficio: {
      required: 'Debe seleccionar un oficio.',
    },
  };

  useEffect(() => {
    try {
      setDefaultValues({
        username: getUserName(),
        oficio: getUserOficio(),
      });
    } catch (error) {
      console.error('Error al obtener la informacion del usuario', error);
    }
  }, []);

  const handleSubmitForm: (data: FormDataType) => void = (data) => {
    console.log('data:', data);

    data = data as UserData;
    if (data.username === getUserName() && data.oficio === getUserOficio()) {
      throw new Error(
        'No hubo necesidad de actualizar la informacion del usuario, era la misma que la anterior.'
      );
    }
    addUserName(data.username);
    addUserOficio(data.oficio);
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Informacion de Usuario</h2>
        <Form
          defaultValues={defaultValues}
          onSubmit={handleSubmitForm}
          formLayout={styles.formLayout}
          validationRules={validationRules}
        >
          <input
            type="text"
            name="username"
            placeholder="Tu nombre de usuario"
            className={styles.input}
            maxLength={60}
          />

          <select name="oficio" className={styles.select}>
            <option value="">Selecciona una opcion</option>
            <option value="estudiante">Estudiante</option>
            <option value="trabajador">Trabajador</option>
            <option value="otro">Otro</option>
          </select>

          <button type="submit" className={styles.btn}>
            Guardar
          </button>
        </Form>
      </div>
      <div className={styles.container}>
        <h3>Sincronizar informacion con google</h3>
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
