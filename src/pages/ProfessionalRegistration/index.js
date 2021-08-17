import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import Schedule from '../../components/Schedule';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import professionalsList from '../../data/professionalsList.json';
import setPageTitle from "../../setPageTitle"
import api from '../../services/consumeApi';
import './style.scss';

export const ProfessionalRegistration = () => {
    setPageTitle('Dados do Profissional')

    const [option, setOption] = useState(null);
    const [count, setCount] = useState(1);
    const [list, setList] = useState([{id:0}])
    const [professionalData, setProfessionalData] = useState([])

    function addSchedule() {
        setList([...list,{id:count}])
        setCount(count+1)
    }

    function removeSchedule(id) {
        let newList = list.filter(value => value.id !== id )
        setList([...newList])
    }

    

    useEffect(() => {
        api.get("")
            .then((res) => setProfessionalData(res.data))
            .catch((err) => console.log(err));
    }, [])

    

    console.log('professional data', professionalData);

    return (
        <div>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:" />
            <section className="professional-registration-container">
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
                            inputValue={professionalData.name}
                            onInput={(e) => professionalData.name = setProfessionalData(e.target.value)}
                        />
                        <Input
                            field="photo-link"
                            pattern="url"
                            subtitle="Link da sua foto  (comece com //http)"
                            inputStyle="input-medium"
                            inputValue={professionalData.photoURL}
                        />
                        <Input
                            field="phone-number"
                            pattern="tel"
                            subtitle="Whatsapp  (somente números)"
                            inputStyle="input-medium"
                            inputValue={professionalData.phone}
                        />
                        <Input
                            field="social-media"
                            pattern="url"
                            subtitle="Rede social  (Instagram, Facebook, Twitter...)"
                            inputStyle="input-medium"
                            inputValue={professionalData.socialMedia}
                        />
                        <div className="textarea-container">
                            <label className="input-label" htmlFor="biography">
                                Biografia
                            </label>
                            <textarea
                                id="biography"
                                name="biography"
                                rows="5"
                                cols="45"
                            ></textarea>
                        </div>
                    </section>
                    <div className="form-mid">
                        <h2>Conte para a gente com o que você trabalha</h2>
                    </div>
                    <section className="form-content ocupation">
                        <SelectInput
                            field="ocupation-area"
                            subtitle="Área de atuação"
                            prompt="Selecione a sua profissão"
                            data={professionalsList}
                            id="id"
                            label="label"
                            value={option}
                            onChange={(val) => setOption(val)}
                        ></SelectInput>
                        <Input
                            field="price"
                            pattern="number"
                            subtitle="Custo da sua hora por serviço (em R$)"
                            inputStyle="input-medium"
                        />
                    </section>
                    <div className="form-mid2">
                        <h2>Horários disponíveis</h2>
                        <div
                            className="btn-schedule"
                            role="button"
                            onClick={addSchedule}
                        >
                            <p>+ Novo horário</p>
                        </div>
                    </div>

                    {list.map(({ id }) => (
                        <Schedule
                            key={id}
                            id={id}
                            handleClick={() => removeSchedule(id)}
                        />
                    ))}

                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>
                                Importante!<br></br>Preencha todos os dados
                            </p>
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