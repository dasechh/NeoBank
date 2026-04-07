import styles from './Header.module.scss';
import { NavLink } from 'react-router';
import { Button } from '@shared/ui/button';

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
  return (
    <header>
      <div className="container">
        <nav className={styles.nav || ''}>
          <NavLink to="/" className={styles.nav__logo || ''}>
            Neobank
          </NavLink>
          <div className={styles.nav__links || ''}>
            {NAV_LINKS.map(({ title, path }) => (
              <NavLink to={path} key={title}>
                {title}
              </NavLink>
            ))}
          </div>
          <Button size="md" className={styles.nav__button || ''}>
            Online Bank
          </Button>
        </nav>
      </div>
    </header>
  );
};
