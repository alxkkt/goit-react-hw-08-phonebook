import { shallowEqual, useSelector } from 'react-redux';
import { isUserLogged } from 'redux/auth/auth-selectors';

const useLogin = () => {
  const isLogged = useSelector(isUserLogged, shallowEqual);

  return isLogged;
};

export default useLogin;
