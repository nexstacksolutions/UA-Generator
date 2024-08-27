import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content text-center">
        <p>
          &copy; {new Date().getFullYear()} UA Generator. All rights reserved.
        </p>
        <ul className="footer-links row">
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
};

export default Footer;
