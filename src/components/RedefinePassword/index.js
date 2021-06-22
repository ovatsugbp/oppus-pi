import React, {useState} from 'react'
import './style.scss'
import Input from '../Input/input'
import Button from '../Button'
import Tipografia from '../Tipografia'

function RedefinePassword(props){
   const [redefinePasswordStatus, setRedefinePasswordStatus] = useState('open')
  return (
   <div className={`redefine-password-container ${props.Status}`}>
      <h1>Digite seu e-mail</h1>
      <form className="input-container-redefine-password">
      <Input Field="email" pattern="email" subtitle="E-mail" inputStyle="e-mail"></Input>
      <Button btnStyle="btn-secondary--blue" onClick={callbackRedefinePassword}>Enviar</Button>
      </form>
      <div className={`confirmation-message ${redefinePasswordStatus}`}>
            <h5>Recebemos sua solicitação</h5>
            <Tipografia BodyFont FontSize="16"><p className="message">Você receberá um e-mail de nossa equipe com as orientações para trocar sua senha, fique atento a caixa de spam!</p></Tipografia>
      </div>
      {/* {props.children()} */}
   </div>
  )

  function callbackRedefinePassword(){
      return setRedefinePasswordStatus('sended')
   }

}


export default RedefinePassword