import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import setPageTitle from "../../setPageTitle"
import fetchApi, {updateInDataBase, deleteInDataBase} from '../../services/consumeApi'
import './style.scss';

export const ClientRegistration = ({userId}) => {
    setPageTitle('Dados do Cliente')

    const [isInsertPasswordShown, setIsInsertPasswordShown] = useState(false);
    const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
    const [userData, setUserData] = useState({});
    const [errors, setErrors] = useState({});
    userId = 14
    
    useEffect(()=>{
        fetchApi(`http://localhost:8080/api/user/me/${userId}`)
        .then(data => setUserData(data))
    },[])

    let isValid = true

    function deleteUserAccount(userId){
        deleteInDataBase(`http://localhost:8080/api/user/me/${userId}`).then(response => console.log(response))
    }

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

    if(userData.photoURL && !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(userData.photoURL)){
        errors.photoURL = "URL inválida";
        isValid = false;
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
            updateInDataBase(`http://localhost:8080/api/user/update/${userId}`,userData).then(response => console.log(response))
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
                         <div className="form-insert-password">
                            <Input
                                field="password"
                                pattern={
                                    isInsertPasswordShown ? "text" : "password"
                                }
                                subtitle="Senha"
                                inputStyle="input-medium"
                                inputValue={userData.password}
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
                                inputValue={userData.confirmPassword}
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
                            inputValue={userData.photoURL}
                            onChange={(e) => handleChange(e)}
                        />
                        <p className="error-message">{errors.photoURL}</p>
                    </section>
                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>
                                Importante!<br></br>Preencha todos os dados
                            </p>
                        </div>
                        <Button btnStyle="btn-delete" onClick={()=> deleteUserAccount(userId)}>Excluir Cadastro</Button>
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