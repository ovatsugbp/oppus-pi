import axios from "axios";

async function saveInDataBase(url,data, config = {}){
   try {
      let response = await axios.post(url,data, config);
      console.log(response.data);
      return response.data;
   
   } catch (error) {
      console.error(error);
      return error      
   }
}

async function fetchData(url,config = {}){
   try {
      let response = await axios.get(url,config)
      console.log(response.data);
      return response.data
   } catch (error) {
      console.error(error);
   }
}

export default fetchData

export {saveInDataBase}