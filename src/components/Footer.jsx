import React from 'react';
import footerData from '../data/footer.json';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={footerData.logo} alt="Logo rodapé" />
            </div>
            <p>
                {footerData.copyrightText} {new Date().getFullYear()}
            </p>
        </footer>
    );
};

export default Footer;
