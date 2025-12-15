import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BalanceScaleIcon, MenuIcon } from "../Icons/Icons";
import "./Header.css";

const Header = ({ onToggleSidebar }) => {
  const location = useLocation();
  const isChatPage = location.pathname.startsWith("/chat");

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          {isChatPage && (
            <button
              className="header__burger"
              onClick={onToggleSidebar}
              aria-label="Otvoriť menu"
            >
              <MenuIcon size={22} />
            </button>
          )}
          
          <Link to="/" className="header__logo">
            <div className="header__logo-icon">
              <BalanceScaleIcon size={22} />
            </div>
            <span className="header__logo-text">Právny asistent</span>
          </Link>
        </div>

        <nav className="header__nav">
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
            }
          >
            Kontakt
          </NavLink>
          <NavLink
            to="/podmienky"
            className={({ isActive }) =>
              `header__nav-link ${isActive ? "header__nav-link--active" : ""}`
            }
          >
            Podmienky
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;