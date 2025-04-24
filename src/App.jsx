import React from 'react';
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
