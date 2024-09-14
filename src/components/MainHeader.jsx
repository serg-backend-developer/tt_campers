import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

import Container from './Container';
import logo from '../assets/icon.svg';
import css from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Link to="/" className={css.logo}>
            <img src={logo} alt="Logo" />
          </Link>

          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                className={({ isActive }) =>
                  clsx(css.link, isActive && css.active)
                }
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default MainHeader;