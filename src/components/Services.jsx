import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { TbCash } from "react-icons/tb";
import { CiBoxes } from "react-icons/ci";
import servicesData from '../data/services.json';

const iconMap = {
    CiBoxes: CiBoxes,
    TbCash: TbCash,
    BsFileBarGraph: BsFileBarGraph
};

const Services = () => {
    return (
        <section id="services" className="servicos">
            <h2>{servicesData.title}</h2>
            <p className="servicos__info">{servicesData.description}</p>
            <div className="cards">
                {servicesData.services.map((service, index) => {
                    const IconComponent = iconMap[service.icon];
                    return (
                        <div key={index} className="card">
                            <div className="card__icon">
                                <IconComponent />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href={service.link}>Saiba mais <FaArrowRight /></a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
