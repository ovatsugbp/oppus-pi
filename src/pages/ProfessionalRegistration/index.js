import React, { useState , useEffect} from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import Schedule from '../../components/Schedule';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import professionalsList from '../../data/professionalsList.json';
import setPageTitle from "../../setPageTitle"
import fetchApi, { updateInDataBase, saveInDataBase } from '../../services/consumeApi'
import './style.scss';

export const ProfessionalRegistration = ({professionalId}) => {
    setPageTitle('Dados do Profissional')
    professionalId = 4
    const [professionalOption, setProfessionalOption] = useState(null);
    const [errors, setErrors] = useState({});
    const [scheduleList, setScheduleList] = useState([{id:1}])
    const [professionalData, setProfessionalData] = useState({})

    useEffect(()=>{
        fetchApi(`http://localhost:8080/api/professionals/me/${professionalId}`).then(data => {
            let {professionalSchedule} = data
            setProfessionalData(data)
            setScheduleList(professionalSchedule)
        })
    },[])

    function addSchedule() {
        saveInDataBase(`http://localhost:8080/api/schedule/register/${professionalId}`, {}).then(response => {
            setScheduleList([...scheduleList,response])
        })
    }

    

    let isValid = true;

    function validateInfo() {
    let errors = {};

    if(!professionalData.name){
        errors.name = "Campo obrigatório";
        isValid = false;
    }

     if(!professionalData.photoURL){
        errors.photoURL = "Campo obrigatório";
        isValid = false;
    } else if(professionalData.photoURL && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(professionalData.photoURL)){
        errors.photoURL = "URL inválida";
        isValid = false;
    }

    if(!professionalData.phone){
        errors.phone = "Campo obrigatório";
        isValid = false;
    } else if(!/\d{11,13}/.test(professionalData.phone)){
        errors.phone = "Número de telefone inválido"
        isValid = false;
    }

     if(professionalData.socialMedia && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(professionalData.socialMedia)){
        errors.socialMedia = "URL inválida";
        isValid = false;
    }

    if(!professionalData.nameActivity){
        errors.nameActivity = "Campo obrigatório";
        isValid = false;
    }

    if(professionalData.price && !/[0-9.,]/.test(professionalData.price)){
        errors.price = "Formato de preço inválido";
        isValid = false;
    }
    setErrors({...errors});
    }

    const handleChange = e => {
        setProfessionalData(
            {...professionalData, [e.target.name]: e.target.value}
    );
    }

    const handleSubmit = e => {
        validateInfo();
        e.preventDefault();

        if(isValid){
            updateInDataBase(`http://localhost:8080/api/professionals/update/${professionalId}`,professionalData).then(data => console.log(data))
        } else {
            console.log(errors);
        } 
    }



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
                            inputValue={professionalData?.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.name}</p>
                        <Input
                            field="photoURL"
                            pattern="url"
                            subtitle="Link da sua foto  (comece com //http)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.photoURL}
                            onChange={handleChange}
                        />
                         <p className="error-message">{errors.photoURL}</p>
                        <Input
                            field="phone"
                            pattern="tel"
                            subtitle="Whatsapp  (somente números)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.phone}
                            onChange={handleChange}
                        />
                         <p className="error-message">{errors.phone}</p>
                        <Input
                            field="socialMedia"
                            pattern="url"
                            subtitle="Rede social  (Instagram, Facebook, Twitter...)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.socialMedia}
                            onChange={handleChange}
                        />
                        <p className="error-message">{errors.socialMedia}</p>
                        <div className="textarea-container">
                            <label className="input-label" htmlFor="biography">
                                Biografia
                            </label>
                            <textarea
                                id="biography"
                                name="bio"
                                rows="5"
                                cols="45"
                                defaultValue={professionalData?.bio}
                                onChange={handleChange}
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
                            prompt={professionalData?.nameActivity || "Selecione a sua profissão"}
                            data={professionalsList}
                            id="id"
                            label="label"
                            value={professionalOption}
                            onChange={(val) => {
                                setProfessionalOption(val)
                                setProfessionalData({...professionalData, nameActivity:val.label})
                            }}
                        ></SelectInput>
                        <p className="error-message">{errors.nameActivity}</p>
                        <Input
                            field="priceActivity"
                            pattern="number"
                            subtitle="Custo da sua hora por serviço (em R$)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.priceActivity}
                            onChange={handleChange}
                        />
                        <p className="error-message">{errors.priceActivity}</p>
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

                    {   scheduleList.length > 0 ? (
                        scheduleList.map(({id, cep, availableDay, uf, city, startHour, finishHour, district}) => 
                            <Schedule key={id} scheduleId={id} scheduleList={scheduleList} setScheduleList={setScheduleList} weekDay={availableDay} startHour={startHour} finishHour={finishHour}
                             zipCodeSchedule={cep} district={district} state={uf} city={city} professionalId={professionalData?.id} 
                             onClickSave={()=> saveSchedule(id)} isDisable={!!city}/>)
                        ) : (
                            <section className="no-content">
                                <p> Nenhum horário cadastrado até o momento</p> 
                            </section>
                        )
                    }

                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>
                                Importante!<br></br>Preencha todos os dados
                            </p>
                        </div>
                        <Button btnStyle="btn-delete">Excluir Cadastro</Button>
                        <Button btnStyle="btn-primary" onClick={handleSubmit}>Salvar cadastro</Button>
                    </section>
                </section>
            </section>
            <Footer />
        </div>
    );
}