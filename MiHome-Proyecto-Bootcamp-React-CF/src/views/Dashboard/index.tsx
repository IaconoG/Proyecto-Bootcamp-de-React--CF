import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar';

import styles from './Dashboard.module.css';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <Navbar page="Dashboard" />
      <div className={styles.dashboardBody}>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
