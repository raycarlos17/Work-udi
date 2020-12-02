import React, { useEffect, useState } from 'react';
import './style.css';

import Header from '../../components/navbarBreno'
import Footer from '../../components/footerBreno'
import CardC from '../../components/cardCliente'

function Home() {

    const [listWorkers, setListWorkers] = useState([])

    useEffect(() => {
        dadosWorkers()
    }, [])

    async function dadosWorkers() {
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
            setListWorkers(json.workers)
            return json
        }
        catch (error) {
            console.log(error);
            return;
        }
    }

    function cardListWorkers(){
        return listWorkers.map(workers => {
            return(
                <CardC nome={workers.name}
                    desc={workers.description}
                    proff={workers.occupation}
                    id={workers.id}
                    img="https://i.pinimg.com/736x/a7/28/01/a72801bd0c717c39efa040aaa8ce42fe.jpg"
                /> 
            )
        })
    }

    return (
        <div>
            <Header />
            <main className="container">
                <div className="pt-5 pb-5" style={{ backgroundColor: '#F5F5F5' }}>
                    <div class="card shadow-sm rounded" style={{ width: '80%', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, .08)' }}>
                        <div class="card-header" style={{ backgroundColor: 'rgba(0, 0, 0, .15)' }}>
                            Filter
                            </div>
                        <div class="card-body" style={{ height: 120, display: 'flex', alignItems: 'end' }}>
                            <form className="row mb-3">
                                <div className="col-md-6">
                                    <input className="InputCustom" placeholder="Name" type="text" name="" id="" />
                                </div>
                                <div className="col-md-6">
                                    <input className="InputCustom" placeholder="Profession" type="text" name="" id="" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="divisorB"></div>

                    <div className="row m-auto  d-flex justify-content-center" style={{ borderBottom: '2px solid #d6d6d6', paddingBottom: '50px' }}>
                    {cardListWorkers()}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Home;