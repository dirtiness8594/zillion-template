import React from 'react';
import { useForm } from 'react-hook-form';
import { CiCircleInfo } from "react-icons/ci";

const Contact = () => {

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
    );
};

export default Contact;
