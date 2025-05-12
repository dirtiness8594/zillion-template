import React from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Workflow from './components/Workflow';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';

function App() {
    return (
        <>
            <Helmet>
                <title>Produto Incrível | Minha Loja</title>
                <meta name="description" content="Compre o Produto Incrível com desconto!" />
                <meta property="og:title" content="Produto Incrível | Minha Loja" />
                <meta property="og:description" content="Oferta imperdível do Produto Incrível." />
                <meta property="og:image" content="https://meusite.com/imagens/produto.jpg" />
            </Helmet>
            <Header />
            <Hero />
            <About />
            <Workflow />
            <Services />
            <Values />
            <Contact />
            <Footer />
            <WhatsappButton />
        </>
    );
}

export default App;
