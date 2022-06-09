import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from 'components/Forms/LoginForm';

const LoginPartial = () => {
  const location = useLocation();
  const from = location.state?.from;

  const navigate = useNavigate();
  const goBack = () => navigate(from);

  return (
    <>
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      <p>Login if you already have an account</p>
      <LoginForm />
    </>
  );
};

export default LoginPartial;
