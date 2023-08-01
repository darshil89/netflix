import classes from "@/app/styles/navbar.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <nav>
      <div className={classes.navbar}>
        <div>
          <ul className={classes.navbarList}>
            <li className={classes.navbarItem}>
              <Link className={classes.navbarLink} href="/">
                Home
              </Link>
            </li>
            <li className={classes.navbarItem}>
              <Link className={classes.navbarLink} href="/about">
                About
              </Link>
            </li>
            <li className={classes.navbarItem}>
              <Link className={classes.navbarLink} href="/movie">
                Movie
              </Link>
            </li>
            <li className={classes.navbarItem}>
              <Link className={classes.navbarLink} href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
