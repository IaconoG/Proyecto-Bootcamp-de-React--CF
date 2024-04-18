import styles from './Settings.module.css';
import { FaGoogleDrive } from 'react-icons/fa';

import {
  FormDataType,
  UserData,
  WidgetKeys,
  WidgetTitle,
} from '../../state/utils/types';

import Form from '../../components/Form';

import userInfo from '../../state/stores/userInfo/user-info';
import Select from '../../components/Select';
import { Option } from '../../components/Select/utils/interfaces';
import weatherInfo from '../../state/stores/weather/weather-info';
import toDoInfo from '../../state/stores/toDo/todo-info';

// FIXME: Eliminar este método, solo es de preuba
const handleClickClearWidgetFromLocalStorage = () => {
  localStorage.removeItem('userInformation');
  localStorage.removeItem('toDoWidget');
  localStorage.removeItem('weatherWidget');
  window.location.reload();
};

const selectOptions: Option[] = [
  { value: '', label: 'Selecciona una opcion' },
  { value: 'estudiante', label: 'Estudiante' },
  { value: 'trabajador', label: 'Trabajador' },
  { value: 'otro', label: 'Otro' },
];

const Settings: React.FC = () => {
  const { userData, updateUserData, getAddedWidgets, deleteWidget } =
    userInfo();
  const addedWidgets = getAddedWidgets();
  const { setWeatherData, resetWeatherData } = weatherInfo();
  const { resetToDoData } = toDoInfo();
  // const { resetBalanceData } = balanceInfo();
  // const { resetCalendarData } = calendarInfo();
  // const { resetFocusData } = focusInfo();

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
      data.occupation === userData.occupation &&
      data.localidad === userData.localidad
    ) {
      throw new Error(
        'No hubo necesidad de actualizar la informacion del usuario, era la misma que la anterior.'
      );
    }
    // Si la localidad cambia actualizamos el clima
    if (data.localidad !== userData.localidad) {
      setWeatherData(data.localidad);
    }

    updateUserData(data);
  };

  const handleDeleteWidget: (title: WidgetTitle) => void = (title) => {
    const key = (title.charAt(0).toLowerCase() + title.slice(1)).replace(
      ' ',
      ''
    ) as WidgetKeys;
    // Alert component
    // alert(msgAccion, msgConfirmacion, accion => deleteWidget(key);)
    deleteWidget(key);
  };
  const handleResetWidget: (title: WidgetTitle) => void = (title) => {
    const key = (title.charAt(0).toLowerCase() + title.slice(1)).replace(
      ' ',
      ''
    ) as WidgetKeys;
    // switch customiza el accion del AlertComponent
    switch (key) {
      case 'balance':
        break;
      case 'calendar':
        break;
      case 'focus':
        break;
      case 'toDo':
        resetToDoData();
        break;
      case 'weather':
        resetWeatherData();
        break;
      default:
        break;
    }
    // Alert component
    // alert(msgAccion, msgConfirmacion, accion)
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
            selectStyles={styles.selectStyles}
          />
          <input
            type="text"
            name="localidad"
            placeholder="Tu localidad, con esto podras ver la hora y el clima de tu ciudad"
            className={styles.input}
          />
          <button type="submit" className={styles.btn}>
            Guardar
          </button>
        </Form>
      </div>

      <div className={styles.container}>
        <h2>Proximamente sincronizar informacion con google drive</h2>
        <div className={styles.desciptionContainer}>
          <p>
            Al iniciar sesión con Google, MiHome solo tendrá permisos para
            acceder, editar, crear y eliminar los archivos específicos que son
            utilizados exclusivamente por la aplicación.
          </p>
          <p>
            Estos archivos son empleados para almacenar y sincronizar tu
            información.
          </p>
          <p>MiHome no tendrá acceso a tus archivospersonales.</p>
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
      {addedWidgets.length !== 0 && (
        <div className={styles.container}>
          <h2>Widgets agregados</h2>
          <div className={styles.widgetsContainer}>
            {addedWidgets.map((widget) => (
              <div key={widget.title} className={styles.widgetBox}>
                <p>{widget.title}</p>
                <div className={styles.widgetsBtns}>
                  <button onClick={() => handleResetWidget(widget.title)}>
                    Reiniciar
                  </button>
                  <button onClick={() => handleDeleteWidget(widget.title)}>
                    Elimnar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
