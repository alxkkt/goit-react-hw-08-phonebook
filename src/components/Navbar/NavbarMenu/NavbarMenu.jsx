import { NavLink } from 'react-router-dom';

import { items } from './items';

const NavbarMenu = ({ isLogged }) => {
  const menuItems = items.filter(item => item.private === isLogged);

  const elements = menuItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default NavbarMenu;
