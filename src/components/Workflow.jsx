import React from 'react';
import { CiPhone } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { GoRocket } from "react-icons/go";

const Workflow = () => {

    return (
        <section id="workflow" className="workflow">
            <div className="workflow__content">
                <h2>Como Funciona</h2>
                <p>Nosso processo é <b>simples</b>, direto e focado em resultados concretos.</p>
                <div className="workflow__etapas">
                    <div className="workflow__card">
                        <span>01</span>
                        <h3><CiPhone />Reunião Inicial</h3>
                        <p>Entendemos seus desafios e objetivos em um bate-papo estratégico.</p>
                    </div>
                    <div className="workflow__card">
                        <span>02</span>

                        <h3><SlMagnifier />Diagnóstico</h3>
                        <p>Analisamos seu negócio e identificamos oportunidades e pontos de melhoria.</p>
                    </div>
                    <div className="workflow__card">
                        <span>03</span>

                        <h3><GoRocket />Implementação</h3>
                        <p>Aplicamos soluções personalizadas e acompanhamos os resultados junto com você.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Workflow;
