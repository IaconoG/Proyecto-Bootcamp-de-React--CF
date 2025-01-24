import UserInfoSection from "./userInfo-section";

import styles from "./Settings.module.css";
import { FaGoogleDrive } from "react-icons/fa";

// import { WidgetKeys, WidgetTitle } from "../../state/utils/types";

import { UserInfo } from "../../state/stores/userInfo/types";

import weatherInfo from "../../state/stores/weather/weather-info";
import toDoInfo from "../../state/stores/toDo/todo-info";

// FIXME: Eliminar este método, solo es de preuba
const handleClickClearWidgetFromLocalStorage = () => {
  localStorage.removeItem("userInformation");
  localStorage.removeItem("toDoWidget");
  localStorage.removeItem("weatherWidget");
  window.location.reload();
};

const Settings: React.FC = () => {
  // const { getAddedWidgets, deleteWidget } = userInfo();
  // const addedWidgets = getAddedWidgets();
  // const { setWeatherData, resetWeatherData } = weatherInfo();
  const { resetToDoData } = toDoInfo();
  // const { resetBalanceData } = balanceInfo();
  // const { resetCalendarData } = calendarInfo();
  // const { resetFocusData } = focusInfo();

  // const handleDeleteWidget: (title: WidgetTitle) => void = (title) => {
  //   const key = (title.charAt(0).toLowerCase() + title.slice(1)).replace(" ", "") as WidgetKeys;
  //   // Alert component
  //   // alert(msgAccion, msgConfirmacion, accion => deleteWidget(key);)
  //   // deleteWidget(key);
  // };
  // const handleResetWidget: (title: WidgetTitle) => void = (title) => {
  //   const key = (title.charAt(0).toLowerCase() + title.slice(1)).replace(" ", "") as WidgetKeys;
  //   // switch customiza el accion del AlertComponent
  //   switch (key) {
  //     case "balance":
  //       break;
  //     case "calendar":
  //       break;
  //     case "focus":
  //       break;
  //     case "toDo":
  //       resetToDoData();
  //       break;
  //     case "weather":
  //       resetWeatherData();
  //       break;
  //     default:
  //       break;
  //   }
  //   // Alert component
  //   // alert(msgAccion, msgConfirmacion, accion)
  // };

  return (
    <h1>Settings</h1>
    // <div className={styles.settingsContainer}>
    //   <div className={styles.container}>
    //     <UserInfoSection />
    //   </div>
    //   <div className={styles.container}>
    //     <h2>Proximamente sincronizar informacion con google drive</h2>
    //     <div className={styles.desciptionContainer}>
    //       <p>
    //         Al iniciar sesión con Google, MiHome solo tendrá permisos para acceder, editar, crear y eliminar
    //         los archivos específicos que son utilizados exclusivamente por la aplicación.
    //       </p>
    //       <p>Estos archivos son empleados para almacenar y sincronizar tu información.</p>
    //       <p>MiHome no tendrá acceso a tus archivospersonales.</p>
    //     </div>
    //     <button>
    //       <FaGoogleDrive className={styles.googleIcon} />
    //       <span>Iniciar sesión en Google Drive</span>
    //     </button>
    //   </div>
    //   <div className={styles.container}>
    //     Restear informacion de la cuenta 🫠
    //     {/* FIXME: Elimnar el boton, solo es de prueba */}
    //     <button onClick={handleClickClearWidgetFromLocalStorage}>
    //       <span>Clear Local Storage</span>
    //     </button>
    //   </div>
    //   {addedWidgets.length !== 0 && (
    //     <div className={styles.container}>
    //       <h2>Widgets agregados</h2>
    //       <div className={styles.widgetsContainer}>
    //         {/* {addedWidgets.map((widget) => (
    //           <div key={widget.title} className={styles.widgetBox}>
    //             <p>{widget.title}</p>
    //             <div className={styles.widgetsBtns}>
    //               <button onClick={() => handleResetWidget(widget.title)}>Reiniciar</button>
    //               <button onClick={() => handleDeleteWidget(widget.title)}>Elimnar</button>
    //             </div>
    //           </div>
    //         ))} */}
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
};

export default Settings;
