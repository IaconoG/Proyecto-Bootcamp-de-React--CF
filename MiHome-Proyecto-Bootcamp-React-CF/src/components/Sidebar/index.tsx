import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import styles from './Sidebar.module.css';

import userInfo from '../../state/stores/user-info';
import { Widget, WidgetPath } from '../../state/utils/types';

type PathName = WidgetPath | 'settings' | '';

const RenderLinks: React.FunctionComponent = () => {
  // FIXME: Implementar lógica para mostrar los links correctos dependiendo de la página actual y la autenticación del usuario.
  // FIXME: Solo se debe mostrar los widgets que el usuario haya activado. obviando el settings
  const { getAddedWidgets, getAllWidgets } = userInfo();
  const location = useLocation();
  const pathName = location.pathname as PathName; // /dashboard/etc
  const pageSelected = pathName.substring('/dashboard/'.length) as PathName;

  // FIXME: DETELETE getUserWidgets
  return (
    <>
      <div
        className={`${styles.linkContainer} ${!pageSelected && styles.active}`}
      >
        <Link to="/dashboard" className={styles.homeContainer}>
          MiHome
        </Link>
      </div>
      {/* FIXME: DELETE getUserWidgets */}
      {getAllWidgets().map((widget: Widget) => (
        <div
          key={widget.title}
          className={`${styles.linkContainer} ${
            pageSelected === widget.path && styles.active
          }`}
        >
          <Link to={`/dashboard/${widget.path}`}>{widget.title}</Link>
        </div>
      ))}
      {/* use this */}
      {/* {getAddedWidgets().map((widget: Widget) => (
        <div
          key={widget.title}
          className={`${styles.linkContainer} ${
            pageSelected === widget.path && styles.active
          }`}
        >
          <Link to={`/dashboard/${widget.path}`}>{widget.title}</Link>
        </div>
      ))} */}
      <div
        className={`${styles.linkContainer} ${
          pageSelected === 'settings' && styles.active
        }`}
      >
        <Link to="/dashboard/settings" className={styles.widgetSettings}>
          Settings
        </Link>
      </div>
    </>
  );
};

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.linksContainer}>
        <RenderLinks />
      </div>
    </div>
  );
};

export default Sidebar;
