import { NavLink } from 'react-router-dom';

import { items } from './items';

const NavbarMenu = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to}>{text}</NavLink>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default NavbarMenu;
