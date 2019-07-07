import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { render } from 'react-dom';
import Hello from './Hello';
import taller from ".taller";
import './style.css';
function asignar(){

}

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      escritores: [],
      frases: []
    };
  }

  componentDidMount() {
    fetch("https://dataserverdaw.herokuapp.com/escritores")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            escritores: result.escritores
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  
  render() {
    const { error, isLoaded,escritores } = this.state;
    var cnt=0;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul class='nav nav-tabs' role="tablist">
          {escritores.map(f => (
            <li  class='nav-item'>
              <a class='nav-link' data-toggle="tab" role="tab">
                {f.nombre}
              </a> 
            </li>
          ))}
        </ul>
      );
    }
  }
}

render(<App />, document.getElementById('root'));
