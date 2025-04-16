import { useForm } from 'react-hook-form';
import './App.css';

function App() {
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
                <div className="header__logo">
                    <img src="https://yourlogo.com/logo.png" alt="Consultoria Logo" />
                    <span>Empresaria Consultoria</span>
                </div>
                <nav className="header__nav">
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#valores">Diferenciais</a>
                    <a href="#contato">Contato</a>
                </nav>
            </header>

            <section className="hero">
                <h1>Transformamos ideias em resultados</h1>
                <p>Consultoria estratégica para empresas que querem crescer com inteligência.</p>
                <a href="#contato" className="hero__cta">Fale com um especialista</a>
            </section>

            <section id="sobre" className="sobre">
                <h2>Quem somos</h2>
                <p>Somos uma empresa com mais de 10 anos de experiência ajudando negócios a crescerem com planejamento, inovação e resultado.</p>
            </section>

            <section id="servicos" className="servicos">
                <h2>Serviços</h2>
                <div className="cards">
                    <div className="card">
                        <h3>Planejamento Estratégico</h3>
                        <p>Alinhamento de metas, visão e ações para crescimento sustentável.</p>
                    </div>
                    <div className="card">
                        <h3>Gestão Financeira</h3>
                        <p>Controle e otimização dos recursos financeiros do seu negócio.</p>
                    </div>
                    <div className="card">
                        <h3>Marketing e Vendas</h3>
                        <p>Posicionamento, presença digital e aumento da conversão.</p>
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
            </footer>
        </>
    );
}

export default App;
