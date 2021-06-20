import React from 'react'
import {Link} from 'react-router-dom'
import image from "../../assets/img/home_img.png";
import logo from "../../assets/img/OPPUS_logo.png";
import Button from '../../components/Button';
import './style.scss'
import Menu from '../../components/Menu'

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
                    <Link to='/pesquisa'>
                        <Button btnStyle="btn-secondary" className="element-spacing">Buscar</Button>
                    </Link>
                </article>
            </section>
            <section className="right-container">
                <img src={image} alt="mulher segurando uma lupa e apontando para uma página web" />
            </section>
            <Menu>{[{item:'Entrar',rout:'/entrar'},{item:'Registre-se',rout:'/registro'},{item:'Como funciona',rout:'/como-funciona'}]}</Menu>
        </section>
    )
}
