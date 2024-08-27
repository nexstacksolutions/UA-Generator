import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`${styles.footerContent} text-center`}>
        <p>
          &copy; {new Date().getFullYear()} UA Generator. All rights reserved.
        </p>
        <ul className={`${styles.footerLinks} row`}>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
