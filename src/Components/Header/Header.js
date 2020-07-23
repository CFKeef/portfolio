import React from 'react';

import './Header.css';

// Components
import LogoContainer from '../LogoContainer/LogoContainer';
import Menu from '../Menu/Menu';

const Header = () => {
    return (
        <div className='Header-container'>
            <LogoContainer />
            <Menu />
        </div>
    )
}

export default Header