import axios from "axios";

async function saveInDataBase(url,data, config = {}){
   try {
      let response = await axios.post(url,data, config);
      // console.log(response.data);
      return response.data;
   
   } catch (error) {
      console.error(error);
      return error      
   }
}

async function fetchData(url,config = {}){
   try {
      let response = await axios.get(url,config)
      // console.log(response.data);
      return response.data
   } catch (error) {
      console.error(error);
   }
}

const api = axios.create({
    baseURL: "https://run.mocky.io/v3/a5fdded9-da72-4f54-be6b-033ccce5d9d5",
});

export default api;

export {fetchData}

export {saveInDataBase}
