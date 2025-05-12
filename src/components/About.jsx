import React from 'react';
import { CiStickyNote } from "react-icons/ci";
import { LuLampDesk } from "react-icons/lu";
import { TfiTarget } from "react-icons/tfi";
import { FaArrowRight } from "react-icons/fa";
import { MyTab, Tab, Content } from 'tab-react-simple';
import aboutData from '../data/about.json';

const iconMap = {
    CiStickyNote: CiStickyNote,
    TfiTarget: TfiTarget,
    LuLampDesk: LuLampDesk
};

const About = () => {
    return (
        <section id="about" className="sobre">
            <h2>{aboutData.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: aboutData.description }}></p>

            <div className="sobre__mvv">
                <MyTab>
                    {aboutData.sections.map((section, index) => {
                        const IconComponent = iconMap[section.icon];
                        return (
                            <Tab key={index}>
                                <h3><IconComponent /> {section.title} <FaArrowRight /></h3>
                            </Tab>
                        );
                    })}
                    {aboutData.sections.map((section, index) => (
                        <Content key={index}>
                            {section.list ? (
                                <ul>
                                    {section.list.map((item, idx) => <li key={idx}>{item}</li>)}
                                </ul>
                            ) : (
                                <p>{section.text}</p>
                            )}
                        </Content>
                    ))}
                </MyTab>
            </div>
        </section>
    );
};

export default About;
