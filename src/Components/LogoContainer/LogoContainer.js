import React from 'react';

import Logo from '../../Assets/LOGO1.svg';
import './LogoContainer.css';

const LogoContainer = () => {
    return (
        <a className="LogoContainer" href="/">
            <img src={Logo} alt="website-logo"></img>
        </a>
    )
}

export default LogoContainer