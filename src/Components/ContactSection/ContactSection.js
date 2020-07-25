import React from 'react';

import SectionHeader from '../../Assets/Section3.svg';
import './ContactSection.css';

import Form from '../Form/Form';

class ContactSection extends React.Component {
    render() {
        return (
            <div className='form-section'>
                <div id='contact' className='header-container'>
                    <img src={SectionHeader} alt="Contact form header"></img>
                </div>
                <Form />
            </div>
        )
    }
}

export default ContactSection;