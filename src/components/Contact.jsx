import React from 'react';
import { useForm } from 'react-hook-form';
import { CiCircleInfo } from 'react-icons/ci';
import contactData from '../data/contact.json';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = data => {
        console.log('Form submitted:', data);
        reset();
    };

    return (
        <section id="contact" className="contato">
            <h2>{contactData.title}</h2>
            <p className="servicos__info">
                <CiCircleInfo />
                <span dangerouslySetInnerHTML={{ __html: contactData.description }}></span>
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                {contactData.fields.map((field, index) => {
                    const InputComponent = field.type === 'textarea' ? 'textarea' : 'input';
                    return (
                        <InputComponent
                            key={index}
                            type={field.type !== 'textarea' ? field.type : undefined}
                            {...register(field.name, { required: field.required })}
                            placeholder={field.placeholder}
                        />
                    );
                })}
                <button type="submit">{contactData.buttonText}</button>
            </form>
        </section>
    );
};

export default Contact;
