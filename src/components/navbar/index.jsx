import React from 'react';
import './style.css'

import Logo1 from '../../assets/img/Vector.svg'
import Logo2 from '../../assets/img/Vector-1.svg'
import IconSearch from '../../assets/img/mdi_search.svg'

class Navbar extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(0, 0, 0, .3)', height: 60 }}>
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Navbar brand */}
                        <a className="navbar-brand" href="/">
                            <img src={Logo1} alt="" />
                            <img src={Logo2} alt="" style={{ transform: 'translateX(-17.5px)' }} />
                             WORKUDI
                         </a>
                        {/* Toggle button */}
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Left links */}
                            {/* Search form */}
                            <form className="d-flex input-group w-auto ml-auto mr-5">
                                {/* <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-primary" type="button" data-ripple-color="dark">
                                    <i> <img src={IconSearch} alt="" style={{ width: '25px' }} /></i>
                                </button> */}
                            </form>
                            <ul className="navbar-nav mr-0 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">
                                        <i className="fas fa-user mr-2" />
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Collapsible wrapper */}
                    </div>
                    {/* Container wrapper */}
                </nav>

            </div>
        );
    }
}

export default Navbar;