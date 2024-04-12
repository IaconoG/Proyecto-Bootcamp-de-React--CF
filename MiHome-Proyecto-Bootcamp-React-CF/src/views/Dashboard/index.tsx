import { Outlet, useLocation } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import Widgets from './components/Widgets';

import styles from './Dashboard.module.css';

const Dashboard: React.FunctionComponent = () => {
  const location = useLocation();
  const isDashboardMain: boolean = location.pathname === '/dashboard';

  return (
    <>
      <Sidebar page="Dashboard" />
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
