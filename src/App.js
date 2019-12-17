/* 
 * Created with React Create App
 * https://github.com/facebook/create-react-app
*/

import React from "react"
import "./App.css"
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

const App = () => {
  window.history.pushState(null, null, '/pharmacies');
  
  return (
    <ThemeContext.Provider value={defaultTheme}>
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
