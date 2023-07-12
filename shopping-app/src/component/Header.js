import React from "react";
import { Link } from "react-router-dom";
import Main from "../pages/Main";
import './header.css'
import { useState } from "react";
import Dropdown from "./Dropdown";

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showDropdown = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const logoUrl = "/logo.png";
    const menuLogoUrl = "/dropdown.png";
    const xUrl = "/x.png"

    return (
        <div className="header">
            <Link to={Main}><img className="header-logo" src={logoUrl} alt="logo"></img></Link>
            <div className="header-title">COZ Shopping</div>
            <button className="header-menu-icon" onClick={showDropdown}>
            {isMenuOpen ? 
                <img src={menuLogoUrl} alt="menu"></img> : <img src={xUrl} alt="menu"></img>
             }
            </button>
        </div>
    );
}

export default Header;