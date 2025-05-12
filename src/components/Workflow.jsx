import React from 'react';
import { CiPhone } from "react-icons/ci";
import { SlMagnifier } from "react-icons/sl";
import { GoRocket } from "react-icons/go";
import workflowData from '../data/workflow.json';

const iconMap = {
    CiPhone: CiPhone,
    SlMagnifier: SlMagnifier,
    GoRocket: GoRocket
};

const Workflow = () => {
    return (
        <section id="workflow" className="workflow">
            <div className="workflow__content">
                <h2>{workflowData.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: workflowData.description }}></p>
                <div className="workflow__etapas">
                    {workflowData.steps.map((step, index) => {
                        const IconComponent = iconMap[step.icon];
                        return (
                            <div key={index} className="workflow__card">
                                <span>{step.number}</span>
                                <h3><IconComponent /> {step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
