import { Link, Outlet, useLocation } from 'react-router-dom';

import heroImg from '../../hero.png';
import s from './HomePage.module.css';

const HomePage = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  const isHome = currentLocation === '/home';

  return (
    <section className="container">
      <div className={s.wrapper}>
        <div>
          <img src={heroImg} alt="hero" width={400} />
        </div>
        <div className={s.formsContainer}>
          {isHome && (
            <ul className={s.actionList}>
              <li className={s.actionListItem}>
                <Link
                  state={{ from: location }}
                  className={s.actionLink}
                  to="register"
                >
                  Register
                </Link>
              </li>
              <li className={s.actionListItem}>
                <Link
                  state={{ from: location }}
                  className={s.actionLink}
                  to="login"
                >
                  Login
                </Link>
              </li>
            </ul>
          )}
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
