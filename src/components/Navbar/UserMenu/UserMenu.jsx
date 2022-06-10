import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispath = useDispatch();
  const { email } = useSelector(getUser, shallowEqual);

  const logoutUser = () => {
    dispath(logout());
  };

  return (
    <>
      <span>
        {email} |
        <button
          type="button"
          onClick={logoutUser}
          style={{ marginLeft: '10px' }}
        >
          Logout
        </button>
      </span>
    </>
  );
};

export default UserMenu;
