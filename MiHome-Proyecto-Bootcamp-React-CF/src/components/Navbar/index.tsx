import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

type Pages = 'Home' | 'Login' | 'Register';

interface NavbarProps {
  page: Pages;
}

const RenderLinks: React.FunctionComponent<NavbarProps> = ({ page }) => {
  if (page === 'Login') {
    return (
      <div className={styles.linksContainer}>
        <Link to="/auth/Register">Registrarse</Link>
      </div>
    );
  }

  if (page === 'Register') {
    return (
      <div className={styles.linksContainer}>
        <Link to="/auth/Login">Iniciar Sesion</Link>
      </div>
    );
  }

  return (
    <div className={styles.linksContainer}>
      <Link to="/auth/Login">Iniciar Sesion</Link>

      <Link to="/auth/Register">Registrarse</Link>
    </div>
  );
};

const Navbar: React.FunctionComponent<NavbarProps> = ({ page }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.homeContainer}>
        <Link to="/">MiHome</Link>
      </div>
      <RenderLinks page={page} />
    </nav>
  );
};

export default Navbar;
