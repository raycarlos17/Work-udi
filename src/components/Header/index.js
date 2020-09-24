import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = (props) => {
    return (

        <div className='div-header'>
            <div className='div-title-header'><Link className='link-title' to='/' >WORK UDI</Link></div>
            {props.children}
        </div>

    )
}

export default Header;