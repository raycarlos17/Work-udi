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

    const [listWorkers, setListWorkers] = useState([])

    useEffect(() => {

        const id = props.match.params.id

        try {
            fetch(`http://localhost:3001/workers/${id}`)
                .then(response => response.json())
                .then(
                    (result) => {
                        setListWorkers(result);
                    })
        }
        catch (error) {
            console.error(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <Header>
            <div className='div-login-workers'><Link className='link-login-workers' to='/login' >LOGIN</Link></div>
            </Header>
            <div className='div-workers'>
                <h4>Contact Information <InfoIcon className='icon-workers-info'/></h4>
                <p><PersonIcon className='icon-workers'/><strong>Name: </strong>{listWorkers.name}</p>
                <br />
                <hr/>
                <p><EmailIcon className='icon-workers'/><strong>Email: </strong>{listWorkers.email}</p>
                <br />
                <hr/>
                <p><BuildIcon className='icon-workers'/><strong>Ocupation: </strong>{listWorkers.occupation}</p>
                <br />
                <hr/>
                <p><PhoneIcon className='icon-workers'/><strong>Contact: </strong>{listWorkers.contact}</p>
                <br />
                <hr/>
                <p><DescriptionIcon className='icon-workers'/><strong>Description: </strong>{listWorkers.description}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Workers;