import { Link, Outlet, useLocation } from 'react-router-dom';

import heroImg from '../../hero.png';

import s from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log(currentLocation);

  return (
    <section className="container">
      <div className={s.wrapper}>
        <div>
          <img src={heroImg} alt="hero" width={480} />
        </div>
        <div className={s.formsContainer}>
          <ul className={s.actionList}>
            <li className={s.actionListItem}>
              <Link to="/home/register">Register</Link>
            </li>
            <li className={s.actionListItem}>
              <Link to="/home/login">Login</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
