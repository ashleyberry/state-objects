import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // define our initial state
  state = {
    location: 'St Paul',
    adjective: 'beautiful',
    cohort: 'Tarjan',
    name: 'Ashley'
  }

  render() {
    return (
      <div>
        <h1>{this.state.cohort} Learns State with Objects</h1>

        <div>
          Hi {this.state.name}! It's a {this.state.adjective} day in {this.state.location}
        </div>
      </div>
    );
  }
}

export default App;
