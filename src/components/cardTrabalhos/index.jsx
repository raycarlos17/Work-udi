import React from 'react';
import zeref from '../../assets/img/Zeref.png'

class CardTrabalhos extends React.Component {
    render() {
        return (
            <div className="shadow p-0 mb-5 bg-white" style={{borderRadius:'5px'}} >
                <div className="row p-0">
                    <div className="col-6" style={{background:'#C4C4C4', borderRadius:'5px'}}>
                        <div style={{ width: '80%', marginTop:'5px' }}>
                            <span className="text-center mb-2">Descrições</span>
                            <p className="mt-2" style={{fontSize:'10px'}}>Texto descrevendo o trabalho do das fotos que foram postadas ao lado teoricamente seria 4 fotos diferentes </p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div style={{ width: '80%',marginTop:'5px' }}>
                            <span className="text-center mb-2 "> Imagens</span>
                            <div class="row mb-4">
                                <div class="col-6 mt-2">
                                    <img src={zeref} style={{ width:'50px'}} />
                                </div>
                                <div class="col-6 mt-2">
                                    <img src={zeref} style={{ width:'50px'}} />
                                </div>

                                <div class="col-6 mt-2">
                                    <img src={zeref} style={{ width:'50px'}}
                                    />
                                </div>
                                <div class="col-6 mt-2">
                                    <img src={zeref} style={{ width:'50px'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CardTrabalhos;