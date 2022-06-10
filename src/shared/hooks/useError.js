import { shallowEqual, useSelector } from 'react-redux';
import { getError } from 'redux/auth/auth-selectors';

const useErrorCode = () => {
  const error = useSelector(getError, shallowEqual);

  return error?.response?.status;
};

export default useErrorCode;
