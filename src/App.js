import React from 'react';

// Stylesheet
import './App.css';

// Components
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Bio from './Components/Bio/Bio';
import Projects from './Components/Projects/Projects'

class App extends React.Component {
  // Properties
  state = {
    projectObject : [
      {id: '0', name: 'lorem ipsum', techUsed: 'React, MongoDB, Express, NodeJS', imgName: 'prodoProj.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
                                                                                                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
                                                                                                                 ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      {id: '1',name: 'lorem ipsum', techUsed: 'React, MongoDB, Express, NodeJS', imgName: 'prodoProj.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
                                                                                                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
                                                                                                                 ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
      {id: '2', name: 'lorem ipsum', techUsed: 'React, MongoDB, Express, NodeJS', imgName: 'prodoProj.svg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim \
                                                                                                                 ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex \
                                                                                                                 ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}                                                                                                                                                                                                                          
    ]}

  // Render
  render(){
    return (
      <div className="App">
        <Header />
        <Hero />
        <Bio />
        <Projects 
          display={this.state.projectObject}
        />
      </div>
    );
  }
}

export default App;
