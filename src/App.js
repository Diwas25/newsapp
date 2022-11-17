import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  c='John';
  render() {
    return (
      <div>
        {/* <h1 align="center">Welcome to {this.c}</h1> */}
        <NavBar/>
        <News/>
      </div>
    )
  }
}