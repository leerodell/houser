import React from "react";
import { Switch, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Header from "./components/Header/Header"
import House from "./components/House/House"
import Wizard from "./components/Wizard/Wizard"

export default (
    <Switch>
        <Route path= "/" component={Dashboard}/>
        <Route path= "/wizard" component={Wizard}/>
        <Route path= "/header" component={Header}/>
        <Route path= "/house" component={House}/>
    </Switch>
)