import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import setPageTitle from "../../setPageTitle"
import './style.scss';

export const ClientRegistration = () => {
    setPageTitle('Dados do Cliente')

    const [userData, setUserData] = useState({});
    const [errors, setErrors] = useState({});

    let isValid;

    function validateInfo() {
    let errors = {};

    if(!userData.name){
        errors.name = "Campo obrigatório";
        isValid = false;
    }

    if(!userData.email){
        errors.email = "Campo obrigatório";
        isValid = false;
    } else if(!/^[a-zA-Z0-9.!_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(userData.email)){
        errors.email = "E-mail inválido";
        isValid = false;
    }

    if(!userData.password){
        errors.password = "Campo obrigatório";
        isValid = false;
    }

    if(!userData.confirmPassword){
        errors.confirmPassword = "Campo obrigatório";
        isValid = false;
    } else if(!(userData.confirmPassword === userData.password)) {
        errors.confirmPassword = "A senha deve ser a mesma do campo anterior";
        isValid = false;
    }

    if(userData.photoUrl && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(userData.photoUrl)){
        errors.photoUrl = "URL inválida";
        isValid = false;
    }

    if(!userData.locationDistrict){
        errors.locationDistrict = "Campo obrigatório";
        isValid = false;
    }

    if(!userData.locationCity){
        errors.locationCity = "Campo obrigatório";
        isValid = false;
    } else {
        isValid = true;
    }
    setErrors({...errors});
    }

    const handleChange = e => {
        setUserData(
            {...userData, [e.target.name]: e.target.value}
        );
    }

    const handleSubmit = e => {
        validateInfo();
        e.preventDefault();

        if(isValid){
            console.log("submitted");
            console.log(userData);
        } else if(!isValid) {
            console.log(errors);
        }
        
    }

    return (
        <div>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:" />
            <section className="client-registration-container">
                <section className="form-container">
                    <div className="form-top">
                        <h2>Seus dados</h2>
                    </div>
                    <section className="form-content">
                        <Input
                            field="name"
                            pattern="text"
                            subtitle="Nome completo"
                            inputStyle="input-medium"
                            inputValue={userData.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.name}</p>
                        <Input
                            field="email"
                            pattern="text"
                            subtitle="E-mail"
                            inputStyle="input-medium"
                            inputValue={userData.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.email}</p>
                        <Input
                            field="password"
                            pattern="password"
                            subtitle="Senha"
                            inputStyle="input-medium"
                            inputValue={userData.password}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.password}</p>
                        <Input
                            field="confirmPassword"
                            pattern="password"
                            subtitle="Confirme sua senha"
                            inputStyle="input-medium"
                            inputValue={userData.confirmPassword}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.confirmPassword}</p>
                        <Input
                            field="photoUrl"
                            pattern="url"
                            subtitle="Link da sua foto  (comece com //http)"
                            inputStyle="input-medium"
                            inputValue={userData.photoUrl}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.photoUrl}</p>
                        <Input
                            field="locationDistrict"
                            pattern="text"
                            subtitle="Bairro"
                            inputStyle="input-medium"
                            inputValue={userData.locationDistrict}
                            onChange={(e) => handleChange(e)}

                        />
                        <p className="error-message">{errors.locationDistrict}</p>
                        <Input
                            field="locationCity"
                            pattern="text"
                            subtitle="Cidade"
                            inputStyle="input-medium"
                            inputValue={userData.locationCity}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.locationCity}</p>
                    </section>
                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>
                                Importante!<br></br>Preencha todos os dados
                            </p>
                        </div>
                        <Button btnStyle="btn-delete">Excluir Cadastro</Button>
                        {/* <Button btnStyle="btn-primary" onClick={(e) => handleSubmit(e)}>
                            <Link to="/pesquisa">Salvar cadastro</Link>
                        </Button> */}
                        <Button btnStyle="btn-primary" onClick={(e) => handleSubmit(e)}>
                            Salvar cadastro
                        </Button>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    );
}