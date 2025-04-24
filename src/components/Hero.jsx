import React from 'react';
import { LuMouse } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {

    return (
        <section className="hero">
            <h1>Transformamos ideias em resultados</h1>
            <p>Consultoria estratégica para empresas que querem crescer com inteligência.</p>
            <a href="#contato" className="hero__cta">Fale com um especialista <FaArrowRight /></a>
            <p className="  scroll-indicator"><LuMouse /> Role para saber mais</p>
        </section>
    );
};

export default Hero;
