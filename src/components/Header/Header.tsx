import { useState } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router';
import { Button } from '~/components/Button';
import clsx from 'clsx';

interface INavLink {
  title: string;
  path: string;
}

const NAV_LINKS: INavLink[] = [
  { title: 'Credit Card', path: '' },
  { title: 'Product', path: '' },
  { title: 'Account', path: '' },
  { title: 'Resources', path: '' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="container">
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.nav__logo}>
            Neobank
          </NavLink>
          <div className={clsx(styles.nav__links, menuOpen && styles['nav__links_opened'])}>
            {NAV_LINKS.map(({ title, path }) => (
              <NavLink to={path} key={title}>
                {title}
              </NavLink>
            ))}
          </div>
          <Button size="md" variant="primary" className={styles.nav__button}>
            Online Bank
          </Button>
          <Button
            variant="burger"
            size=""
            className={clsx(styles.nav__burger, menuOpen && 'open')}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </nav>
      </div>
    </header>
  );
};
