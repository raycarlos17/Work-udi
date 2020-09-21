import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Teste from './pages/Teste';

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/teste' component={Teste}/>
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;