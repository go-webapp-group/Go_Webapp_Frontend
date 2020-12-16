import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";

import {Login} from "./LoginComponent/Login";
import {SignUp} from "./LoginComponent/SignUp";
import {Index} from "./IndexComponent/Index";

export function App() {
    return (
        <Router>
            <Route path="/" component={Login} exact />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/index/:username" component={Index}/>
        </Router>
    );
}
