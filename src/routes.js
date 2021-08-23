import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { SignOut } from "./pages/SignOut";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { ClientRegistration } from "./pages/ClientRegistration";
import { ProfessionalRegistration } from "./pages/ProfessionalRegistration";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/pesquisa">
                <Search />
            </Route>
            <Route path="/registro">
                <SignOut />
            </Route>
            <Route path="/entrar">
                <Login />
            </Route>
            <Route path="/usuario">
                <ClientRegistration />
            </Route>
            <Route path="/profissional">
                <ProfessionalRegistration />
            </Route>
            <Route path="/como-funciona">
                <About />
            </Route>
        </Switch>
    );
}
