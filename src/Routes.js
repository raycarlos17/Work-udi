import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workers from './pages/Workers';
import HomeCliente from './pages/HomeCliente';
import HomeProfissional from './pages/HomeProfissional';
import RegistrarPerfilProfissional from './pages/RegistrarPerfilProfissional';
import AlterarDadosPerfil from './pages/AlteraDadosPerfil'
import HomeProfissionalRaphael from './pages/HomeProfissionalRaphael';
import HomeClienteBreno from './pages/ClienteBreno';
// import {isAuthenticated} from './authenticated.js';
import {isAuthenticated2} from './authenticated2.js';
import WorkerAgenda from './pages/WorkerAgenda';

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        isAuthenticated2() ? (
            <Component { ...props}/>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )} />
)

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/workers/:id' component={Workers} />
            <PrivateRoute exact path='/cliente/:id' component={HomeCliente} />
            <PrivateRoute exact path='/profissional/:id' component={HomeProfissional} />
            <PrivateRoute exact path='/register/perfil/profissional/:id' component={RegistrarPerfilProfissional} />
            <PrivateRoute exact path='/alterar/perfil/:id' component={AlterarDadosPerfil} />
            <PrivateRoute exact path='/home/profissional' component={HomeProfissionalRaphael}/>
            <PrivateRoute exact path='/home/cliente' component={HomeClienteBreno}/>
            <PrivateRoute exact path='/workers/agenda/:id' component={WorkerAgenda}/>
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;