import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav" aria-label="Footer navigation">
          <Link to="/podmienky" className="footer__link">
            Podmienky používania
          </Link>
          <span className="footer__separator" aria-hidden="true">|</span>
          <Link to="/ochrana-sukromia" className="footer__link">
            Ochrana súkromia
          </Link>
          <span className="footer__separator" aria-hidden="true">|</span>
          <Link to="/kontakt" className="footer__link">
            Kontaktujte nás
          </Link>
        </nav>
        <p className="footer__copyright">
          © 2025 Právny asistent. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
};

export default Footer;