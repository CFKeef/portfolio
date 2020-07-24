import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

// Stylesheet
import './App.css';

// Components
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Bio from './Components/Bio/Bio';
import Projects from './Components/Projects/Projects';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';

class App extends React.Component {
  // Properties
  state = {
    projectObject : [
      {id: '0', name: 'lorem ipsum', techUsed: 'React, MongoDB, Express, NodeJS', gitLink: null, liveLink: null, imgName: 'prodoProj.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
                                                                                                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
                                                                                                                 ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      {id: '1',name: 'lorem ipsum', techUsed: 'React, MongoDB, Express, NodeJS', gitLink: null, liveLink: null, imgName: 'prodoProj.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
                                                                                                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
                                                                                                                 ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      {id: '2', name: 'lorem ipsum', techUsed: 'React, MongoDB, Express, NodeJS', gitLink: null, liveLink: null, imgName: 'prodoProj.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
                                                                                                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
                                                                                                                 ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}                                                                                                                                                                                                                          
    ],
    formObject : [
      {name: null, email: null, subject: null, message: null}
    ],
    path : '/',
    file : null
  }
  // Methods

  // Render
  render(){
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path='/'>
              <Hero />
              <Bio />
              <Projects 
                display={this.state.projectObject}
              />
              <ContactSection 
                form={this.state.formObject}
              />
            </Route>
            <Route path='/resume'>
              <Resume />
              <ContactSection 
                form={this.state.formObject}
              />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
