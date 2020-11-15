import React, { useEffect, useState } from 'react';
import './profissional.css';
import NavBar from '../../components/navbar'
import Footer from '../../components/footerRaphael'
import jiraya from '../../assets/img/jiraya.jpg'
import CardTrabalhos from '../../components/cardTrabalhosRaphael';

const HomeProfissionalRaphael = (props) => {

    const [listWorkers, setListWorkers] = useState([])

    useEffect(() => {
        dadosWorkers()
    }, [])

    async function dadosWorkers(){
        try {
            let retorno = await fetch(`http://localhost:5000/workers`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
            });

            let json = await retorno.json()
            console.log(json)
            setListWorkers(json.workers)
            return json
    }
    catch(error) {
        console.log(error);
        return;
    }
}

    return (
        <div>
            <NavBar />
            <div className="container bg-light p-3">
                <div className="row">
                    <div className="col-8 mt-5">
                        <div className="text-center">
                            <h3>Nome completo do profissional</h3>
                            <h5>Profissão</h5>
                        </div>
                        <div className="mt-5">
                            <span className="font-weight-bold">Sobre</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book
                            </p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-center">
                            <img className="mt-3" src={jiraya} style={{ width: "150px" }} />
                        </div>
                    </div>

                </div>
                <div className="row mt-3">
                    <div className="col-8">
                        <span className="font-weight-bold">Trabalhos</span>
                        <div className="row">
                            <div className="col-6">
                                <CardTrabalhos></CardTrabalhos>
                            </div>
                            <div className="col-6">
                                <CardTrabalhos></CardTrabalhos>
                            </div>
                        </div>
                        <span className="font-weight-bold mt-4">Contatos</span>
                        
                        <div className='row mt-2' style={{fontSize:'12px'}}>
                            <span className="font-weight-bold mt-2 col-4">Telefone: (34) 3333-3333</span>
                            <span className="font-weight-bold mt-2 col-4">Celular: (34) 9 9999-9999</span>
                            <span className="font-weight-bold mt-2 col-4">Instagram: @teste</span>
                            <span className="font-weight-bold mt-2 col-4">Facebook: fb.com/Teste</span>
                            <span className="font-weight-bold mt-2 col-4">Linkedin: linkedin.com/Teste</span>
                            <span className="font-weight-bold mt-2 col-4">Twitter: @testeTwitter</span>

                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-center">
                            <div style={{ width: '150px', background: '#c4c4c4', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> Propraganda</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default HomeProfissionalRaphael;