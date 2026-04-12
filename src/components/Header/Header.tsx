import { useState } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router';
import { Button } from '@/components';
import clsx from 'clsx';
import burgerButtonSrc from '@icons/burger-button.svg';
import burgerButtonCloseSrc from '@icons/burger-button_closed.svg';

interface INavLink {
  title: string;
  path: string;
  id: number;
}

const NAV_LINKS: INavLink[] = [
  { title: 'Credit Card', path: '', id: 1 },
  { title: 'Product', path: '', id: 2 },
  { title: 'Account', path: '', id: 3 },
  { title: 'Resources', path: '', id: 4 },
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
            {NAV_LINKS.map(({ title, path, id }) => (
              <NavLink to={path} key={id}>
                {title}
              </NavLink>
            ))}
          </div>
          <Button size="md" variant="primary" className={styles.nav__button}>
            Online Bank
          </Button>
          <Button
            variant="icon"
            size=""
            className={styles.nav__burger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={menuOpen ? burgerButtonCloseSrc : burgerButtonSrc} alt="Menu" />
          </Button>
        </nav>
      </div>
    </header>
  );
};
