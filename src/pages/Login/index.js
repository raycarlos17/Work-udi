import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'
import imgFace from '../../img/facebook.svg'
import imgGoogle from '../../img/google.svg'
import imgLinkedin from '../../img/linkedin.svg'
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';


const Login = (props) => {
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
                    <input type='text' placeholder='Email' />
                    <br />
                    <LockIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input type='password' placeholder='Password' />
                    <br />
                </form>
                <p>or use your email for login</p>
                <div className='div-icons'>
                    <div><img src={imgFace} alt='Facebook'></img></div>
                    <div><img src={imgGoogle} alt='Google'></img></div>
                    <div><img src={imgLinkedin} alt='Linkedin'></img></div>
                </div>
                <div className='div-button-right'>
                    <button>
                        SIGN IN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;