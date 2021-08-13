import axios from "axios";

let informations = {
   name:"Teste Nome",
   password: "password",
   email: "email",
   photoURL: "photoURL"
};

let url = 'http://localhost:8080/api/user/register';

async function registerUser(url,informations){
   let response = await axios.post(url,informations);
   let data = response.data;
   console.log(data);
   return data;
}

export default registerUser;

registerUser(url, informations);