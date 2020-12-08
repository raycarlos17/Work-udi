import React, { useEffect, useState } from 'react';
import './registrarPerfilProfissional.css';
import Header from '../../components/navbarBreno'
import { Link } from 'react-router-dom';
import Footer from '../../components/footerBreno';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import BuildIcon from '@material-ui/icons/Build';
import PhoneIcon from '@material-ui/icons/Phone';
import DescriptionIcon from '@material-ui/icons/Description';

const RegistrarPerfilProfissional = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [contact, setContact] = useState('')
    const [description, setDescription] = useState('')
    const [user, setUser] = useState([])

    useEffect(() => {
        dadosUser();
        dadosUserWorker();
    }, [])

    const id = props.match.params.id

    async function registerWorkerBack() {
        try {
            let retorno = await fetch('http://localhost:5000/workers/cadastro', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    "id": id,
                    "name": name,
                    "email": email,
                    "occupation": occupation,
                    "contact": contact,
                    "description": description
                })
            })
            let json = await retorno.json()
            if(json.respostaCadastro === 'sucesso'){
                alert(json.Message)
                return;
            } 
            else if(json.respostaCadastro === 'camposVazios'){
                alert(json.Message)
                return;
            }
            else if(json.respostaCadastro === 'emailCadastrado'){
                alert(json.Message)
                return;
            }
            else if(json.respostaCadastro === 'idCadastrado'){
                alert(json.Message)
                return;
            }
            else if(json.respostaCadastro === 'contactCadastrado'){
                alert(json.Message)
                return;
            }
 
            return json

        } catch (error) {
            alert('Erro ao fazer o cadastro fo seu perfil profissional')
            clearForms()
            console.log(error)
        }
    }

    async function dadosUser() {

        try {
            let retorno = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });

            let json = await retorno.json()
            console.log(json)
            setUser(json)
        }
        catch (error) {
            console.log(error);
        }
    }

    async function dadosUserWorker() {
        const id = props.match.params.id;
    
        try {
          let retorno = await fetch(`http://localhost:5000/workers/${id}`, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          });
    
          let json = await retorno.json();
          console.log(json);
         setName(json.name);
         setEmail(json.email);
         setOccupation(json.occupation);
         setContact(json.contact);
         setDescription(json.description);

        } catch (error) {
          console.log(error);
        }
      }

    function confirmRegisterWorker() {
        if (name === '' && email === '' & occupation === '') {
            alert('É necessário preencher os campos obrigatorios que contem (Required)')
        } else {
            let resposta = window.confirm("Deseja realmente fazer o registro? Suas informações vão estar visiveis na página inicial")
            if (resposta === true) {
                registerWorkerBack()
            } else {
                return undefined
            }
        }
    }

    function clearForms() {
        setName('')
        setEmail('')
        setOccupation('')
        setContact('')
        setDescription('')

    }

    // function handleClickDelete(e) {
    //     e.preventDefault()
    //     let resposta = window.confirm("Realmente deseja deletar o seus dados profissionais?")
    //     if (resposta === true) {
    //         deleteWorkerBack()
    //         clearForms()
    //     } else {
    //         return undefined
    //     }
    // }

    function handleClickSaveWorker(e) {
        e.preventDefault()
        confirmRegisterWorker()
    }

    // function handleClickUpdateWorker(e) {
    //     e.preventDefault()
    //     let resposta = window.confirm('Realmente deseja alterar os seus dados?')
    //     if (resposta === true) {
    //         updateWorkerBack()
    //     } else {
    //         return undefined
    //     }
    // }

    // function buttonRegister() {
    //     if (listWorker.id === undefined) {
    //         return (
    //             <button onClick={handleClickSaveWorker}>REGISTER</button>
    //         )
    //     }
    // }

    return (
        <div>
            <Header/>
            <div className='div-register-perfil-prof-principal'>
                <h1>PROFESSIONAL DATA</h1>
                <hr />
                <form>
                    <label><PersonIcon className='icon-register-perfil-prof' />Professional Name (Required): </label>
                    <br />
                    <input value={name || ''} onChange={e => setName(e.target.value)} type='text' placeholder={name} />
                    <br />
                    <label><EmailIcon className='icon-register-perfil-prof' />Professional Email (Required): </label>
                    <br />
                    <input value={email || ''} onChange={e => setEmail(e.target.value)} type='text' placeholder={email} />
                    <br />
                    <label><BuildIcon className='icon-register-perfil-prof' />Occupation (Required): </label>
                    <br />
                    <input value={occupation || ''} onChange={e => setOccupation(e.target.value)} type='text' placeholder={occupation} />
                    <br />
                    <label><PhoneIcon className='icon-register-perfil-prof' /> Contact: </label>
                    <br />
                    <input value={contact || ''} onChange={e => setContact(e.target.value)} type='text' placeholder={contact} />
                    <br />
                    <label><DescriptionIcon className='icon-register-perfil-prof' /> Description: </label>
                    <br />
                    <textarea className='textarea-register-perfil-prof' value={description || ''} onChange={e => setDescription(e.target.value)} type='text' placeholder={description} ></textarea>
                    <br />
                    <div className='div-button-registrar-profissional'>
                        <button onClick={handleClickSaveWorker}>REGISTER</button>
                        {/* <button onClick={handleClickUpdateWorker}>CHANGE</button>
                        <button onClick={handleClickDelete}>DELETE</button>
                        <button onClick={(undefined)}>UPDATE PAGE</button> */}
                        <button className='registrar-perfil-profissional-button-come-back'><Link className='link-button-perfil' to={`/${user.perfil}/${user._id}`}>BACK</Link></button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default RegistrarPerfilProfissional;