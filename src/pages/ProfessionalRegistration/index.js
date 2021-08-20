import React, { useState } from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import SelectInput from '../../components/SelectInput';
import Schedule from '../../components/Schedule';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import professionalsList from '../../data/professionalsList.json';
import setPageTitle from "../../setPageTitle"
import './style.scss';

export const ProfessionalRegistration = () => {
    setPageTitle('Dados do Profissional')

    const [professionalOption, setProfessionalOption] = useState(null);
    const [count, setCount] = useState(1);
    const [list, setList] = useState([{id:0}]);
    const [values, setValues] = useState({
    name: '',
    photoUrl: '',
    phoneNumber: '',
    socialMediaUrl: '',
    ocupationArea: {professionalOption},
    price: '',
    });

    const [errors, setErrors] = useState({});

    function addSchedule() {
        setList([...list,{id:count}])
        setCount(count+1)
    }

    function removeSchedule(id) {
        let newList = list.filter(value => value.id !== id )
        setList([...newList])
    }

    let isValid;

    function validateInfo() {
    let errors = {};

    if(!values.name){
        errors.name = "Campo obrigatório";
        isValid = false;
    }

     if(!values.photoUrl){
        errors.photoUrl = "Campo obrigatório";
        isValid = false;
    } else if(values.photoUrl && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(values.photoUrl)){
        errors.photoUrl = "URL inválida";
        isValid = false;
    }

    if(!values.phoneNumber){
        errors.phoneNumber = "Campo obrigatório";
        isValid = false;
    } else if(!/\d{11,13}/.test(values.phoneNumber)){
        errors.phoneNumber = "Número de telefone inválido"
        isValid = false;
    }

     if(values.socialMediaUrl && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(values.socialMediaUrl)){
        errors.socialMediaUrl = "URL inválida";
        isValid = false;
    }

    if(!values.ocupationArea){
        errors.ocupationArea = "Campo obrigatório";
        isValid = false;
    }

    if(values.price && !/[0-9.,]/.test(values.price)){
        errors.price = "Formato de preço inválido";
        isValid = false;
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
            setValues(initialValues);
        } else if(!isValid) {
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
                        <Input field="name" pattern="text" inputValue={values.name} subtitle="Nome completo" inputStyle="input-medium" onChange={handleChange} />
                        <p className="error-message">{errors.name}</p>
                        <Input field="photoUrl" pattern="url" inputValue={values.photoUrl} subtitle="Link da sua foto  (comece com //http)" inputStyle="input-medium" onChange={handleChange} />
                        <p className="error-message">{errors.photoUrl}</p>
                        <Input field="phoneNumber" pattern="tel" inputValue={values.phoneNumber} subtitle="Whatsapp  (somente números)" inputStyle="input-medium" onChange={handleChange} />
                        <p className="error-message">{errors.phoneNumber}</p>
                        <Input field="socialMediaUrl" pattern="url" inputValue={values.socialMediaUrl} subtitle="Rede social  (Instagram, Facebook, Twitter...)" inputStyle="input-medium" onChange={handleChange} />
                        <p className="error-message">{errors.socialMediaUrl}</p>
                        <label className="input-label" htmlFor="biography">Biografia</label>
                        <textarea className="bio-text-area" id="biography" name="biography" rows='5' cols='45' ></textarea>
                    </section>
                    <div className="form-mid">
                        <h2>Conte para a gente com o que você trabalha</h2>
                    </div>
                    <section className="form-content ocupation">
                        <SelectInput field="ocupation-area" subtitle="Área de atuação" prompt="Selecione a sua profissão" data={professionalsList}  id="id" label="label" value={professionalOption} onChange={(val) => setProfessionalOption(val)}></SelectInput>
                        <p className="error-message">{errors.ocupationArea}</p>
                        <Input field="price" pattern="number" inputValue={values.price} subtitle="Custo da sua hora por serviço (em R$)" inputStyle="input-medium" onChange={handleChange} />
                        <p className="error-message">{errors.price}</p>
                    </section>
                    <div className="form-mid2">
                        <h2>Horários disponíveis</h2>
                        <div className="btn-schedule" role="button" onClick={addSchedule}>
                            <p>+ Novo horário</p>
                        </div>
                    </div>

                    {
                        list.map(({id}) =>
                            <Schedule key={id} id={id} handleClick={()=> removeSchedule(id)} />
                        )     
                    }

                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>Importante!<br></br>Preencha todos os dados</p>
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