import React, { Component } from 'react';
import './App.css';
import {
  // fromEventSample,
  // ofSample,
  // createSample,
  // finalizeSample,
  fromPromiseSample,
} from './observant';

class App extends Component {
  render() {
    // createSample();
    // fromEventSample();
    // ofSample();
    // finalizeSample();
    fromPromiseSample();
    return <header className="Header">I'm trying to observe the ables.</header>;
  }
}

export default App;
