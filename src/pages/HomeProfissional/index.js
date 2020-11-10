import React, { useState, useEffect } from 'react';
import ButtonLogOut from '../../components/ButtonLogOut';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import './homeProfissional.css';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PeopleIcon from '@material-ui/icons/People';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIcon from '@material-ui/icons/Phone';
import DescriptionIcon from '@material-ui/icons/Description';

const HomeProfissional = (props) => {

    //const user = localStorage.getItem('user')
    const [user, setUser] = useState([])
    const [worker, setWorker] = useState([])

    useEffect(() => {
        dadosUser()
    }, [])

    const id = props.match.params.id

    async function dadosUser(){

        try {
            let retorno = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });

            let json = await retorno.json()
            console.log(json)
            setUser(json)
            console.log(user)
    }
    catch(error) {
        console.log(error);
    }
}

    function divWorker() {
        if (worker !== false) {
            return (
                <div className='div-dados-worker'>
                    <h1>Professional Data</h1>
                    <p><PersonIcon className='icon-perfil-profissional' /><strong>Name professional: </strong>{worker.name}</p>
                    <hr />
                    <p><EmailIcon className='icon-perfil-profissional' /><strong>Email professional: </strong>{worker.email}</p>
                    <hr />
                    <p><BuildIcon className='icon-perfil-profissional' /><strong>Occupation: </strong>{worker.occupation}</p>
                    <hr />
                    <p><PhoneIcon className='icon-perfil-profissional' /><strong>Contact: </strong>{worker.contact}</p>
                    <hr />
                    <p><DescriptionIcon className='icon-perfil-profissional' /><strong>Description: </strong>{worker.description}</p>
                </div>
            )
        }
    }

    return (
        <div>

            <Header>
                <div className='div-ButtonLogOut'>
                    <ButtonLogOut />
                </div>
            </Header>
            <div className='div-inf-profissional-principal'>
                <h1>Welcome to {user.name}</h1>
                <h2>Profile data</h2>
                <hr />
                <p><PersonIcon className='icon-perfil-profissional' /><strong>Name: </strong>{user.name}</p>
                <hr />
                <p><EmailIcon className='icon-perfil-profissional' /><strong>Email: </strong>{user.email}</p>
                <hr />
                <p><RecentActorsIcon className='icon-perfil-profissional' /><strong>CPF: </strong>{user.cpf}</p>
                <hr />
                <p><PeopleIcon className='icon-perfil-profissional' /><strong>Profile: </strong>{user.perfil}</p>
            </div>
            {divWorker()}
            <div className='buttons-profissional'>
                <div className='button-alterar-dados-profissional'>
                    <button><Link to={`/alterar/perfil/${id}`} className='link-button-altera-perfil'>CHANGE PROFILE</Link></button>
                </div>
                <div className='button-adiciona-dados-profissional'>
                    <button><Link to={`/register/perfil/profissional/${id}`} className='link-button-adiciona-perfil-prof'>PROFESSIONAL DATA</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeProfissional

