import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation';
import Home from './Screens/Home';
import { Route, Switch, Router } from 'react-router-dom';
import Cart from './Screens/Cart';
import {Login} from './LoginComponent/component/Login'
import {SignUp} from './LoginComponent/component/SignUp'

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={Login} exact/>
        <Route path='/cart' component={Cart} />
        <Route path='/index' component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
    </React.Fragment>
  );
}

export default App;
