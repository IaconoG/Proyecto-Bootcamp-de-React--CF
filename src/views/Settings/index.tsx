// ** Components **
import InfoUser from "./components/InfoUser";
import WidgetManagment from "./components/WidgetManagment";
import DataManagment from "./components/DataManagment";
import NotificationPreferences from "./components/NotificationPreferences";
// import GoogleDriveSettings from "./components/GoogleDriveSettings";

// ** Styles **
import styles from "./Settings.module.css";

const Settings: React.FC = () => {
  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>
      <InfoUser />
      <WidgetManagment />
      <DataManagment />
      <NotificationPreferences />
      {/* <GoogleDriveSettings /> */}
    </div>
  );
};

export default Settings;
