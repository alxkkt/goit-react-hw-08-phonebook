import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu';

import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={s.container}>
      <nav className={s.navMenu}>
        <Link to="/home">Logo</Link>
        <NavbarMenu />
        <h1>AuthMenu</h1>
      </nav>
    </header>
  );
};

export default Navbar;
