import React from 'react';
import './buttonLogOut.css';

const ButtonLogOut = (props) => {
    return (
        <div className='div-button-log-out' padding={props.padding} styles={{paddingLeft: '75%'}}>
            <button className='button-log-out'>LOG OUT</button>
        </div>
    )
}

export default ButtonLogOut;