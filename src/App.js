/* 
 * Created with React Create App
 * https://github.com/facebook/create-react-app
*/

import React, { Component } from "react";
// Todo: Set up CSS modules
import "./App.css";
import NavBar from './components/NavBar'
import PharmacyView from './components/PharmacyView/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-content">
          <PharmacyView />
        </div>
      </div>
    );
  }
}

export default App;
