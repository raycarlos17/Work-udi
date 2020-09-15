import React from 'react';
import './home.css'
import {Link} from 'react-router-dom';
import Header from '../../components/Header'
import Destaques from '../Destaques';
import Footer from '../../components/Footer';

const Home = (props) => {

    return (
        <React.Fragment>
        <Header/>
        <div className='div-imagem'>
            <div className='div-info'>
                <div className='logo'><h1>WU</h1></div>
                <div className='info-site'>
                    <p>PRINCIPAIS INFORMAÇÕES DO SITE VÃO ESTAR POSTADAS DO LADO DA LOGO</p>
                    <div >
                        <button className='button-register'><Link className='link-register' to='/register'>CADASTRE-SE AGORA</Link></button>
                    </div>
                </div>
            </div>
        </div>
        <Destaques/>
        <Footer/>
        </React.Fragment>
    )
}

export default Home;