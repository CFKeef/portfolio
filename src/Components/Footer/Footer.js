import React from 'react';

import LinkedIn from '../../Assets/linkedin.svg';
import Github from '../../Assets/github.svg';
import './Footer.css';

const Footer = () =>{
    return (
        <div className="footer-section">
            <a href="https://www.linkedin.com/in/patryck-golebiewski-710bab126/">
                <img src={LinkedIn} alt="linke to my linkedin"></img>
            </a>
            <a href="https://github.com/CFKeef">
                <img src={Github} alt="Link to my github"></img>
            </a>
        </div>
    )
}

export default Footer;