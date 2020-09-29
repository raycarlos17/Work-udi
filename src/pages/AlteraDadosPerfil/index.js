import React, { useEffect, useState } from 'react';
import './alteraDadosPerfil.css';
import Header from '../../components/Header';
import ButtonLogOut from '../../components/ButtonLogOut';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const AlteraDadosPerfil = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [perfil, setPerfil] = useState('')
    const [listUser, setListUser] = useState([])

    useEffect(() => {

        const id = props.match.params.id

        try {
            fetch(`http://localhost:3001/users/${id}`)
                .then(response => response.json())
                .then(
                    (result) => {
                        setListUser(result);
                        setName(result.name);
                        setEmail(result.email);
                        setPerfil(result.perfil);
                        console.log(result)
                    })
        }
        catch (error) {
            console.error(error)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function updateWorkerBack() {
        try {
            let retorno = await fetch(`http://localhost:3001/users/${listUser.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "id": listUser.id,
                    "name": name,
                    "email": email,
                    "password": password,
                    "perfil": perfil
                })
            })

            let json = await retorno.json()
            alert('Dados alterados com sucesso')
            return json

        } catch (error) {
            alert('Erro ao alterar dados')

            console.log(error)
        }
    }

    function handleClickUpdateWorker(e) {
        e.preventDefault()
        if (password === '') {
            alert('Preencher password')
        } else {
            if (password === confirmPassword) {
                let resposta = window.confirm('Realmente deseja alterar os seus dados?')
                if (resposta === true) {
                    updateWorkerBack()
                } else {
                    return undefined
                }
            }
        }
    }

    return (
        <div>
            <Header>
                <div className='div-ButtonLogOut'>
                    <ButtonLogOut />
                </div>
            </Header>

            <div className='div-alterar-perfil'>
                <h1>DADOS DO PERFIL</h1>
                <hr />
                <form className='form-altera-perfil'>
                    <label>Nome: </label>
                    <br />
                    <input className='input-altera-perfil' value={name || ''} onChange={e => setName(e.target.value)} type='text' placeholder={name} />
                    <br />
                    <label>Email: </label>
                    <br />
                    <input className='input-altera-perfil' value={email || ''} onChange={e => setEmail(e.target.value)} type='text' placeholder={email} />
                    <br />
                    <label>Password: </label>
                    <br />
                    <input className='input-altera-perfil' value={password || ''} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                    <br />
                    <label>Confirm Password: </label>
                    <br />
                    <input className='input-altera-perfil' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='Confirm Password' />
                    <br />
                    <label className='label-radio-alterar'>
                        <input name='perfil' className='input-radio-alterar' type='radio' value={perfil} onChange={() => setPerfil('cliente')} />
                            Client
                        </label>
                    <label className='label-radio-alterar'>
                        <input name='perfil' className='input-radio-alterar' type='radio' value={perfil} onChange={() => setPerfil('profissional')} />
                        Professional
                        </label>
                    <div className='div-button-registrar-profissional'>
                        <button onClick={handleClickUpdateWorker}>ALTERAR</button>
                        <button><Link className='link-button-perfil' to={`/${listUser.perfil}/${listUser.id}`}>PERFIL</Link></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AlteraDadosPerfil;