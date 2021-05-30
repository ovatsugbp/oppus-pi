import React from 'react';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Input from '../../components/Input/input';
import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';

import './style.scss';

export const SignOut = () => {
    return (
        <>
            <Header subtitle="Seja bem-vindo à nossa plataforma (:"/>
                <section className="sign-out-container">
                    <section className="form-container">
                            <div className="form-top">
                                <h2>Seus dados</h2>
                            </div>
                        <section className="form-content">
                            <Input field="name" pattern="text" subtitle="Nome" inputStyle="input-medium"/>
                            <Input field="password" pattern="password" subtitle="Senha" inputStyle="input-medium"/>
                            <Input field="password" pattern="password" subtitle="Confirme sua senha" inputStyle="input-medium"/>
                            <div className="type-of-user">
                                <input type="radio" name="user" id="worker" />
                                <label htmlFor="worker">Sou profissional</label>
                                <input type="radio" name="user" id="non-worker" />
                                <label htmlFor="non-worker">Busco profissional</label>
                            </div>
                        </section>
                        <section className="form-bottom">
                            <div className="attention-container">
                                <ReportOutlinedIcon className="attention-icon" />
                                <p>Importante!<br></br>Preencha todos os seus dados</p>
                            </div>
                            <Button btnStyle="btn-primary">Salvar Cadastro</Button>
                        </section>
                    </section>
                </section>
            <Footer/>
        </>
    )
}


