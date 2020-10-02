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
    const [listUser, setListUser] = useState([])
    const [listWorker, setListWorker] = useState([])

    useEffect(() => {
        function fetchData() {
            const id = props.match.params.id
            let user;

            try {
                fetch(`http://localhost:3001/users/${id}`)
                    .then(async response => response.json())
                    .then(
                        async (result) => {
                            setListUser(result);
                            user = result
                            try {
                                fetch(`http://localhost:3001/workers`)
                                    .then(async response => response.json())
                                    .then(
                                        async (result) => {
                                            result.map(async worker => {
                                                if (user.email === worker.emailLogin) {
                                                    setListWorker(worker)
                                                }
                                                else {
                                                    setListWorker(false)
                                                }
                                            })

                                        }
                                    )

                            }
                            catch (error) {
                                console.log(error)
                            }
                        })
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    function divWorker() {
        if (listWorker !== false) {
            return (
                <div className='div-dados-worker'>
                    <h1>Professional Data</h1>
                    <p><PersonIcon className='icon-perfil-profissional' /><strong>Name professional: </strong>{listWorker.name}</p>
                    <hr />
                    <p><EmailIcon className='icon-perfil-profissional' /><strong>Email professional: </strong>{listWorker.email}</p>
                    <hr />
                    <p><BuildIcon className='icon-perfil-profissional' /><strong>Occupation: </strong>{listWorker.occupation}</p>
                    <hr />
                    <p><PhoneIcon className='icon-perfil-profissional' /><strong>Contact: </strong>{listWorker.contact}</p>
                    <hr />
                    <p><DescriptionIcon className='icon-perfil-profissional' /><strong>Description: </strong>{listWorker.description}</p>
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
                <h1>Welcome to {listUser.name}</h1>
                <h2>Profile data</h2>
                <hr />
                <p><PersonIcon className='icon-perfil-profissional' /><strong>Name: </strong>{listUser.name}</p>
                <hr />
                <p><EmailIcon className='icon-perfil-profissional' /><strong>Email: </strong>{listUser.email}</p>
                <hr />
                <p><RecentActorsIcon className='icon-perfil-profissional' /><strong>CPF: </strong>{listUser.cpf}</p>
                <hr />
                <p><PeopleIcon className='icon-perfil-profissional' /><strong>Profile: </strong>{listUser.perfil}</p>
            </div>
            {divWorker()}
            <div className='buttons-profissional'>
                <div className='button-alterar-dados-profissional'>
                    <button><Link to={`/alterar/perfil/${listUser.id}`} className='link-button-altera-perfil'>CHANGE PROFILE</Link></button>
                </div>
                <div className='button-adiciona-dados-profissional'>
                    <button><Link to={`/register/perfil/profissional/${listUser.id}`} className='link-button-adiciona-perfil-prof'>PROFESSIONAL DATA</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeProfissional

