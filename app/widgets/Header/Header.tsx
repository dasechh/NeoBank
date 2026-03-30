import { NavLink } from "react-router";
import styles from "./Header.module.scss";
import Button from "@shared/ui/button";

export default function Header() {
  return (
    <header>
      <nav className={styles.nav || ""}>
        <NavLink to="/" className={styles.nav__logo || ""}>
          Neobank
        </NavLink>

        <div className={styles.nav__links || ""}>
          <NavLink to="">Credit Card</NavLink>
          <NavLink to="">Product</NavLink>
          <NavLink to="">Account</NavLink>
          <NavLink to="">Resources</NavLink>
        </div>
        <Button>Online Bank</Button>
      </nav>
    </header>
  );
}
