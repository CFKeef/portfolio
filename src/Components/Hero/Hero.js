import React from 'react';

import Mural from '../../Assets/circle mural.png';

import './Hero.css';

const Hero = () => {
    return (
        <div className="Hero-Container">
            <img src={Mural} alt="Hero Image"></img>
        </div>
    )
}

export default Hero;