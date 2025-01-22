//
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// ** Styles **
import styles from "./Sidebar.module.css";

// ** Components **
import SidebarHeader from "./Header";
import SidebarContent from "./Content";
import SidebarFooter from "./Footer";
// import SunAndMoon from './components/SunAndMoon';
// import Weather from './components/Weather';
// import Time from './components/Time';
import { Icon } from "../icons/Icon";

// ** State **

// ** Utils **
import { WidgetPath } from "../../state/utils/types";

// const RenderLinks: React.FunctionComponent<{ userLocalidad: string }> = ({ userLocalidad }) => {
//   // FIXME: Solo se debe mostrar los widgets que el usuario haya activado. obviando el settings
//   const { getAddedWidgets, getAllWidgets, getUserLocation } = userInfo();
//   const location = useLocation();
//   const pathName = location.pathname as PathName; // /dashboard/etc
//   const pageSelected = pathName.substring('/dashboard/'.length) as PathName;

//   // FIXME: DETELETE getAllWidgets
//   return (
//     <>

//       {/* FIXME: DELETE getAllWidgets */}
//       {getAllWidgets().map((widget: Widget) => (
//         <div
//           key={widget.title}
//           className={`${styles.linkContainer} ${pageSelected === widget.path && styles.active}`}
//         >
//           <Link to={`/dashboard/${widget.path}`}>
//             <Icon icon="NoneIcon" width={24} height={24} />
//             {widget.title}
//           </Link>
//         </div>
//       ))}
//       {/* use this */}
//       {/* {getAddedWidgets().map((widget: Widget) => (
//         <div
//           key={widget.title}
//           className={`${styles.linkContainer} ${
//             pageSelected === widget.path && styles.active
//           }`}
//         >
//           <Link to={`/dashboard/${widget.path}`}>{widget.title}</Link>
//         </div>
//       ))} */}
//       <div className={`${styles.linkContainer} ${pageSelected === 'settings' && styles.active}`}>
//         <Link to="/dashboard/settings" className={styles.widgetSettings}>
//           <Icon icon="Settings" width={24} height={24} />
//           <span>Settings</span>
//         </Link>
//       </div>
//     </>
//   );
// };

const Sidebar: React.FunctionComponent = () => {
  type PathName = WidgetPath | "settings" | "";
  const location = useLocation();
  const pathName = location.pathname as PathName; // /dashboard/etc
  const pageSelected = pathName.substring("/dashboard/".length) as PathName;
  console.log(pageSelected);

  return (
    <div className={styles.sidebar}>
      <SidebarHeader />
      <SidebarContent pageSelected={pageSelected} />
      <SidebarFooter isSelected={pageSelected === "settings"} />
    </div>
  );
};

export default Sidebar;
