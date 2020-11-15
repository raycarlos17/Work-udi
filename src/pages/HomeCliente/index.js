import React, { useState, useEffect } from 'react';
import './homeCliente.css';
import Footer from '../../components/footerBreno';
import ButtonLogOut from '../../components/ButtonLogOut';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PeopleIcon from '@material-ui/icons/People';

const HomeCliente = (props) => {

    //const user = localStorage.getItem('user')
    const [User, setUser] = useState([])

    useEffect(() => {
        dadosUser()
    }, [])

    async function dadosUser() {

        const id = props.match.params.id

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
            setUser(json)
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Header>
                <div className='div-ButtonLogOut'>
                    <ButtonLogOut />
                </div>
            </Header>
            <div className='div-inf-client-principal'>
                <h1>Welcome to {User.name}</h1>
                <h2>Profile data</h2>
                <hr/>
                <p><PersonIcon className='icon-perfil-cliente' /><strong>Name: </strong>{User.name}</p>
                <hr />
                <p><EmailIcon className='icon-perfil-cliente' /><strong>Email: </strong>{User.email}</p>
                <hr />
                <p><RecentActorsIcon className='icon-perfil-cliente' /><strong>CPF: </strong>{User.cpf}</p>
                <hr />
                <p><PeopleIcon className='icon-perfil-cliente' /><strong>Profile: </strong>{User.perfil}</p>
            </div>
            <div className='buttons-profissional'>
                <div className='button-alterar-dados-client'>
                    <button><Link to={`/alterar/perfil/${User.id}`} className='link-button-altera-perfil'>CHANGE PROFILE</Link></button>
                </div>
                <div className='button-list-workers'>
                    <button><Link to={`/home/cliente`} className='link-button-list-workers'>LIST WORKERS</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeCliente