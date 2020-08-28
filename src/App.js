import React from 'react';
import Home from './Components/Home';
import Reading from './Components/Reading'
import './App.css';
import { render } from '@testing-library/react';

function App(){
  render()
  {
    return (
      <div className="App">
      <Home />
      <Reading />
      </div>
    );
  }
}

export default App
