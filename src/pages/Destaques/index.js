import React from 'react';
import './destaques.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Destaques = () => {
    return (
        <div className='div-principal-destaques'>
            <h2>DESTAQUES</h2>
            <hr/>
            <div className='div-destaques'>

                <div className='div-contate'>
                    <div>
                        <AccountBoxIcon style={{fontSize: 130}} />
                    </div>
                    <h3>Função</h3>
                    <button><strong>Contate</strong></button>
                </div>
            </div>
        </div>
    )
}

export default Destaques;