import React, { useState, useEffect } from 'react';
import ButtonLogOut from '../../components/ButtonLogOut';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import './homeProfissional.css';

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
                    <h1>Dados Profissionais</h1>
                    <p><strong>Name: </strong>{listWorker.name}</p>
                    <hr />
                    <p><strong>Email Profissional: </strong>{listWorker.email}</p>
                    <hr />
                    <p><strong>Occupation: </strong>{listWorker.occupation}</p>
                    <hr />
                    <p><strong>Contact: </strong>{listWorker.contact}</p>
                    <hr />
                    <p><strong>Description: </strong>{listWorker.description}</p>
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
                <h1>Bem vindo(a) {listUser.name}</h1>
                <h2>Dados de seu perfil</h2>
                <hr />
                <p><strong>Name: </strong>{listUser.name}</p>
                <hr />
                <p><strong>Email: </strong>{listUser.email}</p>
                <hr />
                <p><strong>CPF: </strong>{listUser.cpf}</p>
                <hr/>
                <p><strong>Perfil: </strong>{listUser.perfil}</p>
            </div>
            {divWorker()}
            <div className='buttons-profissional'>
                <div className='button-alterar-dados-profissional'>
                <button><Link to={`/alterar/perfil/${listUser.id}`} className='link-button-altera-perfil'>ALTERAR PERFIL</Link></button>
                </div>
                <div className='button-adiciona-dados-profissional'>
                    <button><Link to={`/register/perfil/profissional/${listUser.id}`} className='link-button-adiciona-perfil-prof'>DADOS PROFISSIONAIS</Link></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomeProfissional

