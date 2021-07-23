async function getAddress(cep){
   try {
      let res = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
      return await res.json()
   } catch (error) {
      console.log(error);
       alert(error)
   }
}

export default getAddress