import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Input from "../../components/Input/input.js";
import SelectInput from "../../components/SelectInput";
import setPageTitle from "../../setPageTitle";
import professionsList from "../../data/professionalsList.json";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
import image from "../../assets/img/Imagem-Login.png";
import Button from "../../components/Button";
import {fetchData} from "../../services/consumeApi";
import "./style.scss";
import daysOfTheWeek from '../../data/daysOfTheWeek.json';

export const Search = () => {
    setPageTitle("Pesquisar");
    const [value, setValue] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [professionalList, setProfessionalData] = useState();
    const [professionalListFiltred, SetProfessionalListFiltred] = useState([])
    const [day, setDay] = useState(null);

    function filterProfessionals(professionalToFilter, cityToFilter = "", hora = "", dia = ""){
        let newList = [...professionalList]
        
        if(professionalToFilter){
            console.log("val",professionalToFilter)
            newList = newList.filter(professional => professional.nameActivity === professionalToFilter)
            
        }
        
        if(cityToFilter){
            newList = newList.filter(professional => professional.professionalSchedule.filter(schedule => schedule.city === cityToFilter))
            console.log("newList", newList)
        }
        SetProfessionalListFiltred(newList)
        // if(hora){
        //     console.log("newProfessionalsFitred não vazio",newProfessionalsFitred)
        //     SetProfessionalListFiltred(newProfessionalsFitred)
        // }else{
        //     SetProfessionalListFiltred(professionalListFiltred)
        //     console.log("newProfessionalsFitred vazia",newProfessionalsFitred)
        //     console.log("filteredListOfProfessionals",professionalListFiltred)
        // }
    }

    useEffect(()=>{
        fetchData("http://localhost:8080/api/professionals").then(data => {
        setProfessionalData(data?.content)
        SetProfessionalListFiltred(data?.content)
    })
    },[])

    return (
        <>
            <Header subtitle="Estes são os profissionais disponíveis." />
            <section className="search-content">
                <section className="search-fields">
                    <SelectInput
                        subtitle="Profissional"
                        data={professionsList}
                        prompt="Selecione a opção"
                        id="id"
                        label="label"
                        value={value}
                        onChange={(val) => {
                            setValue(val)
                            filterProfessionals(val?.label)
                        }}
                    />
                    <Input
                        inputStyle="input-small"
                        pattern="text"
                        field="where"
                        subtitle="Onde você precisa?"
                    ></Input>

                    <SelectInput subtitle="Que dia você precisa?" 
                    field="week-day" 
                    prompt={"Selecione"} 
                    data={daysOfTheWeek}  id="id" 
                    label="label" 
                    value={day} 
                    onChange={(val) => {
                        setDay(val)
                    }}
                    />
                </section>
                <section className="search-results">
                    {
                        professionalList || professionalList?.length > 0 ? (
                            
                            professionalListFiltred.map((professionalData) => {
                        return (
                            <Card
                                name={professionalData?.name}
                                score={professionalData?.score}
                                biography={professionalData?.bio}
                                profession={professionalData?.nameActivity}
                                urlImage={professionalData?.photoURL}
                                price={professionalData?.priceActivity}
                                key={professionalData?.id}
                                link={`https://api.whatsapp.com/send?phone=${professionalData.phone}&text=Ol%C3%A1%2C%20${professionalData.name}!%20Vi%20seu%20perfil%20na%20plataforma%20Oppus%20e%20gostaria%20de%20solicitar%20um%20servi%C3%A7o.`}
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                                isLoggedIn={isLoggedIn}
                            />
                        );
                    })) : (
                        <section className="no-content">
                            <p>Desculpe, não conseguimos encontrar nenhum profissional para os dias e horário selecionados  </p>
                        </section>
                    )}
                </section>
            </section>
            <Footer />
            {isOpen && !isLoggedIn && (
                <Modal
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <p className="modal-message">
                        Você deve estar logado para ter acesso ao contanto do
                        profissional
                    </p>
                    <img
                        className="door-guy"
                        src={image}
                        alt="garoto entrando por uma porta"
                    />
                    <Link to="/entrar">
                        <Button btnStyle="btn-primary">Login</Button>
                    </Link>
                </Modal>
            )}
        </>
    );
};
