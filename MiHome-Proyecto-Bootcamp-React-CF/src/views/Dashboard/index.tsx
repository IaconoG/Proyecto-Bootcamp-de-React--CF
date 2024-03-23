import { Outlet } from 'react-router-dom';

const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
