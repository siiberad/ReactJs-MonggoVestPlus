import React, { Component } from 'react';
import './App.css';
import './pages/HomePages';
import HomePages from './pages/HomePages';
import TrxPage from './pages/TrxPage';

class App extends Component {
  render() {
    return (
      <div>
        <TrxPage/>
      </div>
    );
  }
}

export default App;
