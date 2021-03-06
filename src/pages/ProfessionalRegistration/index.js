import React, { useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import Schedule from '../../components/Schedule';
import Modal from '../../components/Modal';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import modalImage from "../../assets/img/about-2.png";
import professionalsList from '../../data/professionalsList.json';
import setPageTitle from "../../setPageTitle"
import fetchApi, { updateInDataBase, saveInDataBase, deleteInDataBase } from '../../services/consumeApi'
import './style.scss';

export const ProfessionalRegistration = ({professionalId}) => {
    setPageTitle('Dados do Profissional')

    professionalId = 4
    const [isOpen, setIsOpen] = useState(false); 
    const [isInsertPasswordShown, setIsInsertPasswordShown] = useState(false);
    const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
    const [professionalOption, setProfessionalOption] = useState(null);
    const [scheduleList, setScheduleList] = useState([{id:1}])
    const [professionalData, setProfessionalData] = useState({})
    const [errors, setErrors] = useState({});

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

    function deleteProfessionalAccount(professionalId){
        deleteInDataBase(`http://localhost:8080/api/professionals/me/${professionalId}`).then(response => console.log(response))
    }

    let isValid = true;

    function validateInfo() {
    let errors={};
    if(!professionalData.name){
        errors.name = "Campo obrigat??rio";
        isValid = false;
    }

    if(!professionalData.email){
        errors.email = "Campo obrigat??rio";
        isValid = false;
    } else if(!/^[a-zA-Z0-9.!_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(professionalData.email)){
        errors.email = "E-mail inv??lido";
        isValid = false;
    }

    if(!professionalData.password){
        errors.password = "Campo obrigat??rio";
        isValid = false;
    }

    if(!professionalData.confirmPassword){
        errors.confirmPassword = "Campo obrigat??rio";
        isValid = false;
    } else if(!(professionalData.confirmPassword === professionalData.password)) {
        errors.confirmPassword = "A senha deve ser a mesma do campo anterior";
        isValid = false;
    }

    if(professionalData.photoURL && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(professionalData.photoURL)){
        errors.photoURL = "URL inv??lida";
        isValid = false;
    }

    if(!professionalData.phone){
        errors.phone = "Campo obrigat??rio";
        isValid = false;
    } else if(!/\d{11,13}/.test(professionalData.phone)){
        errors.phone = "N??mero de telefone inv??lido"
        isValid = false;
    }

    if(professionalData.socialMedia && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(professionalData.socialMedia)){
        errors.socialMedia = "URL inv??lida";
        isValid = false;
    }

    if(!professionalData.nameActivity){
        errors.nameActivity = "Campo obrigat??rio";
        isValid = false;
    }

    if(professionalData.price && !/[0-9.,]/.test(professionalData.price)){
        errors.price = "Formato de pre??o inv??lido";
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
            setIsOpen(true);
        } else {
            console.log(errors);
        } 
    }

    return (
        <div>
            <Header subtitle="Seja bem-vindo ?? nossa plataforma (:" />
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
                            field="email"
                            pattern="text"
                            subtitle="E-mail"
                            inputStyle="input-medium"
                            inputValue={professionalData?.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.email}</p>
                         <div className="form-insert-password">
                            <Input
                                field="password"
                                pattern={
                                    isInsertPasswordShown ? "text" : "password"
                                }
                                subtitle="Senha"
                                inputStyle="input-medium"
                                inputValue={professionalData?.password}
                                onChange={(e) => handleChange(e)}
                            />
                           
                            {!isInsertPasswordShown ? (
                                <VisibilityOffIcon
                                    className="password-icon"
                                    onClick={() =>
                                        setIsInsertPasswordShown(true)
                                    }
                                />
                            ) : (
                                <VisibilityIcon
                                    className="password-icon"
                                    onClick={() =>
                                        setIsInsertPasswordShown(false)
                                    }
                                />
                            )}
                        </div>
                         <p className="error-message">{errors.password}</p>
                        <div className="form-confirm-password">
                            <Input
                                field="confirmPassword"
                                pattern={
                                    isConfirmPasswordShown ? "text" : "password"
                                }
                                subtitle="Confirme sua senha"
                                inputStyle="input-medium"
                                inputValue={professionalData?.confirmPassword}
                                onChange={(e) => handleChange(e)}
                            />
                            
                            {!isConfirmPasswordShown ? (
                                <VisibilityOffIcon
                                    className="password-icon"
                                    onClick={() =>
                                        setIsConfirmPasswordShown(true)
                                    }
                                />
                            ) : (
                                <VisibilityIcon
                                    className="password-icon"
                                    onClick={() =>
                                        setIsConfirmPasswordShown(false)
                                    }
                                />
                            )}
                        </div>
                        <p className="error-message">{errors.confirmPassword}</p>
                        <Input
                            field="photoURL"
                            pattern="url"
                            subtitle="Link da sua foto  (comece com //http)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.photoURL}
                            onChange={(e) => handleChange(e)}
                        />
                         <p className="error-message">{errors.photoURL}</p>
                        <Input
                            field="phone"
                            pattern="tel"
                            subtitle="Whatsapp  (somente n??meros)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.phone}
                            onChange={(e) => handleChange(e)}
                        />
                         <p className="error-message">{errors.phone}</p>
                        <Input
                            field="socialMedia"
                            pattern="url"
                            subtitle="Rede social  (Instagram, Facebook, Twitter...)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.socialMedia}
                            onChange={(e) => handleChange(e)}
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
                                onChange={(e) => handleChange(e)}
                            ></textarea>
                        </div>
                    </section>
                    <div className="form-mid">
                        <h2>Conte para a gente com o que voc?? trabalha</h2>
                    </div>
                    <section className="form-content ocupation">
                        <SelectInput
                            field="ocupation-area"
                            subtitle="??rea de atua????o"
                            prompt={professionalData?.nameActivity || "Selecione a sua profiss??o"}
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
                            subtitle="Custo da sua hora por servi??o (em R$)"
                            inputStyle="input-medium"
                            inputValue={professionalData?.priceActivity}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.priceActivity}</p>
                    </section>
                    <div className="form-mid2">
                        <h2>Hor??rios dispon??veis</h2>
                        <div
                            className="btn-schedule"
                            role="button"
                            onClick={addSchedule}
                        >
                            <p>+ Novo hor??rio</p>
                        </div>
                    </div>

                    {   scheduleList.length > 0 ? (
                        scheduleList.map(({id, cep, availableDay, uf, city, startHour, finishHour, district}) => 
                            <Schedule key={id} scheduleId={id} scheduleList={scheduleList} setScheduleList={setScheduleList} weekDay={availableDay} startHour={startHour} finishHour={finishHour}
                             zipCodeSchedule={cep} district={district} state={uf} city={city} professionalId={professionalData?.id} 
                             onClickSave={()=> saveSchedule(id)} isDisable={!!city}/>)
                        ) : (
                            <section className="no-content">
                                <p> Nenhum hor??rio cadastrado at?? o momento</p> 
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
                        <Button btnStyle="btn-delete" onClick={()=> deleteProfessionalAccount(professionalId)}>Excluir Cadastro</Button>
                        <Button btnStyle="btn-primary" onClick={(e) => handleSubmit(e)}>Salvar cadastro</Button>
                    </section>
                </section>
            </section>
            <Footer />
            {isOpen && isValid && (
                <Modal
                    onClick={() => {
                        setIsOpen(false);
                    }}
                >
                    <h4 className="modal-title">Cadastro realizado com sucesso</h4>
                    <p className="modal-message">
                        Seu perfil ser?? disponibilizado em nossas buscas 
                        e os usu??rios interessados entrar??o em contato por Whatsapp!
                    </p>
                     <img className="woman-with-phone"
                     src={modalImage} 
                     alt="mulher com um smartphone olhando uma representa????o de texto"
                     />
                    <Link to="">
                        <Button btnStyle="btn-primary">P??gina inicial</Button>
                    </Link>
                </Modal>
            )}
        </div>
    );
}