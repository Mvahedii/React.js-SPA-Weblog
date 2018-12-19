import React, { Component } from 'react';
import './App.css';

import Nav from './Components/nav'
import Slider from './Components/slider'
import Posts from './Components/posts'

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <Slider />
        <Posts />
      </div>
    );
  }
}

export default App;
