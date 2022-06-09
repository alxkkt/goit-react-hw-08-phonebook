import { useLocation, useNavigate } from 'react-router-dom';
import RegisterForm from 'components/Forms/RegisterForm';

const RegisterPartial = () => {
  const location = useLocation();
  const from = location.state?.from;
  const navigate = useNavigate();
  const goBack = () => navigate(from);
  return (
    <>
      <button type="button" onClick={goBack}>
        Go Back
      </button>
      <p>Fill the form down below to become a proud user</p>
      <RegisterForm />
    </>
  );
};

export default RegisterPartial;
