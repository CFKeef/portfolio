import React from 'react';

import SectionHeader from '../../Assets/Section3.svg';
import './ContactSection.css';

import Form from '../Form/Form';

class ContactSection extends React.Component {
    render() {
        return (
            <div className='form-section'>
                <div id='test' className='header-container'>
                    <img src={SectionHeader}></img>
                </div>
                <Form 
                    name={this.props.name}
                    email={this.props.email}
                    subject={this.props.subject}
                    message={this.props.message}
                />
            </div>
        )
    }
}

export default ContactSection;