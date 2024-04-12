import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';

type Pages = '' | 'SingIn' | 'SingUp' | 'Dashboard';

interface SidebarProps {
  page: Pages;
}

const RenderLinks: React.FunctionComponent<SidebarProps> = ({ page }) => {
  // FIXME: Implementar lógica para mostrar los links correctos dependiendo de la página actual y la autenticación del usuario.
  if (page === 'Dashboard') {
    // FIXME: Solo se debe mostrar los widgets que el usuario haya activado. obviando el settings
    return (
      <>
        <Link to="/dashboard/calendar">Calendar</Link>
        <Link to="/dashboard/focus">Focus</Link>
        <Link to="/dashboard/info-micros">InfoMicro</Link>
        <Link to="/dashboard/to-do">ToDo</Link>
        <Link to="/dashboard/balance">Balance</Link>
        <Link to="/dashboard/settings" className={styles.widgetSettings}>
          Settings
        </Link>
      </>
    );
  }
};

const Sidebar: React.FunctionComponent<SidebarProps> = ({ page }) => {
  return (
    <div
      className={`${
        page === 'Dashboard' ? styles.dashboardSidebar : styles.sidebar
      }`}
    >
      <div
        className={`${styles.linksContainer} ${
          page === 'Dashboard' ? styles.dashboardLinks : ''
        }`}
      >
        <Link to="/dashboard" className={styles.homeContainer}>
          MiHome
        </Link>
        <RenderLinks page={page} />
      </div>
    </div>
  );
};

export default Sidebar;
