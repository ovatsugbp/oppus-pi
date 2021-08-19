import React, { useState } from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import setPageTitle from "../../setPageTitle"
import './style.scss';

export const ClientRegistration = () => {
    setPageTitle('Dados do Cliente')

    const [values, setValues] = useState({
    name: '',
    photoLink: '',
    locationCity: '',
    locationDistrict: ''
});

    const [errors, setErrors] = useState({});

    let isValid;

    function validateInfo() {
    let errors = {};

    if(!values.name){
        errors.name = "Campo obrigatório";
        isValid = false;
    }

    if(!values.photoLink){
        errors.photoLink = "Campo obrigatório";
        isValid = false;
    } else if(!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(values.photoLink)){
        errors.photoLink = "Link inválido";
        isValid = false;
    }

    if(!values.locationDistrict){
        errors.locationDistrict = "Campo obrigatório";
        isValid = false;
    }

    if(!values.locationCity){
        errors.locationCity = "Campo obrigatório";
        isValid = false;
    } else {
        isValid = true;
    }
    setErrors({...errors});
    }

    const handleChange = e => {
        setValues(
            {...values, [e.target.name]: e.target.value}
    );
        console.log(values);
    }

    const handleSubmit = e => {
        validateInfo();
        e.preventDefault();

        if(isValid){
            console.log("submitted");
            console.log(values);
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
                    <form className="form-content">
                        <Input field="name" pattern="text" inputValue={values.name} onChange={handleChange} subtitle="Nome completo" inputStyle="input-medium" />
                        <p className="error-message">{errors.name}</p>
                        <Input field="photoLink" pattern="url" inputValue={values.photoLink} onChange={handleChange} subtitle="Link da sua foto  (comece com //http)" inputStyle="input-medium" />
                        <p className="error-message">{errors.photoLink}</p>
                        <Input field="locationDistrict" pattern="text" inputValue={values.locationDistrict} onChange={handleChange} subtitle="Bairro" inputStyle="input-medium" />
                        <p className="error-message">{errors.locationDistrict}</p>
                        <Input field="locationCity" pattern="text" inputValue={values.locationCity} onChange={handleChange} subtitle="Cidade" inputStyle="input-medium" />
                        <p className="error-message">{errors.locationCity}</p>
                    </form>
                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>Importante!<br></br>Preencha todos os dados</p>
                        </div>
                        <Button btnStyle="btn-delete">Excluir Cadastro</Button>
                        <Button type="submit" onClick={handleSubmit} btnStyle="btn-primary">Salvar cadastro</Button>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    );
}