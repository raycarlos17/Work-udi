import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workers from './pages/Workers';
import HomeCliente from './pages/HomeCliente';
import HomeProfissional from './pages/HomeProfissional';
import RegistrarPerfilProfissional from './pages/RegistrarPerfilProfissional';
import AlterarDadosPerfil from './pages/AlteraDadosPerfil'

function Routes(props) {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/workers/:id' component={Workers}/>
            <Route exact path='/cliente/:id' component={HomeCliente}/>
            <Route exact path='/profissional/:id' component={HomeProfissional}/>
            <Route exact path='/register/perfil/profissional/:id' component={RegistrarPerfilProfissional}/>
            <Route exact path='/alterar/perfil/:id' component={AlterarDadosPerfil}/>
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;