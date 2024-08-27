import "./Header.css";
import useUA from "../../context/UAContext";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNavigation from "./mobileNav/mobileNav";
import { navigation } from "../../utils/navigation";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { toggleGenerator } = useUA();
  return (
    <header className="site-header row">
      <div className="container-left row">
        <div className="site-logo">
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
      <div className="header-btns row">
        <button onClick={toggleGenerator}>Toggle Generator</button>
        <AiOutlineMenu onClick={() => setIsNavOpen((prev) => !prev)} />
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
