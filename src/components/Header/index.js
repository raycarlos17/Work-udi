import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


const Header = (props) => {
    return (

        <div className='div-header'>
            <div className='div-title-header'><Link className='link-title' to='/' >WORK UDI</Link></div>
            <div className='div-search'>
                <form>
                    <button className='icon-search'>
                        <SearchIcon style={{ fontSize: 30 }} />
                    </button>
                    <input type='text' placeholder='Pesquisar' />
                </form>
            </div>
            <div className='div-login'><Link className='link-login' to='/login' >LOGIN</Link></div>
        </div>

    )
}

export default Header;