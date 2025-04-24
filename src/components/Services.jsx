import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { TbCash } from "react-icons/tb";
import { CiBoxes } from "react-icons/ci";

const Services = () => {

    return (
        <section id="servicos" className="servicos">
            <h2>Serviços</h2>
            <p className="servicos__info">
                Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
            </p>
            <div className="cards">
                <div className="card">
                    <div className="card__icon">
                        <CiBoxes />
                    </div>
                    <h3>Planejamento Estratégico</h3>
                    <p>Alinhamento de metas, visão e ações para crescimento sustentável.</p>
                    <a href="">Saiba mais <FaArrowRight /></a>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <TbCash />
                    </div>
                    <h3>Gestão Financeira</h3>
                    <p>Controle e otimização dos recursos financeiros do seu negócio.</p>
                    <a href="">Saiba mais <FaArrowRight /></a>
                </div>
                <div className="card">
                    <div className="card__icon">
                        <BsFileBarGraph />
                    </div>
                    <h3>Marketing e Vendas</h3>
                    <p>Posicionamento, presença digital e aumento da conversão.</p>
                    <a href="">Saiba mais <FaArrowRight /></a>
                </div>
            </div>
        </section>
    );
};

export default Services;
