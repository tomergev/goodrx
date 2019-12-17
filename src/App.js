/* 
 * Created with React Create App
 * https://github.com/facebook/create-react-app
*/

import React, { Component } from "react";
// Todo: Set up CSS modules
import "./App.css";
import NavBar from './components/NavBar'
import PharmacyView from './components/PharmacyView/'

const defaultTheme = {
  navBarColor: 'yellow',
  buttonColor: 'blue',
  pharmacyCardColor: '#ddd',
}

const bonusTheme = {
  navBarColor: '#47B8F9',
  buttonColor: '#DB7400',
  pharmacyCardColor: 'pink',
}

export const ThemeContext = React.createContext(bonusTheme)

class App extends Component {
  render() {
    return (
      <ThemeContext.Provider value={defaultTheme}>
        <div className="App">
          <NavBar />
          <div className="App-content">
            <PharmacyView />
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
