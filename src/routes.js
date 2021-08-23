import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { SignOut } from "./pages/SignOut";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { ClientRegistration } from "./pages/ClientRegistration";
import { ProfessionalRegistration } from "./pages/ProfessionalRegistration";
import { Context } from "./Context/AuthContext";


function CustomRoutes({isPrivate, ...rest}){
    const {token, loading} = useContext(Context)

    if(loading){
        console.log("loading...")
        return <h1>loading...</h1>
    }

    if(isPrivate && !token){
        return <Redirect to="/entrar"></Redirect>
    } 

    return <Route {...rest}/>
}

export default function Routes() {
    return (
        <Switch>
            <CustomRoutes path="/" exact>
                <Home />
            </CustomRoutes>
            <CustomRoutes path="/pesquisa">
                <Search />
            </CustomRoutes>
            <CustomRoutes path="/registro">
                <SignOut />
            </CustomRoutes>
            <CustomRoutes path="/entrar">
                <Login />
            </CustomRoutes>
            <CustomRoutes isPrivate path="/usuario">
                <ClientRegistration />
            </CustomRoutes>
            <CustomRoutes isPrivate path="/profissional">
                <ProfessionalRegistration />
            </CustomRoutes>
            <CustomRoutes path="/como-funciona">
                <About />
            </CustomRoutes>
        </Switch>
    );
}
