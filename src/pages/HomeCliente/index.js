import React, { useState, useEffect } from 'react';
import './homeCliente.css';
import Footer from '../../components/Footer';
import ButtonLogOut from '../../components/ButtonLogOut';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

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
                <h1>Bem vindo(a) {listUser.name}</h1>
                <h2>Dados de seu perfil</h2>
                <hr />
                <p><strong>Name: </strong>{listUser.name}</p>
                <hr />
                <p><strong>Email: </strong>{listUser.email}</p>
                <hr />
                <p><strong>Perfil: </strong>{listUser.perfil}</p>
            </div>
            <div className='button-alterar-dados-client'>
                <button><Link to={`/alterar/perfil/${listUser.id}`} className='link-button-altera-perfil'>ALTERAR PERFIL</Link></button>
            </div>
           
            <Footer />
        </div>
    )
}

export default HomeCliente