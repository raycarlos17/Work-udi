import React, { useEffect, useState } from 'react';
import './workers.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIcon from '@material-ui/icons/Phone';
import DescriptionIcon from '@material-ui/icons/Description';
import InfoIcon from '@material-ui/icons/Info';

const Workers = (props) => {

    const [worker, setWorker] = useState([])

    useEffect(() => {
        dadosUser()
    }, [])

    async function dadosUser(){

        const id = props.match.params.id

        try {
            let retorno = await fetch(`http://localhost:5000/workers/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });

            let json = await retorno.json()
            console.log(json)
            setWorker(json)
            console.log(worker)
    }
    catch(error) {
        console.log(error);
    }
}

    return (
        <div>
            <Header>
            <div className='div-login-workers'><Link className='link-login-workers' to='/login' >LOGIN</Link></div>
            </Header>
            <div className='div-workers'>
                <h4>Contact Information <InfoIcon className='icon-workers-info'/></h4>
                <p><PersonIcon className='icon-workers'/><strong>Name: </strong>{worker.name}</p>
                <br />
                <hr/>
                <p><EmailIcon className='icon-workers'/><strong>Email: </strong>{worker.email}</p>
                <br />
                <hr/>
                <p><BuildIcon className='icon-workers'/><strong>Ocupation: </strong>{worker.occupation}</p>
                <br />
                <hr/>
                <p><PhoneIcon className='icon-workers'/><strong>Contact: </strong>{worker.contact}</p>
                <br />
                <hr/>
                <p><DescriptionIcon className='icon-workers'/><strong>Description: </strong>{worker.description}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Workers;