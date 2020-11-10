import React from 'react';
import './style.css'


class CardInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card" style={{width: 450, height: 'auto', margin: '0 50px 60px 50px'}}>
                <div className="row">
                    <div className="col-4" style={{backgroundColor: '#C4C4C4', margin: 0, padding: 0}}>
                        <img className="card-img" src={this.props.img} alt=""/>
                    </div>
                    <div className="col-8 ContentCustom">
                        <h5 className="text-center mb-4 mt-2">{this.props.nome}</h5>
                        <p className="textpCustom mb-2">
                          {this.props.desc}
                        </p>
                        <p className="textpCustom2 mb-2">
                         {this.props.proff}
                        </p>
                        <div className="mb-2" style={{display: 'flex', justifyContent: 'center'}}>
                            <button className="btnCustom">Contratar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardInfo;