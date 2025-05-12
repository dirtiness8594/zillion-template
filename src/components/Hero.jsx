import React from 'react';
import { LuMouse } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import heroData from '../data/hero.json';

const Hero = () => {
    return (
        <section className="hero">
            <h1>{heroData.title}</h1>
            <p>{heroData.description}</p>
            <a href={heroData.ctaLink} className="hero__cta">
                {heroData.ctaText} <FaArrowRight />
            </a>
            <p className="scroll-indicator">
                <LuMouse /> {heroData.scrollText}
            </p>
        </section>
    );
};

export default Hero;
