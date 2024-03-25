import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Widgets from '../../components/Widgets';

import styles from './Dashboard.module.css';

const Dashboard: React.FunctionComponent = () => {
  const location = useLocation();
  const isDashboardMain: boolean = location.pathname === '/dashboard';

  return (
    <>
      <Navbar page="Dashboard" />
      <main>
        <div className={styles.dashboardContent}>
          {isDashboardMain ? (
            <>
              <div className={styles.widgetsContainer}>
                <Widgets />
              </div>
            </>
          ) : (
            <div className={styles.outlet}>
              <Outlet />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
