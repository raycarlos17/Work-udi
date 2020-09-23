import React, { useEffect, useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom'
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
//-------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------------
    function confirmLogin() {
        listUsers.map(users => {
            if(email === users.email && password === users.password){
                alert('Logado com sucesso')
            } else if(email !== users.email || password !== users.password ){
                alert('Credenciais invalidas')
            }
        })
    }
//---------------------------------------------------------------------------------------
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
                    <p>Para se manter conectado conosco por</p>
                    <p>favor faça o login com suas</p>
                    <p>informações pessoais</p>
                    <br />
                    <div className='div-button'><button><Link className='link-button' to='/register'>SIGN UP</Link></button></div>
                </div>
            </div>
            <div className='div-right'>
                <div className='div-title'>Login</div>
                <p>Preencha os dados e faça o login...</p>
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
                <p>or use your email for login</p>
                <div className='div-icons'>
                    <div><img src={imgFace} alt='Facebook'></img></div>
                    <div><img src={imgGoogle} alt='Google'></img></div>
                    <div><img src={imgLinkedin} alt='Linkedin'></img></div>
                </div>
                <div className='div-button-right'>
                    <button type='submit' onClick={confirmLogin}>
                        SIGN IN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;