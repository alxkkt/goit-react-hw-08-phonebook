import { useLocation, useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const location = useLocation();
  const from = location.state?.from;
  const navigate = useNavigate();
  const goBack = () => navigate(from);
  return (
    <button type="button" onClick={goBack}>
      Go Back
    </button>
  );
};

export default GoBackButton;
