import React, { Component } from 'react';
import './App.css';
import './pages/HomePages';
import HomePages from './pages/HomePages';


class App extends Component {
  render() {
    return (
      <div>
        <HomePages/>
      </div>
    );
  }
}

export default App;
