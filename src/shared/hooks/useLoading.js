import { isLoading } from 'redux/auth/auth-selectors';
import { useSelector, shallowEqual } from 'react-redux';

const useLoading = () => {
  const loading = useSelector(isLoading, shallowEqual);

  return loading;
};

export default useLoading;
