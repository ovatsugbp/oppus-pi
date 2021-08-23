import React, {createContext, useEffect, useState} from "react";
import api, {fetchData} from "../services/consumeApi"
import history from "../history"

const Context = createContext();

function AuthProvider({ children }){
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userLoginData, setUserLoginData] = useState({})

    useEffect(()=>{
        setUserLoginData(JSON.parse(localStorage.getItem("userLoginData")))
        console.log("userLoginData localstorage", userLoginData)
        
        if(userLoginData.token){
        api.defaults.headers.autorization = `bearer ${userLoginData.token}`
        setToken(userLoginData.token)
        }
        setLoading(false)
    },[])

async function handleToken( email, password ){
    api.post("/login", { email, password }).then(({data})=>{
        setToken(data)
        setUserLoginData({
            token:data,
            email,
        })
    })
  
        fetchData("http://localhost:8080/api/professionals").then(data => {
            setUserLoginData({...userLoginData, id:data.content.id})
        })

        localStorage.setItem("userLoginData",JSON.stringify(userLoginData))
        api.defaults.headers.autorization = `bearer ${token}`

        history.push('/usuario')
    };
    console.log("userLoginData fora",userLoginData)

return (
    <Context.Provider value={{ handleToken, token, loading }}>
        {children}
    </Context.Provider>
)
}

export {Context, AuthProvider};