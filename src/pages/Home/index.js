import React from 'react'
import image from "../../assets/img/home_img.png";
import logo from "../../assets/img/OPPUS_logo.png";
import './style.scss'


export const Home = () => {
    return (
        <section className="home-content">
            <section className="left-container">
                <article>
                    <img src={logo} className="element-spacing" alt="oppus logo"/>
                    <h2 className="element-spacing">Os melhores profissionais você encontra aqui</h2>
                </article>
                <article>
                    <p className="element-spacing">Qual profissional você está precisando?</p>
                    <button className="element-spacing">Buscar</button>
                </article>
            </section>
            <section className="right-container">
                <img src={image} alt="mulher segurando uma lupa e apontando para uma página web" />
            </section>
        </section>
    )
}
