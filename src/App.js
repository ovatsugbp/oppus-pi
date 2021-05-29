import InputSimples from './components/inputs/InputSimples'
// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react';
import ListarProfissionais from './pages/ListarProfissionais/ListarProfissionais'

function App() {
  return (
    <div>
    {/* <InputSimples className=" InputText" type="text"></InputSimples> */}
 <ListarProfissionais></ListarProfissionais>
    </div>
  );
}

export default App;