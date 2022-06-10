import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispath = useDispatch();
  const { name } = useSelector(getUser, shallowEqual);

  const logoutUser = () => {
    dispath(logout());
  };

  return (
    <>
      <span>
        Hello, {name}! |
        <button type="button" onClick={logoutUser}>
          Logout
        </button>
      </span>
    </>
  );
};

export default UserMenu;
