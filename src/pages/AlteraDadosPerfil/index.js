import React, { useEffect, useState } from 'react';
import './alteraDadosPerfil.css';
import Header from '../../components/Header';
import ButtonLogOut from '../../components/ButtonLogOut';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleIcon from '@material-ui/icons/People';

const AlteraDadosPerfil = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
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
                        setCpf(result.cpf)
                        setPerfil(result.perfil);
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
                    "cpf": cpf,
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

    function perfilSelect() {
        if (listUser.perfil === 'cliente') {
            return (
                <React.Fragment>
                    <label className='label-select-perfil'><PeopleIcon /> Perfil: </label>
                    <select className='select-dados-perfil' defaultValue={'cliente'} onChange={e => setPerfil(e.target.value)}>
                        
                            <option value={'cliente'}>Client</option>
                            <option value={'profissional'} >Professional</option>
                        
                    </select>
                </React.Fragment>
            )

        }
        else if (listUser.perfil === 'profissional') {
            return (
                <React.Fragment>
                    <label className='label-select-perfil'><PeopleIcon className='icon-altera-perfil' /> Perfil: </label>
                    <select className='select-dados-perfil' defaultValue={'profissional'} onChange={e => setPerfil(e.target.value)}>
                       
                            <option value={'cliente'}>Client</option>
                            <option value={'profissional'}>Professional</option>
                 
                    </select>
                </React.Fragment>
            )

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
                <h1>PROFILE DATA</h1>
                <hr />
                <form className='form-altera-perfil'>
                    <label><PersonIcon className='icon-altera-perfil'/> Name: </label>
                    <br />

                    <input className='input-altera-perfil' value={name || ''} onChange={e => setName(e.target.value)} type='text' placeholder={name} />
                    <br />
                    <label><EmailIcon className='icon-altera-perfil'/> Email: </label>
                    <br />
                    <input className='input-altera-perfil' value={email || ''} onChange={e => setEmail(e.target.value)} type='text' placeholder={email} />
                    <br />
                    <label><RecentActorsIcon className='icon-altera-perfil'/> CPF: </label>
                    <br />
                    <input className='input-altera-perfil' value={cpf || ''} onChange={e => setCpf(e.target.value)} type='text' placeholder={cpf} />
                    <br />
                    <label><LockIcon className='icon-altera-perfil'/> Password: </label>
                    <br />
                    <input className='input-altera-perfil' value={password || ''} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                    <br />
                    <label><LockOpenIcon className='icon-altera-perfil'/> Confirm Password: </label>
                    <br />
                    <input className='input-altera-perfil' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type='password' placeholder='Confirm Password' />
                    <br />
                    {perfilSelect()}
                    <div className='div-button-altera-perfil'>
                        <button onClick={handleClickUpdateWorker}>CHANGE</button>
                        <button><Link className='link-button-perfil' to={`/${listUser.perfil}/${listUser.id}`}>BACK PROFILE</Link></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AlteraDadosPerfil;