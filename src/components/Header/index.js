import React from 'react';
import {Link} from 'react-router-dom'
import voltar from '../../assets/img/Voltar.png';
import logo from '../../assets/img/OPPUS_small.png';
import "./style.scss";

export const Header = ({subtitle,children}) => {
    return (
        <header>
            {children}
            <section className="header-top">
                <div className="return">
                    <Link to="/">
                        <img src={voltar} alt="botão de voltar" />
                    </Link>
                </div>
                <div className="logo-area">
                    <Link to="/">
                        <img src={logo} alt="botão de voltar" />
                    </Link>
                </div>
            </section>
            <section className="header-info">
                <h1>{subtitle}</h1>
            </section>
        </header>
    )
}
