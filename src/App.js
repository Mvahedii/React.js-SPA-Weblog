import React, { Component } from 'react';
import './App.css';

import Nav from './Components/nav'
import Slider from './Components/slider'

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Slider />
      </div>
    );
  }
}

export default App;
