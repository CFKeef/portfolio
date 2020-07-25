import React from 'react';
import axios from 'axios';

import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            email : '',
            body : ''
        }

        this.sendEmail = this.sendEmail.bind(this);
        this.nameInputChangeHandler =this.nameInputChangeHandler.bind(this);
        this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
        this.bodyInputChangeHandler = this.bodyInputChangeHandler.bind(this);
    }
    sendEmail() {
        axios.post('http://localhost:3001/contacted', {
            email: this.state.email, 
            name: this.state.name, 
            body: this.state.body
        }).then(response =>{
            if(response.status === 200) alert("Message sent!");
            else alert("Message Failed :(");
        }).catch(err => {
            alert("Error occurred :( " + err);
        })
    }
    nameInputChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    emailInputChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    bodyInputChangeHandler = (event) => {
        this.setState({
            body: event.target.value
        })
    }    
    render() {
        return(
            <div className="form-container">
                <div>
                    <fieldset>
                        <div>
                            <label htmlFor="name"></label>
                            <input id="name" name="name" type="text" placeholder="Name" onChange={this.nameInputChangeHandler}></input>
                        </div>
                        <div>
                            <label htmlFor="email"></label>
                            <input id="email" name="email" type="email" placeholder="Email Address" onChange={this.emailInputChangeHandler}></input>
                        </div>
                        <div>
                            <label htmlFor="body"></label>
                            <textarea id="body" name="body" type="text" placeholder="Message" onChange={this.bodyInputChangeHandler}></textarea>
                        </div>
                        <div className="button-container">
                            <button type="submit" onClick={this.sendEmail}>Submit</button>
                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default Form;