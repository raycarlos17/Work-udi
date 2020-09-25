import React from 'react';
import './footer.css';

const Footer = (props) => {
    return (
        <div className='div-footer' style={{position: props.position}}>
            <p>@ All rights reserved</p>
        </div>
    )
}

export default Footer;