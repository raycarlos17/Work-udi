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

    let perfil
    let id

    async function loginUser() {

        try {
            let retorno = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                })
            })
            let json = await retorno.json()
            if (json.respostaLogin === 'sucesso') {

                localStorage.setItem('token', json.token)
                perfil = json.perfil
                id = json.id

                routeChange()
                return;
            }
            else if(json.respostaLogin === 'invalida'){
                alert(json.Message)
                setPassword('')
                return;
            }
            else if(json.respostaLogin === 'naoEncontrado'){
                alert(json.Message)
                clearForms()
                return
            }
            else if(json.respostaLogin === 'error'){
                alert(json.Message)
                return
            }
            return json

        } catch (error) {
            alert('Erro ao fazer login')
            clearForms()
            console.log(error)
        }
    }

    const history = useHistory()

    const routeChange = () => {
        let path = '/'.concat(`${perfil}/${id}`);
        history.push(path)
    }

    function clearForms(){
        setEmail('')
        setPassword('')
    }

    function handleClick(e) {
        e.preventDefault()
        loginUser()
    }

    return (
        <div className='div-principal'>
            <div className='div-left'>
                <div>
                    <button className='button-home'>
                        <Link to='/'>
                            <HomeIcon style={{ color: '#000' }} />
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
                    <EmailIcon className='icon-input' style={{ color: '#c4c400' }} />
                    <input value={email} type='text' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                    <br />
                    <LockIcon className='icon-input' style={{ color: '#c4c400' }} />
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
                    <button type='submit' onClick={handleClick}>
                        LOG IN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;