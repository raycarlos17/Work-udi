import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workers from './pages/Workers';
import HomeCliente from './pages/HomeCliente';
import HomeProfissional from './pages/HomeProfissional';

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/workers/:id' component={Workers}/>
            <Route path='/cliente' component={HomeCliente}/>
            <Route path='/profissional' component={HomeProfissional}/>
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;