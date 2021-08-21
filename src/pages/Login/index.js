import React, {useState} from 'react';
import "./style.scss";
import { Link } from "react-router-dom";
import Menu from '../../components/Menu';
import Input from '../../components/Input/input';
import Button from '../../components/Button';
import RedefinePassword from '../../components/RedefinePassword';
import setPageTitle from "../../setPageTitle";

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import image from "../../assets/img/Imagem-Login.png";
import voltar from '../../assets/img/voltar-blue.png';
import logo from '../../assets/img/OPPUS_small.png';


export const Login = () => {
    setPageTitle('Entrar')

    const [statusRedefinePassword, setStatusRedefinePassword] = useState('closed')
    const [isPasswordShowing, setIsPasswordShowing] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    
    let isValid;

    function validateInfo() {
    let errors = {};

    if(!values.email){
        errors.email = "Campo obrigatório";
        isValid = false;
    } else if(!/^[a-zA-Z0-9.!_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(values.email)){
        errors.email = "E-mail inválido";
        isValid = false;
    }

    if(!values.password){
        errors.password = "Campo obrigatório";
        isValid = false;
    }
    
    else {
        isValid = true;
    }

    setErrors({...errors});
    return isValid;
}

const handleChange = e => {
    console.log("entrou", isValid)
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
    } else if(!isValid) {
        console.log(errors);
    }
        
}

    return (
        <div className="login-page">
            <div className="header">
                <Link to="/">
                    <img className="return-icon" src={voltar} alt="voltar para a página anterior" />
                </Link>

                <div className="header-menu-container">
                    <Link to="/">
                        <img src={logo} className="logo" alt="oppus logo" />
                    </Link>
                    <Menu>
                        {[
                            {item:'Home',rout:'/'},
                            {item:'Registre-se',rout:'/registro'},
                        ]}
                    </Menu>
                </div>
            </div>
            <section className="left-container">
                <article className="login-container">
                    <h1>Login</h1>
                    <form className="input-container">
                        <Input field="email" pattern="email" inputValue={values.email} subtitle="E-mail" onChange={handleChange} />
                        <p className="error-message">{errors.email}</p>
                        <div className="forgot-password" onClick={()=> setStatusRedefinePassword(statusRedefinePassword === 'closed' ? 'open' : 'closed')}>
                            <p>Esqueci minha senha</p>
                        </div>
                        <div className="password-input">
                            <Input field="password" pattern={isPasswordShowing ? "text" : "password"} inputValue={values.password} subtitle="Senha" onChange={handleChange} />
                                {!isPasswordShowing ? <VisibilityOffIcon className="password-icon" onClick={() => setIsPasswordShowing(true)} /> :
                                <VisibilityIcon className="password-icon" onClick={() => setIsPasswordShowing(false)} /> }
                        </div>
                        <p className="error-message">{errors.password}</p>
                        <Link to="/usuario">
                            <Button btnStyle="btn-secondary--blue" onClick={handleSubmit}>Login</Button>
                        </Link>
                        <p className="redirect">Precisa de uma conta? <Link to="/registro">Registre-se aqui</Link></p>
                    </form>
                </article>
                    <RedefinePassword Status={statusRedefinePassword}></RedefinePassword>
            </section>

            <section className="right-container">
                <img className="door-guy" src={image} alt="garoto entrando por uma porta" />
            </section>
        </div>
    )
}
