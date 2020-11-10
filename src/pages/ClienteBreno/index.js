import React from 'react';
import './style.css';

import Header from '../../components/navbarBreno'
import Footer from '../../components/footerBreno'
import CardC from '../../components/cardCliente'

function Home () {
        return (
            <div>
                <Header />
                <main className="container">
                    <div className="pt-5 pb-5" style={{ backgroundColor: '#F5F5F5' }}>
                        <div class="card shadow-sm rounded" style={{width: '80%', margin: 'auto', backgroundColor: 'rgba(0, 0, 0, .08)'}}>
                            <div class="card-header" style={{backgroundColor: 'rgba(0, 0, 0, .15)'}}>
                                Filter
                            </div>
                            <div class="card-body" style={{height: 120, display: 'flex', alignItems: 'end'}}>
                                <form className="row mb-3">
                                    <div className="col-md-6">
                                        <input className="InputCustom" placeholder="Name" type="text" name="" id=""/>
                                    </div>
                                    <div className="col-md-6">
                                        <input className="InputCustom" placeholder="Profession" type="text" name="" id=""/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="divisorB"></div>

                        <div className="row m-auto  d-flex justify-content-center" style={{ borderBottom: '2px solid #d6d6d6', paddingBottom: '50px' }}>
                             <CardC nome="Fulano de tal" 
                                    desc="Lorem ipsum dolor sit amet,asdfasdfasdfasdfasdf asdfasdf asdf asd fasdfa sdf consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." 
                                    proff="Eletricista" 
                                    img="https://i.pinimg.com/736x/a7/28/01/a72801bd0c717c39efa040aaa8ce42fe.jpg" 
                             />
                              <CardC nome="Raimundo" 
                                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." 
                                    proff="pedreiro" 
                                    img="https://i.pinimg.com/736x/46/7d/dd/467ddd1e438945e4ac2918abee1b364f.jpg" 
                             />
                              <CardC nome="Pelé" 
                                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." 
                                    proff="encanador" 
                                    img="https://i.pinimg.com/736x/46/7d/dd/467ddd1e438945e4ac2918abee1b364f.jpg" 
                             /> 
                             
                             <CardC nome="Alguem" 
                                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." 
                                    proff="Eletricista" 
                                    img="https://i.pinimg.com/736x/46/7d/dd/467ddd1e438945e4ac2918abee1b364f.jpg" 
                             />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }


export default Home;