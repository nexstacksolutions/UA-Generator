import { mobileNavigation } from "../../../utils/navigation";
import styles from "./MobileNav.module.css";

function MobileNavigation({ isNavOpen }) {
  return (
    <section
      className={`${styles.mobileNavigation} ${
        isNavOpen && styles.navBarOpen
      } row`}
    >
      <div className={`${styles.navigationContainer} row`}>
        {mobileNavigation.map((nav, index) => {
          return nav.label === "search" ? (
            <label
              key={nav.label + "mobile-navigation"}
              htmlFor="ua-generator"
              className={styles.navLink}
            >
              <div className={`${styles.icon} row`}>{nav.icon}</div>
              <p className={styles.label}>{nav.label}</p>
            </label>
          ) : (
            <a
              key={nav.label + "mobile-navigation"}
              href={nav.href}
              className={styles.navLink}
            >
              <div className={`${styles.icon} row`}>{nav.icon}</div>
              <p className={styles.label}>{nav.label}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default MobileNavigation;
