import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import './App.css';
import { LuMouse } from "react-icons/lu";
import { FaArrowRight, FaInfo, FaBars, FaTimes } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { TbCash } from "react-icons/tb";
import { CiBoxes, CiPhone } from "react-icons/ci";
import { CiCircleInfo, CiStickyNote } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import { LuLampDesk } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";


function App() {

    const [menuOpen, setMenuOpen] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        reset();
    };

    return (
        <>
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
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#valores">Diferenciais</a>
                    <a href="#contato">Contato</a>
                    <a href="#contato">+55 (99) 1234 - 1234 </a>
                </nav>

                {menuOpen && (
                    <div className={`mobile-menu ${menuOpen ? "show": ""}`}>
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


            {/* <section className="hero">
                <h1>Transformamos ideias em resultados</h1>
                <p>Consultoria estratégica para empresas que querem crescer com inteligência.</p>
                <a href="#contato" className="hero__cta">Fale com um especialista <FaArrowRight /></a>
            <p className="  scroll-indicator"><LuMouse /> Role para saber mais</p>
            </section> */}

            {/* <section id="sobre" className="sobre">
                <h2>Quem Somos</h2>
                <p>
                    Somos a <strong>Zillion Business Center</strong>, uma empresa com mais de 10 anos de experiência ajudando negócios a crescerem com planejamento, inovação e resultado. Acreditamos que a colaboração é o caminho mais poderoso para impulsionar o ecossistema empresarial.
                </p>

                <div className="sobre__mvv">
                    <div className="sobre__card">
                        <h3><CiStickyNote /> Visão <FaArrowRight /></h3>
                        <p>
                            Conectando Empresas Para Gerar Prosperidade Local. Na Zillion Business Center, vislumbramos um ecossistema empresarial vibrante e próspero no Triângulo Mineiro. O sucesso de uma empresa não é uma jornada solitária — é a soma de colaborações estratégicas, trocas de experiências e apoio mútuo.
                        </p>
                    </div>

                    <div className="sobre__card">
                        <h3><TfiTarget /> Missão <FaArrowRight /></h3>
                        <p>
                            Construir Pontes para o Futuro Empresarial Sustentável. Nossa missão é conectar empreendedores visionários a oportunidades valiosas e recursos cruciais, oferecendo um ambiente propício à inovação, aprendizado e crescimento — onde startups e empresas maduras possam florescer.
                        </p>
                    </div>

                    <div className="sobre__card">
                        <h3><LuLampDesk /> Valores <FaArrowRight /></h3>
                        <ul>
                            <li>Ética e transparência</li>
                            <li>Colaboração acima da competição</li>
                            <li>Fomento à inovação</li>
                            <li>Compromisso com resultados sustentáveis</li>
                            <li>Responsabilidade social e regional</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="workflow">
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

            <section id="valores" className="valores">
                <h2>Nossos Diferenciais</h2>
                <div className="valores__grid">
                    <div className="valores__card">✅ Atendimento personalizado</div>
                    <div className="valores__card">✅ Resultados mensuráveis</div>
                    <div className="valores__card">✅ Equipe com expertise</div>
                    <div className="valores__card">✅ Suporte contínuo</div>
                    <div className="valores__card">✅ Foco em inovação</div>
                </div>
            </section>

            <section id="contato" className="contato">
                <h2>Entre em Contato</h2>
                <p className="servicos__info">
                    <CiCircleInfo />Retornaremos seu contato em até <b>24h</b>, por isto, informe seu e-mail preferido.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="form">
                    <input type="text" {...register('nome', { required: true })} placeholder="Seu nome" />
                    <input type="email" {...register('email', { required: true })} placeholder="Seu email" />
                    <textarea {...register('mensagem', { required: true })} placeholder="Sua mensagem" />
                    <button type="submit">Enviar</button>
                </form>
            </section>

            <footer className="footer">
                <div className="footer__logo">
                    <img src="https://yourlogo.com/logo.png" alt="Logo rodapé" />
                </div>
                <p>© {new Date().getFullYear()} Empresaria Consultoria. Todos os direitos reservados.</p>
            </footer> */}

            <a
                href="https://wa.me/5511999999999"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco no WhatsApp"
            >
                💬
            </a>
        </>
    );
}

export default App;
