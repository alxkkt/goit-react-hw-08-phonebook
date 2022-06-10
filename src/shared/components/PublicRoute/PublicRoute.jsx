import { Outlet, Navigate } from 'react-router-dom';

import useLogin from 'shared/hooks/useLogin';

const PublicRoute = () => {
  const isLogin = useLogin();

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
