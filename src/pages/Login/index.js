import React from 'react'
import "./style.scss"
import { Link } from "react-router-dom"
import Menu from '../../components/Menu'
import Input from '../../components/Input/input';
import Button from '../../components/Button';


import image from "../../assets/img/Imagem-Login.png";
import voltar from '../../assets/img/voltar-blue.png';
import logo from '../../assets/img/OPPUS_small.png';


export const Login = () => {
    return (
        <div className="login-page">
            <div className="header">
                <Link to="/">
                    <img src={voltar} alt="voltar para a página anterior" />
                </Link>
                <Menu>
                    {[
                        {item:'Registre-se',rout:'/registro'},
                        {item:'Como funciona ',rout:'/como-funciona'},
                    ]}
                </Menu>
                <div className="menu-container">
                    <Link to="/">
                        <img src={logo} className="logo" alt="oppus logo" />
                    </Link>
                </div>
            </div>
            <section className="left-container">
                <article className="login-container">
                    <h1>Login</h1>
                    <form className="input-container">
                        <Input field="email" pattern="email" subtitle="E-mail"/>

                        <div className="forgot-password">
                            <p>Esqueci minha senha</p>
                        </div>

                        <Input field="password" pattern="password" subtitle="Senha"/>
                        
                        <Link to="/usuario">
                            <Button btnStyle="btn-secondary--blue">Login</Button>
                        </Link>
                        <p className="redirect">Precisa de uma conta? <Link to="/registro">Registre-se aqui</Link></p>
                    </form>
                </article>
            </section>
            <section className="right-container">
                <img className="door-guy" src={image} alt="garoto entrando por uma porta" />
            </section>
        </div>
    )
}

