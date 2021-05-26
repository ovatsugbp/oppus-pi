import styled from 'styled-components';


// const inputStyle = type =>{
//     if(type === "text"){
//         return `
//         background:#03256C;

//         `;
//     }
//     if(type === "select"){
//         return `
//         background:#03256C;

//         `;
//     } if(type === "date"){
//         return `
//         background:#03256C;

//         `;
//     }
// }

 const InputSimples= styled.input`
width:20%;
border:#E6AF2E 100px;
border-radius:2px;


&:hover{
    border-bottom: 2px solid #03256C;

}
&:focus{
    box-shadow: 0 0 0 0;
    outline:0;
}

`
;
//adicionar dentro do InputSimples  ${({type}) =>inputStyle(type)}
export default InputSimples;