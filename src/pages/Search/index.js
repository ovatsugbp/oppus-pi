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
import fetchApi from "../../services/consumeApi";
import "./style.scss";

export const Search = () => {
    setPageTitle("Pesquisar");
    const [value, setValue] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [professionalList, setProfessionalData] = useState();

    useEffect(()=>{
        fetchApi("https://run.mocky.io/v3/1ff4494d-d033-4c87-b5f0-a41801b2f42d").then(data => {
        setProfessionalData(data?.all_professional)
    
    })
    },[])

    const telefoneProfissional = 5561123456789;
    const nomeProfissional = "Nome completo";

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
                        onChange={(val) => setValue(val)}
                    />
                    <Input
                        inputStyle="input-small"
                        pattern="text"
                        field="where"
                        subtitle="Onde você precisa?"
                    ></Input>
                    <Input
                        inputStyle="input-small"
                        pattern="datetime-local"
                        field="when"
                        subtitle="Quando você precisa?"
                    ></Input>
                </section>
                <section className="search-results">
                    <Card
                        link={`https://api.whatsapp.com/send?phone=${telefoneProfissional}&text=Ol%C3%A1%2C%20${nomeProfissional}!%20Vi%20seu%20perfil%20na%20plataforma%20Oppus%20e%20gostaria%20de%20solicitar%20um%20servi%C3%A7o.`}
                        onClick={() => {
                            setIsOpen(true);
                        }}
                        isLoggedIn={isLoggedIn}
                        name="Britney Spears"
                        profession="Cantora"
                        price="300,00"
                    />
                    {professionalList?.map((professionalData) => {
                        return (
                            <Card
                                name={professionalData?.name}
                                score={professionalData?.score}
                                biography={professionalData?.bio}
                                profession={professionalData?.nameActivity}
                                urlImage={professionalData?.photoURL}
                                price={professionalData?.priceActivity}
                                key={professionalData?.id}
                                link={`https://api.whatsapp.com/send?phone=${professionalData.phoneNumber}&text=Ol%C3%A1%2C%20${professionalData.name}!%20Vi%20seu%20perfil%20na%20plataforma%20Oppus%20e%20gostaria%20de%20solicitar%20um%20servi%C3%A7o.`}
                                onClick={() => {
                                    setIsOpen(true);
                                }}
                                isLoggedIn={isLoggedIn}
                            />
                        );
                    })}
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
