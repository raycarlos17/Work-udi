import React, {useEffect, useState} from 'react';
import './workers.css';

const Workers = (props) => {

    const [listWorkers, setListWorkers] = useState([])

    useEffect(() => {
        try {
            fetch(`http://localhost:3001/workers/${props.match.params.id}`)
                .then(response => response.json())
                .then(
                    (result) => {
                        setListWorkers(result);
                    })
        }
        catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div>
            {console.log(props)}
            <h1>WORKERS</h1>
            <h2>Name: {listWorkers.name}</h2>
            <h2>Email: {listWorkers.email}</h2>
            <h2>Ocupation: {listWorkers.occupation}</h2>
            <h2>Contact: {listWorkers.contact}</h2>

        </div>
    )
}

export default Workers;