import React from 'react';

import SectionHeader from '../../Assets/Section1.svg';
import './Bio.css';

const Bio = () => {
    return (
        <div className="Bio-Container">
            <h1>Hi, I'm <mark className="pink-highlight">Patryck Golebiewski</mark></h1>
            <h2>Computer Science and Accounting student based in <mark className="purple-highlight">NYC</mark></h2>
            <img src={SectionHeader} alt="Check out work below"></img>
        </div>
    )
}

export default Bio;