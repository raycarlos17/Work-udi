import React from 'react';
import './styles.css'
import {Link} from 'react-router-dom';
import Header from '../../components/Header'

const Home = (props) => {

    return (
        <React.Fragment>
        <Header/>
        <div className='div-imagem'>
            <div className='div-info'>
                <div className='logo'>LOGO</div>
                <div className='info-site'>
                    <p>PRINCIPAIS INFORMAÇÕES DO SITE VÃO ESTAR POSTADAS DO LADO DA LOGO</p>
                    <div >
                        <button className='button-register'><Link className='link-register' to='/register'>CADASTRE-SE AGORA</Link></button>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;