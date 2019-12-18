/* 
 * Created with React Create App
 * https://github.com/facebook/create-react-app
*/

import React from "react"
import "./App.css"
import NavBar from './components/NavBar'
import PharmacyView from './components/PharmacyView/'

const themes = {
  default: {
    navBarColor: 'yellow',
    buttonColor: 'blue',
    pharmacyCardColor: '#ddd',
  },
  bonus: {
    navBarColor: '#47B8F9',
    buttonColor: '#DB7400',
    pharmacyCardColor: 'pink',
  },
}

export const ThemeContext = React.createContext(themes.bonus)

const App = () => {
  window.history.pushState(null, null, '/pharmacies');
  
  return (
    <ThemeContext.Provider value={themes['default' /* or 'bonus' */]}>
      <div className="App">
        <NavBar />
        <div className="App-content">
          <PharmacyView />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
