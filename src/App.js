import React from 'react';
import Header from './Components/Header'
import Quote from './Components/QuoteComponent'
import './App.css';
import { render } from '@testing-library/react';

function App(){
  render()
  {
    return (
      <div className="App">
        <Header />
        <Quote />
      </div>
    );
  }
}

export default App
