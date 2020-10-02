import React, { useEffect, useState } from 'react';
import './login.css';
import { Link, useHistory } from 'react-router-dom'
import imgFace from '../../img/facebook.svg'
import imgGoogle from '../../img/google.svg'
import imgLinkedin from '../../img/linkedin.svg'
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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

    //     useEffect(() => {
    //         testBackend()
    //     }, [])
    //    async function testBackend() {
    //         try{
    //             let response = await fetch('http://localhost:5000/rotaTeste', {   
    //                 method: 'GET',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-type': 'application/json',
    //                     'Access-Control-Allow-Origin': '*'
    //                 }
    //             })
    //             console.log(response)
    //             // let json = response.json;
    //             // console.log(json)
    //             // return json
    //             return response
    //         } catch(error) {
    //             console.error(error)
    //         }
    //     }

    function confirmLogin() {
        let user
        listUsers.map(list => {

            if (email === list.email) {
                user = list
            }
            return true
        })
        if (password === '' && email === '') {
            alert('Preencher email e senha para logar')
        }
        else if (user === undefined) {
            alert('Email não encontrado')
            setEmail('')
            setPassword('')
        } else if (password === user.password) {
            alert('Logado com sucesso')
            localStorage.setItem('user', user.name)
            routeChange(user.perfil, user.id)
        } else if (password !== user.password) {
            alert('Password invalido')
            setPassword('')
        }

    }

    const history = useHistory()

    const routeChange = (perfil, id) => {
        let path = '/'.concat(`${perfil}/${id}`);
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
                    <p>If you are not a user</p>
                    <p>Make your registration now</p>
                    <p>Just click the link below</p>
                    <br />
                    <div className='div-button'><button><Link className='link-button' to='/register'>REGISTER</Link></button></div>
                </div>
            </div>
            <div className='div-right'>
                <div className='div-title-login'>Login</div>
                <p>Fill in the fields and login</p>
                <br />
                <br />
                <form>
                    <EmailIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={email} type='text' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    <br />
                    <LockIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input value={password} type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                    <br />
                </form>
                <p>Fill in with your email and password to login</p>
                <div className='div-icons'>
                    <div><img src={imgFace} alt='Facebook'></img></div>
                    <div><img src={imgGoogle} alt='Google'></img></div>
                    <div><img src={imgLinkedin} alt='Linkedin'></img></div>
                </div>
                <div className='div-button-right'>
                    <button type='submit' onClick={confirmLogin}>
                        LOG IN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;