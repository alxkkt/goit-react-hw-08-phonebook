import { Link, Outlet, useLocation } from 'react-router-dom';

import heroImg from '../../hero.png';
import s from './HomePage.module.css';

import useLogin from 'shared/hooks/useLogin';

const HomePage = () => {
  const location = useLocation();
  const currentLocation = location.pathname;

  const isHome = currentLocation === '/home';
  const isLogin = useLogin();

  return (
    <section className="container">
      <div className={s.wrapper}>
        <div>
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
            Your personal Phonebook
          </h1>
          <img src={heroImg} alt="hero" width={400} />
        </div>
        <div className={s.formsContainer}>
          {isHome && !isLogin && (
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
          {isLogin && <h1>Stay in touch with your friends and family!</h1>}
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
