import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu';
import UserMenu from './UserMenu';

import s from './Navbar.module.css';
import useLogin from 'shared/hooks/useLogin';

const Navbar = () => {
  const isLogin = useLogin();

  return (
    <header className={s.container}>
      <nav className={s.navMenu}>
        <Link to="/home">Logo</Link>
        <NavbarMenu />
        {isLogin && <UserMenu />}
      </nav>
    </header>
  );
};

export default Navbar;
