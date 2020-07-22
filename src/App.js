import React from 'react';
import './App.css';

// Components
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Bio from './Components/Bio/Bio';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Bio />
    </div>
  );
}

export default App;
