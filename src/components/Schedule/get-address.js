async function getAddress(cep){
   let response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
   let data = await response.json()
   if(response.status === 200){
      return {
         cep:cep,
         uf: data.state,
         city: data.city,
         district: data.neighborhood
      }
   }else{
      return {
         status: response.status,
         error: data.type
      }
   }

}

export default getAddress 