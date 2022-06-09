import { useUserLoginMutation } from 'redux/auth/auth';
import LoginForm from 'components/Forms/LoginForm';
import GoBackButton from 'shared/components/GoBackButton';

const LoginPartial = () => {
  const [loginUser, { data }] = useUserLoginMutation();

  return (
    <>
      <GoBackButton />
      <p>Login if you already have an account</p>
      <LoginForm onSubmit={loginUser} />
    </>
  );
};

export default LoginPartial;
