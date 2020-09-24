import React, {useState, useEffect} from 'react';
import './homeProfissional.css';

const HomeProfissional = (props) => {

    const user = localStorage.getItem('user')
    const [listUser, setListUser] = useState([])

    useEffect(() => {

        const id = props.match.params.id

        try {
            fetch(`http://localhost:3001/users/${id}`)
                .then(response => response.json())
                .then(
                    (result) => {
                        setListUser(result);
                    })
        }
        catch (error) {
            console.error(error)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            PAGINA DO PROFISSIONAL
            <br/>
            BEM VINDO {user}
            BEM VINDO {listUser.name}
        </div>
    )
}

export default HomeProfissional