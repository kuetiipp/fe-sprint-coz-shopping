import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import Dropdown from "../Dropdown";
import logoUrl from "./logo.png";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showDropdown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuLogoUrl = "/dropdown.png";
  const xUrl = "/x.png";

  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={logoUrl} alt="logo"></img>
      </Link>
      <div className="header-title">COZ Shopping</div>
      <button className="header-menu-icon" onClick={showDropdown}>
        {isMenuOpen ? (
          <img className="closebtn" src={xUrl} alt="page-menu-close-butn"></img>
        ) : (
          <img className="openbtn" src={menuLogoUrl} alt="page-menu-open-butn"></img>
        )}
      </button>
      {isMenuOpen && <Dropdown />}
    </header>
  );
};

export default Header;
