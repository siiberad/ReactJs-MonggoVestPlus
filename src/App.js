import React, { Component } from 'react';
import './App.css';
import TrxPage from './components/homepage/TrxPage';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <div>
        {/* <HomePage/> */}
        <TrxPage/>
      </div>
    );
  }
}

export default App;
