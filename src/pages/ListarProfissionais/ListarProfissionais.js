import styled from 'styled-components';
import InputSimples from '../../components/inputs/InputSimples'
import styles from './styles.css'



 const Styles= styled.div`

display: flex;
flex-direction:row;
background-color:#E1ECF2;
 `;

function ListarProfissionais() {

    return (

      <Styles backgroundColor={'E1ECF2'}>
     
      <div>
      <p>Qual Profissional você precisa?</p>
      <InputSimples></InputSimples>
      </div>
      <div>
      <p>Para quando você precisa?</p>
      <InputSimples></InputSimples>
      </div>
      <div>
      <p>Onde você precisa?</p>
      <InputSimples></InputSimples>
      </div>
      <div>
      <p>Qual horário você precisa?</p>
      <InputSimples></InputSimples>
      </div>
      
      </Styles>
    );
  }
  
  export default ListarProfissionais;
  