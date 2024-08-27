import styles from "./Header.module.css";
import useUA from "../../context/UAContext";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavigation from "./mobileNav/mobileNav";
import { navigation } from "../../utils/navigation";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { toggleGenerator } = useUA();
  return (
    <header className={`${styles.siteHeader} row`}>
      <div className={`${styles.containerLeft} row`}>
        <div className={styles.siteLogo}>
          <h1>UA Generator</h1>
        </div>
        <nav className="row">
          {navigation.map((nav) => (
            <a key={nav.label} href={nav.href}>
              {nav.label}
            </a>
          ))}
        </nav>
      </div>
      <MobileNavigation isNavOpen={isNavOpen} />
      <div className={`${styles.headerBtns} row`}>
        <button onClick={toggleGenerator}>Toggle Generator</button>
        <AiOutlineMenu onClick={() => setIsNavOpen((prev) => !prev)} />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
