import React, { useState } from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import professionalsList from '../../data/professionalsList.json';
import daysOfTheWeek from '../../data/daysOfTheWeek.json';
import setPageTitle from "../../setPageTitle"
import './style.scss';

export const ProfessionalRegistration = () => {
    setPageTitle('Dados do Profissional')

    const [day, setDay] = useState(null);
     const [option, setOption] = useState(null);

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
                        <label className="input-label" htmlFor="biography">Biografia</label>
                        <textarea id="biography" name="biography" rows='5' cols='45' ></textarea>
                    </section>
                    <div className="form-mid">
                        <h2>Conte para a gente com o que você trabalha</h2>
                    </div>
                    <section className="form-content ocupation">
                        <SelectInput field="ocupation-area" subtitle="Área de atuação" prompt="Selecione a sua profissão" data={professionalsList}  id="id" label="label" value={option} onChange={(val) => setOption(val)}></SelectInput>
                        <Input field="price" pattern="number" subtitle="Custo da sua hora por serviço (em R$)" inputStyle="input-medium" />
                    </section>
                    <div className="form-mid2">
                        <h2>Horários disponíveis</h2>
                        <div className="btn-schedule" role="button" >
                            <p>+ Novo horário</p>
                        </div>
                    </div>
                    <section className="form-content schedule">
                        <div className="period">
                        <SelectInput subtitle="Dia da semana" field="week-day" prompt="Selecione" data={daysOfTheWeek}  id="id" label="label" value={day} onChange={(val) => setDay(val)}></SelectInput>
                        <Input field="start-hour" pattern="time" subtitle="Das" inputStyle="input-medium" />
                        <Input field="finish-hour" pattern="time" subtitle="Até" inputStyle="input-medium" />
                        </div>
                        <div className="location-row1">
                        <Input field="location-cep" pattern="text" subtitle="CEP" inputStyle="input-medium" />
                        <Input field="location-UF" pattern="text" subtitle="UF" inputStyle="input-medium" />
                        <button className="trash-bin-icon">
                             <DeleteOutlineOutlinedIcon />
                        </button>
                        </div>
                        <div className="location-row2">
                        <Input field="location-district" pattern="text" subtitle="Bairro" inputStyle="input-medium" />
                        <Input field="location-city" pattern="text" subtitle="Cidade" inputStyle="input-medium" />
                        </div>
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