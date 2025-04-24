import React from 'react';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src="https://yourlogo.com/logo.png" alt="Logo rodapé" />
            </div>
            <p>© {new Date().getFullYear()} Empresaria Consultoria. Todos os direitos reservados.</p>
        </footer>
    );
};

export default Footer;
