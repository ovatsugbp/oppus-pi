import React, { useEffect, useState } from 'react'
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input.js';
import SelectInput from '../../components/SelectInput';
import setPageTitle from "../../setPageTitle"
import professionsList from '../../data/professionalsList.json';
import fetchApi from "../../services/consumeApi"
import './style.scss';


export const Search = () => {
    setPageTitle('Pesquisar')
    const [value, setValue] = useState(null);
    const [professionalList, setProfessionalData] = useState()

    useEffect(()=>{
        fetchApi("url").then(data => {
        setProfessionalData(data?.all_professional)
    
    })
    },[])

    return (
        <>
            <Header subtitle="Estes são os profissionais disponíveis."/>
            <section className="search-content">
                <section className="search-fields">
                    <SelectInput subtitle="Profissional" data={professionsList} prompt="Selecione a opção" id="id" label="label" value={value}onChange={(val) => setValue(val)} />
                    <Input inputStyle="input-small" pattern="text" field="where" subtitle="Onde você precisa?"></Input>
                    <Input inputStyle="input-small" pattern="datetime-local" field="when" subtitle="Quando você precisa?"></Input>
                </section>
                <section className="search-results">
                    {
                        professionalList?.map(professionalData =>{
                            return <Card name={professionalData?.name} score={professionalData?.score} biography={professionalData?.bio} profession={professionalData?.nameActivity} urlImage={professionalData?.photoURL} price={professionalData?.priceActivity} key={professionalData?.id}/>
                        })
                    }
                </section>
            </section>
            <Footer/>
        </>
    )
}