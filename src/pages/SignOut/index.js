import React, {useState} from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import setPageTitle from "../../setPageTitle";
import {saveInDataBase} from "../../services/consumeApi"

import './style.scss';
import { Link } from 'react-router-dom';

export const SignOut = () => {
    setPageTitle('Registrar');
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [name, setName] = useState()
    const [isInsertPasswordShown, setIsInsertPasswordShown] = useState(false);
    const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
    const [userType, SetUserType] = useState()

    function validatePassword(){
        if(password && confirmPassword && password === confirmPassword ){
            return true
        }else{
            console.log("Senha não confere")
            return false 
        }
    }

    function submitRegistration(event = undefined){
        const data = {
            name:name,
            password: password,
            userType: userType
        }

        const config = {

        }

        if(validatePassword()){
            saveInDataBase('http://localhost:8080/api/user/register',data,config)
        }else{
            console.log("Senha inválida")
            // event.preventDefault
        }
    }

    return (
        <>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:"/>
                <section className="sign-out-container">
                    <section className="form-container">
                            <div className="form-top">
                                <h2>Seus dados</h2>
                            </div>
                        <section className="form-content">
                            <Input field="name" pattern="text" subtitle="Nome" inputStyle="input-medium" onInput={(event)=> setName(event.target.value)}/>
                            <div className="form-insert-password">
                            <Input field="password" pattern={ isInsertPasswordShown ? "text" : "password" } subtitle="Senha" inputStyle="input-medium" onInput={(event) => setPassword(event.target.value)}/>
                                {   !isInsertPasswordShown ?
                                    <VisibilityOffIcon className="password-icon" onClick={() => setIsInsertPasswordShown(true)} /> :
                                    <VisibilityIcon className="password-icon" onClick={() => setIsInsertPasswordShown(false)} />
                                }
                            </div>
                            <div className="form-confirm-password">
                                <Input field="password" pattern={ isConfirmPasswordShown ? "text" : "password" } subtitle="Confirme sua senha" inputStyle="input-medium" onInput={(event)=> setConfirmPassword(event.target.value)}/>
                                {   !isConfirmPasswordShown ? 
                                    <VisibilityOffIcon className="password-icon" onClick={() => setIsConfirmPasswordShown(true)}/> :
                                    <VisibilityIcon className="password-icon" onClick={() => setIsConfirmPasswordShown(false)}/> 
                                }
                            </div>
                            <div className="type-of-user">
                                <input type="radio" name="user" id="worker" onClick={() => userType = SetUserType("/profissional")} />
                                <label htmlFor="worker">Sou profissional</label>
                                <input type="radio" name="user" id="non-worker" onClick={() => userType = SetUserType("/usuario")}/>
                                <label htmlFor="non-worker">Busco profissional</label>
                            </div>
                        </section>
                        <section className="form-bottom">
                            <div className="attention-container">
                                <ReportOutlinedIcon className="attention-icon" />
                                <p>Importante!<br></br>Preencha todos os seus dados</p>
                            </div>
                            <Link to = {userType}>
                                <Button btnStyle="btn-primary" onClick={submitRegistration} >Salvar Cadastro</Button>
                            </Link>
                        </section>
                    </section>
                </section>
            <Footer/>
        </>
    )
}


