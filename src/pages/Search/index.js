import React, { useState } from 'react'
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input.js';
import SelectInput from '../../components/SelectInput';
import setPageTitle from "../../setPageTitle"
import professionalsList from '../../data/professionalsList.json';
import './style.scss';

export const Search = () => {
    setPageTitle('Pesquisar')
    const [value, setValue] = useState(null);
    return (
        <>
            <Header subtitle="Estes são os profissionais disponíveis."/>
            <section className="search-content">
                <section className="search-fields">
                    <SelectInput subtitle="Profissional" data={professionalsList} prompt="Selecione a opção" id="id" label="label" value={value}onChange={(val) => setValue(val)} />
                    <Input inputStyle="input-small" pattern="text" field="where" subtitle="Onde você precisa?"></Input>
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