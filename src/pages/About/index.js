import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import imageOne from "../../assets/img/about-1.png";
import imageTwo from "../../assets/img/about-2.png";
import imageThree from "../../assets/img/about-3.png";

import './style.scss';

export const About = () => {
    return (
        <div>
            <Header subtitle="Saiba mais sobre como funciona nossa plataforma"/>
            <div className="about--container">
                <section className="about--container--one">
                    <article className="left-container">
                        <p>Nós somos um site especializado em <strong>buscas de profissionais</strong>, a ideia é que você possa com facilidade, aqui, <strong>encontrar um profissional capacitado ou oferecer seus serviços</strong>, aumentando assim a rede de contatos e facilitando a vida dos profissionais e de quem busca por seus serviços.</p>
                    </article>
                    <article className="right-container">
                        <img src={imageOne} alt="mulher olhando para páginas web" />
                    </article>
                </section>
                <section className="about--container--two">
                    <div class="custom-shape-divider-bottom-1624204232">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                        </svg>
                    </div>
                    <div className="container-two-content">                    
                        <article className="left-container">
                            <img src={imageTwo} alt="mulher com um smartphone olhando uma representação de texto" />
                        </article>
                        <article className="right-container">
                            <p>Nosso objetivo é que você tenha a <strong>melhor experiência do ínicio ao fim do processo</strong>, e é por isso mesmo que elaboramos um site intuitivo para que você se sinta <strong>confortável e seguro</strong> o tempo todo.</p>

                            <p>Se você for um profissional tudo o que precisa fazer é o cadastro em nosso site e o seu perfi já será disponibilizado nas buscas. Caso esteja buscando um profissional, você tem acesso a toda área de buscas sempre, mas para conseguir o telefone do profissional deverá estar logado em nosso sistema.</p>
                        </article>
                    </div>
                </section>
                <section className="about--container--three">
                    <article className="left-container">
                        <p>
                            Através do nosso sistema você encontra o <strong>profissional que você quer, perto de você e para quando desejar!</strong></p>

                        <p>Contamos ainda com um <strong>sistema de avaliação</strong> para que você transmita <strong>confiabilidade</strong>, caso seja profissional, e tenha <strong>segurança</strong> na hora de contratar, caso esteja buscando um profissional.
                        
                        </p>
                    </article>
                    <article className="right-container">
                        <img src={imageThree} alt="mulher sentada em cima de uma representação de um mapa" />
                    </article>
                </section>
            </div>
            <Footer />
        </div>
    )
}
