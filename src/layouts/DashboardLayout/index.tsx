import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
