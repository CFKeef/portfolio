import React from 'react';

import ResumePDF from '../../Assets/testingresume.pdf';
import './Resume.css';

const Resume = () =>{
    return(
        <div className="resume-container">
            <iframe src={ResumePDF} title='Resume'></iframe>   
            <a download="PatryckGolebiewski_Resume.pdf" href={ResumePDF}>Download</a>
        </div>
    )
}

export default Resume;