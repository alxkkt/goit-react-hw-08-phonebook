import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link to="/home">Logo</Link>
        <NavbarMenu />
      </nav>
    </header>
  );
};

export default Navbar;
