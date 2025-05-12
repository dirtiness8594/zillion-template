import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import headerData from '../data/header.json';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__logo">
                    <img src={headerData.logo} alt="Consultoria Logo" />
                </div>
                <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
                    <FaBars />
                </button>
            </div>

            <nav className="header__nav">
                {headerData.menuItems.map((item, index) => (
                    <a key={index} href={item.href}>{item.label}</a>
                ))}
            </nav>

            {menuOpen && (
                <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                    <div className="mobile-menu__header">
                        <div className="header__logo">
                            <img src={headerData.logo} alt="Consultoria Logo" />
                        </div>
                        <button className="menu-close" onClick={() => setMenuOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="mobile-menu__links">
                        {headerData.menuItems.map((item, index) => (
                            <a key={index} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
