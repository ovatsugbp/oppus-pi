async function getAddress(cep){
   let response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
   let data = await response.json()
   console.log(data)
   if(response.status === 200){
      return {
         status: response.status,
         state: data.state,
         city: data.city,
         neighborhood: data.neighborhood
      }
   }else{
      return {
         status: response.status,
         error: data.type
      }
   }

}

export default getAddress 