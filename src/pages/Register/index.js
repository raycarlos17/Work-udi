import React, { useEffect, useState } from 'react';
import './register.css';
import { Link } from 'react-router-dom'
import imgFace from '../../img/facebook.svg'
import imgGoogle from '../../img/google.svg'
import imgLinkedin from '../../img/linkedin.svg'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';

const Register = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [listUsers, setListUsers] = useState([])
    // const [listUsersHard, setListUsersHard] = useState([
    //     {
    //         id: 1,
    //         name: "Fulado de tal",
    //         email: "fulano1@gmail.com",
    //         password: "123456"
    //     }, {
    //         id: 2,
    //         name: "Fulado de tal",
    //         email: "fulano1@gmail.com",
    //         password: "123456"
    //     }
    // ])
    //----------------------------------------------------------------------------
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
    //-------------------------------------------------------------------------------------
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
                    "password": password
                })
            })

            let json = await retorno.json()
            alert('Registrado com sucesso')
            clearForms()
            return json

        } catch (error) {
            alert('Erro ao fazer o registro')
            console.log(error)
        }
    }
    //---------------------------------------------------------------------------------
    // function registerUserHard(name, email, password) {

    //     let list = listUsersHard

    //     let id = list.length + 1
    //     list.push({
    //         id: id,
    //         name: name,
    //         email: email,
    //         password: password,
    //     })
    //     setListUsersHard(list)
    // }
    //----------------------------------------------------------------------------------------
    function handleClick(e) {
        e.preventDefault()
        // registerUserHard(name, email, password)
        confirmRegister(email)
    }
    //-----------------------------------------------------------------------------------------
    function confirmRegister(email) {
        listUsers.map(users => {
            if (email === users.email) {
                return alert('Email ja registrado em sistema')
            } else {
                return registerUserBack().then(resultado => (JSON.stringify(resultado)))
            }
        })
    }
    //---------------------------------------------------------------------------------------------
    function clearForms() {
        setName('')
        setEmail('')
        setPassword('')
    }
    //-----------------------------------------------------------------------------------------
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
                    <div><strong>Welcome Back!</strong></div>
                    <br />
                    <p>Para se manter conectado conosco por</p>
                    <p>favor faça o login com suas</p>
                    <p>informações pessoais</p>
                    <br />
                    <div className='div-button'><button><Link className='link-button' to='/login'>SIGN IN</Link></button></div>
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
                <p>or use your email for registration</p>
                <br />
                <form>
                    <PersonIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={name}  type='text' placeholder='Name' onChange={e => setName(e.target.value)} required />
                    <br />
                    <EmailIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={email} type='text' placeholder='Email' onChange={e => setEmail(e.target.value)} required />
                    <br />
                    <LockIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={password} type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} required />
                    <br />
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