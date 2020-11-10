import React from 'react';

class CardInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card text-center shadow p-3 rounded col-4 mb-4n" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '200px', marginBottom: '10px' }}>
                <div className="card-header d-flex justify-content-center">
                    <img src={this.props.icon} alt="" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.proficao}</h5>
                </div>
                <div className="card-footer text-muted">
                    <a href="/" className="btn btn-primary mt-4">Contate</a>
                </div>
            </div>
        );
    }
}

export default CardInfo;