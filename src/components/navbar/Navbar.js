import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamburgerMenuOpen from "../../images/icon-hamburger.svg";
import hamburgerMenuClose from "../../images/icon-close-menu.svg";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <button
        className="hamburger-btn"
        aria-label="menu button"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <img src={hamburgerMenuClose} alt="hamburger menu button" />
        ) : (
          <img src={hamburgerMenuOpen} alt="hamburger menu button" />
        )}
      </button>
      <div
        className={`${isMenuOpen ? "showOverlay" : "noMenu"}`}
        onClick={toggleMenu}
      ></div>
      <div className={`menu ${isMenuOpen ? "showMenu" : "noMenu"}`}>
        <Link to="/about">About</Link>
        <hr className="nav-divider" />
        <Link to="/discover">Discover</Link>
        <hr className="nav-divider" />
        <Link to="/get-started">Get Started</Link>
      </div>
    </nav>
  );
}
export default Navbar;
