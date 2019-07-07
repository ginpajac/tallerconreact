import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { render } from 'react-dom';
import Hello from './Hello';
import taller from ".taller";

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      escritores: [],
      frases: [],
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
      fetch("https://dataserverdaw.herokuapp.com/escritores/frases")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            frases: result.frases
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
  activateLasers(){
    console.log("clic")
  }
 /* createTable = (idc) => {
    const { error, isLoaded,escritores } = this.state;
    const str="";
    {this.frases.map(f =>{
      if(idc==={f.texto}.toString){
         str.append({f.texto})
      }

    })
    }
    console.log(str)
  }*/
  
  render() {
    const { error, isLoaded,escritores } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Cargando...</div>;
    } else {
      return (
        <div class='row' id="accordion">
          {escritores.map(f => (
            <div  class='card col-lg-2 mr-2 mb-1 laclass'>
              <div class='card-header' >
                <a class='card-link' data-toggle='collapse' href={f.id}  onclick="activateLasers()">
                  {f.nombre} 
                </a>
                
              </div>
              <div id={f.id} class='collapse' data-parent='#accordion'>njng
                </div> 
            </div>
            
          ))}
        </div>
        
      )
    }
  }
}

render(<App />, document.getElementById('root'));
