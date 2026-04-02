import styles from "./Footer.module.scss";
import { Link } from "react-router";

import NeoLogo from "./assets/neoflex.png";

interface iFooterLink {
  title: string;
  path: string;
}

const footerLinks: iFooterLink[] = [
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

function FooterBody() {
  return (
    <ul className={styles.footer__main}>
      {footerLinks.map(({ title, path }, index) => (
        <li key={index}>
          <Link to={path}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
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

        <FooterBody />

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
}
