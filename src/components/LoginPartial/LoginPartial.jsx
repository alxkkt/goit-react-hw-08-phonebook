import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from 'components/Forms/LoginForm';
import GoBackButton from 'shared/components/GoBackButton';

import { login } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';

const LoginPartial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useLogin();

  useEffect(() => {
    if (isLogged) {
      navigate('/contacts');
    }
  }, [dispatch, isLogged, navigate]);

  const loginUser = data => {
    dispatch(login(data));
  };
  return (
    <>
      <GoBackButton />
      <p>Login if you already have an account</p>
      <LoginForm onSubmit={loginUser} />
    </>
  );
};

export default LoginPartial;
