import React from 'react'
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input.js';
import Menu from '../../components/Menu'
import './style.scss';

export const Search = () => {
    return (
        <>
            <Header subtitle="Estes são os profissionais disponíveis.">
            <Menu>
                {[{item:'menu item ',url:'url test '},{item:'menu item ',url:'url test '},{item:'menu item ',url:'url test '},{item:'menu item ',url:'url test '}]}
            </Menu>
            </Header>
            <section className="search-content">
                <section className="search-fields">
                    <Input inputStyle="input-small" pattern="text" field="area" subtitle="Qual profissional você precisa?"></Input>
                    <Input inputStyle="input-small" pattern="password" field="where" subtitle="Onde você precisa?"></Input>
                    <Input inputStyle="input-small" pattern="datetime-local" field="when" subtitle="Quando você precisa?"></Input>
                </section>
                <section className="search-results">
                    <Card name="Britney Spears" profession="Cantora" price="300,00"/>
                    <Card name="Britney Spears" profession="Cantora" price="300,00"/>
                    <Card name="Britney Spears" profession="Cantora" price="300,00"/>
                </section>
            </section>
            <Footer/>
        </>
    )
}
