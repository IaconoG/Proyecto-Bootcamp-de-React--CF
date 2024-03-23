import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

import Navbar from '../../components/Navbar';

const Error404: React.FunctionComponent = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <>
        <Navbar page="" />
        <div className="">
          <h1 className="">{error?.status} Oops!</h1>
          <p className="">{error?.data}</p>
        </div>
      </>
    );
  }

  return <h1 className="">Oops!</h1>;
};

export default Error404;
