import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamburgerMenu from "../../images/icon-hamburger.svg";
// import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <button
        className="hamburger-btn"
        aria-label="menu button"
        onClick={toggleMenu}
      >
        <img src={hamburgerMenu} alt="hamburger menu button" />
      </button>
      {/* <div className="navigation">
        <Link to="/about">About</Link>
        <Link to="/discover">Discover</Link>
        <Link to="/get-started">Get Started</Link>
      </div> */}
    </nav>
  );
}
export default Navbar;
