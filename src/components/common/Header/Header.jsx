import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <ul className="header-menu">
          <li>
            <Link to="/home" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="header-link">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
