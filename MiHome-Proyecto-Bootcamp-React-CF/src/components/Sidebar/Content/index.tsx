// ** Styles **
import styles from "./SidebarContent.module.css";

// ** State **
import userInfo from "../../../state/stores/userInfo/user-info";
import { Widget } from "../../../state/utils/types";
import { Link } from "react-router-dom";
import { Icon } from "../../icons/Icon";

// const RenderLinks: React.FunctionComponent<{ userLocalidad: string }> = ({ userLocalidad }) => {
//   const { getAllWidgets } = userInfo();
//   const location = useLocation();
//   const pathName = location.pathname as PathName; // /dashboard/etc
//   const pageSelected = pathName.substring('/dashboard/'.length) as PathName;

//   return (
//     <>
//       <div className={`${styles.linkContainer} ${!pageSelected && styles.active}`}>
//         <Link to="/dashboard" className={styles.homeContainer}>
//           <Icon icon="Home" width={24} height={24} />
//           MiHome
//         </Link>
//       </div>
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
//     </>
//   );
// };

interface SidebarContentProps {
  pageSelected: string;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ pageSelected }) => {
  const { getAllWidgets } = userInfo();
  const allLinks = getAllWidgets();

  console.log(allLinks);

  const RenderLinks = allLinks.map((widget: Widget) => (
    <Link
      to={`/dashboard/${widget.path}`}
      key={widget.title}
      className={`${pageSelected === widget.path && styles.active}`}
    >
      <Icon icon="NoneIcon" width={24} height={24} />
      {widget.title}
    </Link>
  ));

  console.log(pageSelected);

  return (
    <div>
      {/* <div className={`${styles.linkContainer} ${!pageSelected && styles.active}`}> */}
      <Link to="/dashboard" className={styles.homeContainer} key={"Home"}>
        <Icon icon="Home" width={24} height={24} />
        MiHome
      </Link>
      {RenderLinks}
    </div>
  );
};

export default SidebarContent;
