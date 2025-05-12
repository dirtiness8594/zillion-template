import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__logo">
                    <img
                        src="https://img1.wsimg.com/isteam/ip/0a84f097-dbcb-4e7d-8d71-7793e8793494/logo-zillionAtivo%201.png/:/rs=w:394,h:75,cg:true,m/cr=w:394,h:75/qt=q:95"
                        alt="Consultoria Logo"
                    />
                </div>
                <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
                    <FaBars />
                </button>
            </div>

            <nav className="header__nav">
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#workflow">Diferenciais</a>
                <a href="#contact">Contato</a>
                <a href="#contato">+55 (99) 1234 - 1234 </a>
            </nav>

            {menuOpen && (
                <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
                    <div className="mobile-menu__header">
                        <div className="header__logo">
                            <img
                                src="https://img1.wsimg.com/isteam/ip/0a84f097-dbcb-4e7d-8d71-7793e8793494/logo-zillionAtivo%201.png/:/rs=w:394,h:75,cg:true,m/cr=w:394,h:75/qt=q:95"
                                alt="Consultoria Logo"
                            />
                        </div>
                        <button className="menu-close" onClick={() => setMenuOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="mobile-menu__links">
                        <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
                        <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
                        <a href="#valores" onClick={() => setMenuOpen(false)}>Diferenciais</a>
                        <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
                        <a href="#contato" onClick={() => setMenuOpen(false)}>+55 (99) 1234 - 1234 </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
