import React from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';

import './style.scss';

export const ProfessionalRegistration = () => {
    return (
        <div>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:" />
            <section className="professional-registration-container">
                <section className="form-container">
                    <div className="form-top">
                        <h2>Seus dados</h2>
                    </div>
                    <section className="form-content">
                        <Input field="name" pattern="text" subtitle="Nome completo" inputStyle="input-medium" />
                        <Input field="photo-link" pattern="url" subtitle="Link da sua foto  (comece com //http)" inputStyle="input-medium" />
                        <Input field="phone-number" pattern="tel" subtitle="Whatsapp  (somente números)" inputStyle="input-medium" />
                        <Input field="social-media" pattern="url" subtitle="Rede social  (Instagram, Facebook, Twitter...)" inputStyle="input-medium" />
                        <Input field="biography" pattern="text" subtitle="Biografia" inputStyle="input-medium" />
                    </section>
                    <div className="form-mid">
                        <h2>Conte para a gente com o quê você trabalha</h2>
                    </div>
                    <section className="form-content">
                        <Input field="occupation-area" pattern="text" subtitle="Área de atuação" inputStyle="input-medium" />
                        <Input field="price" pattern="number" subtitle="Custo da sua hora por serviço (em R$)" inputStyle="input-medium" />
                    </section>
                    <div className="form-mid2">
                        <h2>Horários disponíveis</h2>
                        <p> + Novos horários</p>
                    </div>
                    <section className="form-content">
                        <div className="period">
                        <Input field="week-day" pattern="text" subtitle="Dia da semana" inputStyle="input-medium" />
                        <Input field="start-hour" pattern="time" subtitle="Das" inputStyle="input-medium" />
                        <Input field="finish-hour" pattern="time" subtitle="Até" inputStyle="input-medium" />
                        </div>
                        <div className="location">
                        <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" />
                        <Input field="location-UF" pattern="text" subtitle="UF" inputStyle="input-medium" />
                        </div>
                        <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" />
                    </section>
                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>Importante!<br></br>Preencha todos os dados</p>
                        </div>
                        <Button btnStyle="btn-primary">Salvar cadastro</Button>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    );
}