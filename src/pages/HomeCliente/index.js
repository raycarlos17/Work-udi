import React, { useState, useEffect } from 'react';
import './homeCliente.css';
import Footer from '../../components/Footer';
import ButtonLogOut from '../../components/ButtonLogOut';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import PeopleIcon from '@material-ui/icons/People';

const HomeCliente = (props) => {

    //const user = localStorage.getItem('user')
    const [listUser, setListUser] = useState([])

    useEffect(() => {

        const id = props.match.params.id

        try {
            fetch(`http://localhost:3001/users/${id}`)
                .then(response => response.json())
                .then(
                    (result) => {
                        setListUser(result);
                    })
        }
        catch (error) {
            console.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header>
                <div className='div-ButtonLogOut'>
                    <ButtonLogOut />
                </div>
            </Header>

            <div className='div-inf-client-principal'>
                <h1>Welcome to {listUser.name}</h1>
                <h2>Profile data</h2>
                <hr />
                <p><PersonIcon className='icon-perfil-cliente'/><strong>Name: </strong>{listUser.name}</p>
                <hr />
                <p><EmailIcon className='icon-perfil-cliente'/><strong>Email: </strong>{listUser.email}</p>
                <hr />
                <p><RecentActorsIcon className='icon-perfil-cliente'/><strong>CPF: </strong>{listUser.cpf}</p>
                <hr />
                <p><PeopleIcon className='icon-perfil-cliente'/><strong>Profile: </strong>{listUser.perfil}</p>
            </div>
            <div className='button-alterar-dados-client'>
                <button><Link to={`/alterar/perfil/${listUser.id}`} className='link-button-altera-perfil'>CHANGE PROFILE</Link></button>
            </div>

            <Footer />
        </div>
    )
}

export default HomeCliente