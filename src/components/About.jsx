import React from 'react';
import { CiStickyNote } from "react-icons/ci";
import { LuLampDesk } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";
import { MyTab, Tab, Content } from 'tab-react-simple';


const About = () => {

    return (
        <section id="sobre" className="sobre">
            <h2>Quem Somos</h2>
            <p>
                Somos a <strong>Zillion Business Center</strong>, uma empresa com mais de 10 anos de experiência ajudando negócios a crescerem com planejamento, inovação e resultado. Acreditamos que a colaboração é o caminho mais poderoso para impulsionar o ecossistema empresarial.
            </p>

            <div className="sobre__mvv">

                <MyTab>
                    <Tab><h3><CiStickyNote /> Visão <FaArrowRight /></h3></Tab>
                    <Content><p>
                        Conectando Empresas Para Gerar Prosperidade Local. Na Zillion Business Center, vislumbramos um ecossistema empresarial vibrante e próspero no Triângulo Mineiro. O sucesso de uma empresa não é uma jornada solitária — é a soma de colaborações estratégicas, trocas de experiências e apoio mútuo.
                    </p></Content>
                    <Tab><h3><TfiTarget /> Missão <FaArrowRight /></h3></Tab>
                    <Content><p>
                        Construir Pontes para o Futuro Empresarial Sustentável. Nossa missão é conectar empreendedores visionários a oportunidades valiosas e recursos cruciais, oferecendo um ambiente propício à inovação, aprendizado e crescimento — onde startups e empresas maduras possam florescer.
                    </p></Content>
                    <Tab><h3><LuLampDesk /> Valores <FaArrowRight /></h3></Tab>
                    <Content><ul>
                        <li>Ética e transparência</li>
                        <li>Colaboração acima da competição</li>
                        <li>Fomento à inovação</li>
                        <li>Compromisso com resultados sustentáveis</li>
                        <li>Responsabilidade social e regional</li>
                    </ul></Content>
                </MyTab>

                {/* <div className="sobre__card">
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
                </div> */}
            </div>
        </section>
    );
};

export default About;
