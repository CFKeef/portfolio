import React from 'react';

import './Form.css';

class Form extends React.Component {
    render() {
        return(
            <div className="form-container">
                <form action='/contacted' id='contact-form' method='POST' role='form'>
                    <fieldset>
                        <div>
                            <label for="name"></label>
                            <input id="name" name="name" type="text" placeholder="Name"></input>
                        </div>
                        <div>
                            <label for="email"></label>
                            <input id="email" name="email" type="email" placeholder="Email Address"></input>
                        </div>
                        <div>
                            <label for="body"></label>
                            <textarea id="body" name="body" type="text" placeholder="Message"></textarea>
                        </div>
                        <div className="button-container">
                            <button type="submit">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Form;