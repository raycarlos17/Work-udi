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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [listUsers, setListUsers] = useState([
        {
            id: '1',
            name: 'Ray Carlos',
            email: 'raycarlos17@gmail.com',
            password: '123456'
        }   
    ])

    // useEffect(async () => {
    //     const response = await fetch('http://localhost:3001/users')
    //     const data = await response.json();

    //     setListUsers(data)
    //     console.log(data)
    // }, []);

    // registerUser = () => {

    // }


    return (
        <div className='div-principal'>
            <div className='div-left'>
                <div>
                    {console.log(listUsers)}
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
                    <input type='text' placeholder='Name' />
                    <br />
                    <EmailIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input type='text' placeholder='Email' />
                    <br />
                    <LockIcon className='icon-input' style={{ color: '#3AB0A2' }} />
                    <input type='password' placeholder='Password' />
                    <br />
                </form>
                <div className='div-button-right'>
                    <button>
                        SIGN UP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;