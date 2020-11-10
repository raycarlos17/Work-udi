import React from 'react';
import './buttonLogOut.css';
import { Link } from 'react-router-dom';

const ButtonLogOut = (props) => {

    function removeToken(){
        localStorage.removeItem('token')
    }

    function handleClick(e) {
        e.preventDefault()
        removeToken()
    }

    return (
        <div className='div-button-log-out' padding={props.padding} styles={{paddingLeft: '75%'}}>
            <button onClick={handleClick} className='button-log-out'><Link to={'/'}  className='link-button-log-out'>LOG OUT</Link></button>
        </div>
    )
}

export default ButtonLogOut;