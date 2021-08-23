import React, {createContext, useState} from "react";

const Context = createContext();

function AuthProvider({ children }){
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin (){

    }

    return (
        <Context.Provider value={{ authenticated }}>
            {children}
        </Context.Provider>
    )
}

export {Context, AuthProvider};