import React from 'react'
import { Card } from '../../components/Card';

import './style.scss';

export const Search = () => {
    return (
        <section className="search-content">
            <section className="search-results">
                <Card name="Britney Spears" profession="Cantora" price="300,00"/>
                <Card name="Britney Spears" profession="Cantora" price="300,00"/>
                <Card name="Britney Spears" profession="Cantora" price="300,00"/>
            </section>
        </section>
    )
}
