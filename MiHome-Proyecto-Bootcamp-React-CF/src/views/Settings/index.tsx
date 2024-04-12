import styles from './Settings.module.css';
import { FaGoogleDrive } from 'react-icons/fa';

import { FormDataType, UserData } from '../../state/utils/types';

import Form from '../../components/Form';

import userInfo from '../../state/stores/user-info';
import Select from '../../components/Select';
import { Option } from '../../components/Select/utils/interfaces';

// FIXME: Eliminar este método, solo es de preuba
const handleClickClearWidgetFromLocalStorage = () => {
  localStorage.removeItem('userInformation');
  localStorage.removeItem('toDoWidget');
  window.location.reload();
};

const selectOptions: Option[] = [
  { value: '', label: 'Selecciona una opcion' },
  { value: 'estudiante', label: 'Estudiante' },
  { value: 'trabajador', label: 'Trabajador' },
  { value: 'otro', label: 'Otro' },
];

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
          <Select
            options={selectOptions}
            name="occupation"
            selectStyles={styles.select}
          />

          <button type="submit" className={styles.btn}>
            Guardar
          </button>
        </Form>
      </div>
      <div className={styles.container}>
        <h2>Proximamente sincronizar informacion con google drive</h2>
        <div>
          <p className={styles.desciption}>
            Al iniciar sesion con google, MiHome solo podra ver, editar, crear y
            borrar los archivos específicos que utiliza la app. Los mismo son
            utilizados para almacenar y sincronizar tu informacion de MiHome.
          </p>
          <p>MiHome no tiene acceso a tus archivos personales</p>
        </div>
        <button>
          <FaGoogleDrive className={styles.googleIcon} />
          <span>Iniciar sesión en Google Drive</span>
        </button>
      </div>
      <div className={styles.container}>
        Restear informacion de la cuenta 🫠
        {/* FIXME: Elimnar el boton, solo es de prueba */}
        <button onClick={handleClickClearWidgetFromLocalStorage}>
          <span>Clear Local Storage</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
