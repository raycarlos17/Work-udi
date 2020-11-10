import React, { useState, useEffect } from 'react';
import './destaques.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';

const Destaques = () => {

    const [listWorkers, setListWorkers] = useState([])
    const settings = ({
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    })

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
            setListWorkers(json.workers)
            return json
    }
    catch(error) {
        console.log(error);
        return;
    }
}

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "none", marginRight: "25px", zIndex: "99", opacity: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, background: "none", marginLeft: "25px", zIndex: "99", opacity: "none" }}
                onClick={onClick}
            />
        );
    }

    function highlightsWorkers() {
        return listWorkers.map(workers => {
            return (
                <div className='div-destaques' key={workers.id}>
                    <div className='div-contate'>
                        <div>
                            <AccountBoxIcon style={{ fontSize: 130 }} />
                        </div>
                        <h3>{workers.occupation}</h3>
                        <h4>{workers.name}</h4>
                        <button><strong><Link className='link-workers' to={`/workers/${workers.id}`}>Contate</Link></strong></button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='div-principal-destaques'>
            <h2>HIGHLIGHTS</h2>
            <hr />
            <div className='div-slider'>
                <Slider className='slider' {...settings}>
                    {highlightsWorkers()}
                </Slider>
            </div>
        </div>
    )
}

export default Destaques;