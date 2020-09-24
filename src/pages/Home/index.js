import React from 'react';
import './home.css'
import {Link} from 'react-router-dom';
import Header from '../../components/Header'
import Destaques from '../Destaques';
import Footer from '../../components/Footer';
import SearchIcon from '@material-ui/icons/Search';

const Home = (props) => {

    return (
        <React.Fragment>
        <Header>
        <div className='div-search'>
                <form>
                    <button className='icon-search'>
                        <SearchIcon style={{ fontSize: 30 }} />
                    </button>
                    <input type='text' placeholder='Pesquisar' />
                </form>
            </div>
            <div className='div-login'><Link className='link-login' to='/login' >LOGIN</Link></div>
        </Header>
        <div className='div-imagem'>
            <div className='div-info'>
                <div className='logo'><h1>WU</h1></div>
                <div className='info-site'>
                    <p>THE BEST PROFESSIONALS FOR WHATEEVER YOU NEED, YOU CAN FIND HERE..</p>
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