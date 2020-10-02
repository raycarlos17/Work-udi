import React, { useEffect, useState } from 'react';
import './register.css';
import { Link, useHistory } from 'react-router-dom'
import imgFace from '../../img/facebook.svg'
import imgGoogle from '../../img/google.svg'
import imgLinkedin from '../../img/linkedin.svg'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PeopleIcon from '@material-ui/icons/People';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [perfil, setPerfil] = useState('cliente')
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        try {
            fetch('http://localhost:3001/users')
                .then(response => response.json())
                .then(
                    (result) => {
                        setListUsers(result);
                    })
        }
        catch (error) {
            console.error(error)
        }
    }, [])

    async function registerUserBack() {
        let list = await listUsers
        let id = await list.length + 1
        try {
            let retorno = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "id": id,
                    "name": name,
                    "email": email,
                    "cpf": cpf,
                    "password": password,
                    "perfil": perfil
                })
            })

            let json = await retorno.json()
            alert('Registrado com sucesso')
            clearForms()
            routeChange()
            return json

        } catch (error) {
            alert('Erro ao fazer o registro')
            clearForms()
            console.log(error)
        }
    }

    function handleClick(e) {
        e.preventDefault()
        confirmRegister(email)
    }

    function confirmRegister(email) {

        let emailConfirmed = true
        let cpfConfirmed = true

        listUsers.map(users => {

            if (email === users.email) {
                alert('Email ja registrado em sistema')
                setEmail('')
                return emailConfirmed = false
            }

            if(cpf === users.cpf) {
                alert('CPF ja registrado em sistema')
                setCpf('')
                return cpfConfirmed = false
            }
            return emailConfirmed;
        })
        if (email === '' || name === '' || password === '' || perfil === '' || cpf === '') {
            return alert('Preencher todos os campos para fazer o cadastro')
        }

        if (emailConfirmed === true && cpfConfirmed === true) {
            if (password === confirmPassword) {
                return registerUserBack().then(resultado => (JSON.stringify(resultado)))
            } else {
                alert('Password invalido, digite novamente')
                setPassword('')
                setConfirmPassword('')
            }
        }

    }

    function clearForms() {
        setName('')
        setEmail('')
        setCpf('')
        setPassword('')
        setPerfil('')
        setConfirmPassword('')
    }

    const history = useHistory()

    const routeChange = () => {
        let path = '/login'
        history.push(path)
    }

    return (
        <div className='div-principal'>
            <div className='div-left'>
                <div>
                    <button className='button-home'>
                        <Link to='/'>
                            <HomeIcon style={{ color: '#fff' }} />
                        </Link>
                    </button>
                </div>
                <div className='div-inf'>
                    <div><strong>Welcome!!!</strong></div>
                    <br />
                    <p>If you are already a user</p>
                    <p>Click on the link below</p>
                    <p>Login with your details</p>
                    <br />
                    <div className='div-button'><button><Link className='link-button' to='/login'>LOG IN</Link></button></div>
                </div>
            </div>
            <div className='div-right'>
                <div className='div-title'>Create Account</div>
                <div className='div-icons'>
                    <div><img src={imgFace} alt='Facebook'></img></div>
                    <div><img src={imgGoogle} alt='Google'></img></div>
                    <div><img src={imgLinkedin} alt='Linkedin'></img></div>
                </div>
                <br />
                <br />
                <p>Fill in the data to make your registration</p>
                <form className='form-register-user'>
                    <PersonIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={name} type='text' placeholder='Name' onChange={e => setName(e.target.value)} required />
                    <br />
                    <EmailIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={email} type='text' placeholder='Email' onChange={e => setEmail(e.target.value)} required multiple />
                    <br />
                    <RecentActorsIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={cpf} type='text' placeholder='CPF' onChange={e => setCpf(e.target.value)} required multiple />
                    <br />
                    <LockIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={password} type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} required />
                    <br />
                    <LockOpenIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={confirmPassword} type='password' placeholder='Confirm Password' onChange={e => setConfirmPassword(e.target.value)} required />
                    <br />
                    <PeopleIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <select className='select-login' onChange={e => setPerfil(e.target.value)}>
                    <optgroup label="Profile">
                        <option value='cliente'  >Client</option>
                        <option value='profissional' >Professional</option>
                        </optgroup>
                    </select>

                    <br/>
                    <div className='div-button-right'>
                        <button type="submit" onClick={handleClick}>
                            SIGN UP
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register;

// function registerUserBack() {
//     let list = listUsers
//     let id = list.length + 1
//     try {
//         let retorno = fetch('http://localhost:5000/users/cadastro', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*'
//             },
//             body: JSON.stringify({
//                // "_id": id,
//                 "name": name,
//                 "email": email,
//                 "cpf": cpf,
//                 "password": password,
//                 "perfil": perfil
//             })
//         })

//         let json = retorno.json()
//         alert('Registrado com sucesso')
//         clearForms()
//         routeChange()
//         return json

//     } catch (error) {
//         alert('Erro ao fazer o registro')
//         clearForms()
//         console.log(error)
//     }
// }