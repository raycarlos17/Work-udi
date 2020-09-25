import React, { useEffect, useState } from 'react';
import './workers.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

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
                <h4>Contact Information</h4>
                <p><strong>Name: </strong>{listWorkers.name}</p>
                <br />
                <hr/>
                <p><strong>Email: </strong>{listWorkers.email}</p>
                <br />
                <hr/>
                <p><strong>Ocupation: </strong>{listWorkers.occupation}</p>
                <br />
                <hr/>
                <p><strong>Contact: </strong>{listWorkers.contact}</p>
                <br />
                <hr/>
                <p><strong>Description: </strong>{listWorkers.description}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Workers;