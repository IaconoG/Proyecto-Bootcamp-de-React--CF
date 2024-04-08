import styles from './Settings.module.css';
import { FaGoogleDrive } from 'react-icons/fa';

import { FormDataType, UserData } from '../../state/utils/types';

import Form from '../../components/Form';

import userInfo from '../../state/stores/user-info';

// FIXME: Eliminar este método, solo es de preuba
const handleClickClearWidgetFromLocalStorage = () => {
  localStorage.removeItem('userInformation');
  localStorage.removeItem('toDoWidget');
  window.location.reload();
};

const Settings: React.FC = () => {
  const { userData, updateUserData } = userInfo();

  const VALIDATION_RULES = {
    userName: {
      maxLength: {
        value: 50,
        message: 'El nombre de usuario no puede tener más de 50 caracteres.',
      },
    },
  };

  const handleSubmitForm: (data: FormDataType) => void = (data) => {
    data = data as UserData;
    if (
      data.userName === userData.userName &&
      data.occupation === userData.occupation
    ) {
      throw new Error(
        'No hubo necesidad de actualizar la informacion del usuario, era la misma que la anterior.'
      );
    }
    updateUserData(data);
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Informacion de Usuario</h2>
        <Form
          defaultValues={userData}
          onSubmit={handleSubmitForm}
          formLayout={styles.formLayout}
          validationRules={VALIDATION_RULES}
          resetForm={false}
        >
          <input
            type="text"
            name="userName"
            placeholder="Tu nombre de usuario"
            className={styles.input}
            maxLength={60}
          />

          <select name="occupation" className={styles.select}>
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
