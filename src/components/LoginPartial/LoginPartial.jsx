import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';

import LoginForm from 'components/Forms/LoginForm';
import GoBackButton from 'shared/components/GoBackButton';

import { login } from 'redux/auth/auth-operations';
import useErrorCode from 'shared/hooks/useError';
import useLogin from 'shared/hooks/useLogin';

const LoginPartial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useLogin();
  const errorCode = useErrorCode();

  useEffect(() => {
    if (isLogged) {
      navigate('/contacts');
    } else {
      if (errorCode === 400) {
        Notiflix.Report.failure(
          'Oops',
          'You entered invalid email or password, please check again',
        );
        return;
      }
    }
  }, [dispatch, isLogged, navigate, errorCode]);

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
