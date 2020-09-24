import React, {useState, useEffect} from 'react';
import ButtonLogOut from '../../components/ButtonLogOut';
import Header from '../../components/Header'
import './homeCliente.css';

const HomeCliente = (props) => {

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
            <Header>
                <ButtonLogOut styles={{paddingLeft: 75}}/>
            </Header>
            PAGINA DO CLIENTE
            <br/>
            BEM VINDO {user}
            BEM VINDO {listUser.name}
        </div>
    )
}

export default HomeCliente