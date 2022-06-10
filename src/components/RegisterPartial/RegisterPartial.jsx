import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import RegisterForm from 'components/Forms/RegisterForm';
import GoBackButton from 'shared/components/GoBackButton';

import { signup } from 'redux/auth/auth-operations';
import useLogin from 'shared/hooks/useLogin';

const RegisterPartial = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogged = useLogin();

  useEffect(() => {
    if (isLogged) {
      navigate('/contacts');
    }
  }, [dispatch, isLogged, navigate]);

  const registerUser = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <GoBackButton />
      <p>Fill the form down below to become a proud user</p>
      <RegisterForm onSubmit={registerUser} />
    </>
  );
};

export default RegisterPartial;
