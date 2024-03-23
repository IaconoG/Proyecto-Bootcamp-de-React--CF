import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

type Pages = '' | 'Login' | 'Register' | 'Dashboard';

interface NavbarProps {
  page: Pages;
}

const RenderLinks: React.FunctionComponent<NavbarProps> = ({ page }) => {
  // FIXME: Implementar lógica para mostrar los links correctos dependiendo de la página actual y la autenticación del usuario.
  if (page === 'Login') {
    return <Link to="/auth/Register">Registrarse</Link>;
  }

  if (page === 'Register') {
    return <Link to="/auth/Login">Iniciar Sesion</Link>;
  }

  if (page === 'Dashboard') {
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

  // Este return es para el HOME y para el Error404 (solo cuando el usuario no está autenticado)
  return (
    <>
      <Link to="/auth/Login">Iniciar Sesion</Link>

      <Link to="/auth/Register">Registrarse</Link>
    </>
  );
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ page }) => {
  return (
    <nav className={`${styles.navbar} ${page === 'Dashboard' ? styles.dashboardNavbar : ''}`}>
      <div
        className={`${styles.linksContainer} ${page === 'Dashboard' ? styles.dashboardLinks : ''}`}
      >
        <Link to="/" className={styles.homeContainer}>
          MiHome
        </Link>
        <RenderLinks page={page} />
      </div>
    </nav>
  );
};

export default Navbar;
