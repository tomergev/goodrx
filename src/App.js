/* 
 * Created with React Create App
 * https://github.com/facebook/create-react-app
*/

import React, { Component } from "react";
import "./App.css";

import NavBar from './components/NavBar'
import PharmacyViewContainer from './components/PharmacyView/PharmacyViewContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <header className="App-header">
          <h1 className="App-title">Welcome to GoodRx</h1>
        </header> */}
        <div className="App-content">
          <PharmacyViewContainer />
        </div>
      </div>
    );
  }
}

export default App;
