import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <ul className={css.nav_menu}>
      <li>
        <NavLink
          to="features"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Features
        </NavLink>
      </li>

      <li>
        <NavLink
          to="reviews"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;