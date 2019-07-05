import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import taller from ".taller";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Ginger'
    
      
    };
  }

  render() {
    return (
      <div>
        <taller />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
