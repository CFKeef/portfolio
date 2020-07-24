import React from 'react';

import Mural from '../../Assets/mural.svg';

import './Hero.css';

const Hero = () => {
    return (
        <div className="Hero-Container">
            <img src={Mural} alt="Circle mural Hero"></img>
        </div>
    )
}

export default Hero;