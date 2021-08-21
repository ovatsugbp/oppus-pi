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

import api from "../../services/consumeApi"

import './style.scss';
import { Link } from 'react-router-dom';

export const SignOut = () => {
    setPageTitle('Registrar');
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();
    const [userId, setUserId] = useState();

    const [isInsertPasswordShown, setIsInsertPasswordShown] = useState(false);
    const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false);
    const [userType, SetUserType] = useState({isProfessional: null, router:"/registro"})

    
    

    const [values, setValues] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    });
    const [user, setUser] = useState();
    const [errors, setErrors] = useState({});

    let isValid;
    const validatePassword = values.password && values.password === values.confirmPassword && userType.isProfessional !== null;
    console.log('validation', validatePassword);

    function validateInfo() {
    let errors = {};

    if(!values.name){
        errors.name = "Campo obrigatório";
        isValid = false;
    }

    if(!values.password){
        errors.password = "Campo obrigatório";
        isValid = false;
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Campo obrigatório";
        isValid = false;
    } else if(!(values.confirmPassword === values.password)) {
        errors.confirmPassword = "A senha deve ser a mesma do campo anterior";
        isValid = false;
    }

    if(!user){
        errors.user = "Escolha uma das opções";
    } else {
        isValid = true;
    }
    setErrors({...errors});
    }

    const handleChange = e => {
        console.log("entrou", isValid);
        setValues(
            {...values, [e.target.name]: e.target.value}
    );
        console.log(values);
    }

    const handleUser = e => {
        console.log("entrou", isValid);
        setUser(e.target.value);
        console.log(user);

    }
    const registerUser = async () => {
        const data = {
            email,
            password,
            isProfessional: userType.isProfessional,
        };
        if(validatePassword && data.isProfessional === true){
            let res = await saveInDataBase(
                'http://localhost:8080/api/professionals/register',
                data
            );
            
            setUserId(res.id);
            } else if (validatePassword && data.isProfessional === false) {
                let res = await saveInDataBase(
                    "http://localhost:8080/api/user/register",
                    data
                );
                setUserId(res.id);
            }
        }

    return (
        <>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:" />
            <section className="sign-out-container">
                <section className="form-container">
                    <div className="form-top">
                        <h2>Seus dados</h2>
                    </div>
                    <section className="form-content">
                        <Input
                            field="email"
                            pattern="email"
                            subtitle="Email"
                            inputStyle="input-medium"
                            inputValue={values.name}
                            onChange={handleChange}
                        />
                        <p className="error-message">{errors.name}</p>
                        <div className="form-insert-password">
                            <Input
                                field="password"
                                pattern={
                                    isInsertPasswordShown ? "text" : "password"
                                }
                                subtitle="Senha"
                                inputStyle="input-medium"
                                inputValue={values.password}
                                onChange={handleChange}
        
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
                                inputValue={values.confirmPassword}
                                onChange={handleChange}
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
                        <div className="type-of-user">
                            <input
                                type="radio"
                                name="user"
                                id="worker"
                                onClick={() =>
                                    SetUserType({
                                        router: "/profissional",
                                        isProfessional: true,
                                    })
                                }
                            />
                            <label htmlFor="worker">Sou profissional</label>
                            <input
                                type="radio"
                                name="user"
                                id="non-worker"
                                onClick={() =>
                                    SetUserType({
                                        isProfessional: false,
                                        router: "/usuario",
                                    })
                                }
                            />
                            <label htmlFor="non-worker">
                                Busco profissional
                            </label>
                        </div>
                    </section>
                    <section className="form-bottom">
                        <div className="attention-container">
                            <ReportOutlinedIcon className="attention-icon" />
                            <p>
                                Importante!<br></br>Preencha todos os seus dados
                            </p>
                        </div>
                        <Link to = {userType.router}>
                            <Button
                                btnStyle="btn-primary"
                                onClick={registerUser}
                            >
                                Salvar Cadastro
                            </Button>
                        </Link>
                    </section>
                </section>
            </section>
            <Footer />
        </>
    );
}


