import styles from './Footer.module.scss';
import { Link } from 'react-router';

import NeoLogo from '@images/neoflex.png';

interface IFooterLink {
  title: string;
  path: string;
  id: number;
}

const FOOTER_LINKS: IFooterLink[] = [
  { title: 'About bank', path: '', id: 1 },
  { title: 'Ask a Question', path: '', id: 2 },
  { title: 'Quality of service', path: '', id: 3 },
  { title: 'Requsities', path: '', id: 4 },
  { title: 'Press center', path: '', id: 5 },
  { title: 'Bank carreer', path: '', id: 6 },
  { title: 'Investors', path: '', id: 7 },
  { title: 'Analytics', path: '', id: 8 },
  { title: 'Business and processes', path: '', id: 9 },
  { title: 'Compliance and business ethics', path: '', id: 10 },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} container`}>
        <div className={styles.footer__header}>
          <Link to="">
            <img src={NeoLogo} alt="Neoflex" className={styles.footer__logo} />
          </Link>
          <address className={styles.footer__address}>
            <a href="tel:+74959842513 " className={styles.footer__number}>
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className={styles.footer__mail}>
              info@neoflex.ru
            </a>
          </address>
        </div>

        <ul className={styles.footer__main}>
          {FOOTER_LINKS.map(({ title, path, id }) => (
            <li key={id}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>

        <hr className={styles.footer__line} />

        <p className={styles.footer__footer}>
          We use cookies to personalize our services and improve the user experience of our website.
          Cookies are small files containing information about previous visits to a website. If you
          do not want to use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
};
