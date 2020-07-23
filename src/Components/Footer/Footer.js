import React from 'react';

import LinkedIn from '../../Assets/linkedin.svg';
import Github from '../../Assets/github.svg';
import './Footer.css';

const Footer = () =>{
    return (
        <div className="footer-section">
            <a href="https://www.linkedin.com/in/patryck-golebiewski-710bab126/">
                <img src={LinkedIn} ></img>
            </a>
            <a href="https://github.com/CFKeef">
                <img src={Github}></img>
            </a>
        </div>
    )
}

export default Footer;