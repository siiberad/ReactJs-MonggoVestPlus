import React, { Component } from 'react';
import './App.css';
import TrxPage from './pages/TrxPage';
import HomePages from './pages/HomePages';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div>
          <HomePages/>
          {/* <TrxPage/> */}
      </div>
    );
  }
}

export default App;
