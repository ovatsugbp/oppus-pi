import React from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import setPageTitle from "../../setPageTitle"
import './style.scss';

export const ClientRegistration = () => {
    setPageTitle('Dados do Cliente')
    return (
        <div>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:" />
            <section className="client-registration-container">
                <section className="form-container">
                    <div className="form-top">
                        <h2>Seus dados</h2>
                    </div>
                    <section className="form-content">
                        <Input field="name" pattern="text" subtitle="Nome completo" inputStyle="input-medium" />
                        <Input field="photo-link" pattern="url" subtitle="Link da sua foto  (comece com //http)" inputStyle="input-medium" />
                        <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" />
                        <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" />
                    </section>
                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>Importante!<br></br>Preencha todos os dados</p>
                        </div>
                        <Button btnStyle="btn-delete">Excluir Cadastro</Button>
                        <Button btnStyle="btn-primary">Salvar cadastro</Button>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    );
}