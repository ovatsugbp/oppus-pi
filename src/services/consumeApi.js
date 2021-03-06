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

async function deleteInDataBase(url, config = {}){
   try {
      await axios.delete(url,config)
   } catch (error) {
      console.error(error)
      return error
   }
}

async function updateInDataBase(url,data, config = {}){
   try {
      let response = await axios.put(url,data, config);
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
    baseURL: "http://localhost:8080",
});



export default api;

export {saveInDataBase, updateInDataBase, deleteInDataBase, fetchData}
