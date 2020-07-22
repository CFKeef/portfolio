import React, { useState } from 'react';

import Logo from '../../Assets/LOGO1.svg';
import './LogoContainer.css';

const LogoContainer = () => {
    return (
        <div className="LogoContainer">
            <img src={Logo} alt="website-logo"></img>
        </div>
    )
}

export default LogoContainer