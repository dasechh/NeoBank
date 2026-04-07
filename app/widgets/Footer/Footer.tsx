import styles from "./Footer.module.scss";
import { Link } from "react-router";

import NeoLogo from "./assets/neoflex.png";

interface IFooterLink {
  title: string;
  path: string;
}

const FOOTER_LINKS: IFooterLink[] = [
  { title: "About bank", path: "" },
  { title: "Ask a Question", path: "" },
  { title: "Quality of service", path: "" },
  { title: "Requsities", path: "" },
  { title: "Press center", path: "" },
  { title: "Bank carreer", path: "" },
  { title: "Investors", path: "" },
  { title: "Analytics", path: "" },
  { title: "Business and processes", path: "" },
  { title: "Compliance and business ethics", path: "" },
];

export const Footer = () => {
  return (
    <footer className={styles.footer || ""}>
      <div className={`${styles.footer__wrapper || ""} container`}>
        <div className={styles.footer__header || ""}>
          <Link to="">
            <img src={NeoLogo} alt="Neoflex" className={styles.footer__logo} />
          </Link>
          <address className={styles.footer__address || ""}>
            <a href="tel:+74959842513 " className={styles.footer__number}>
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className={styles.footer__mail}>
              info@neoflex.ru
            </a>
          </address>
        </div>

        <ul className={styles.footer__main}>
          {FOOTER_LINKS.map(({ title, path }) => (
            <li key={title}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>

        <hr className={styles.footer__line} />

        <p className={styles.footer__footer || ""}>
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </p>
      </div>
    </footer>
  );
};
