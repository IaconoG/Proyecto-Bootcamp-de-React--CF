import { Outlet } from 'react-router-dom';

const Auth: React.FunctionComponent = () => {
  return (
    <div>
      <h1>Auth (no acceso)</h1>
      <Outlet />
    </div>
  );
};

export default Auth;

{
  /*
  El auth posee un elemtno NavBar 
  El navbar posee un boton de login,un boton de register y un boton de home
*/
}
