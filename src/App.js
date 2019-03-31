import React, { Component } from 'react';
import './App.css';
import MainButton from './components/MainButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainButton />
        </header>
      </div>
    );
  }
}

export default App;