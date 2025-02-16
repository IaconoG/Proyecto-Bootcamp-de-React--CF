// ** Components **
import InfoUser from "./InfoUser";
// ** Styles **
import styles from "./Settings.module.css";

const Settings: React.FC = () => {
  return (
    <div className={styles.settingsContainer}>
      <h1>Settings</h1>
      <InfoUser />
      {/* <UserConfiSettings /> */}
      {/* <GoogleDriveSettings /> */}
      {/* <ThemeSettings /> */}
    </div>
  );
};

export default Settings;
