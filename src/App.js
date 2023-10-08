import {Component} from 'react'
import LanguageContext from './context/LanguageContext'

import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturesSection from './components/FeaturesSection'

import './App.css'

class App extends Component {
  state = {activeLanguage: 'EN'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguage})
  }

  render() {
    const {activeLanguage} = this.state
    console.log(activeLanguage)

    return (
      <LanguageContext.Provider
        value={{
          activeLanguage,
          changeLanguage: this.changeLanguage,
        }}
      >
        <div className="main-container">
          <Header />
          <LandingSection />
          <FeaturesSection />
        </div>
      </LanguageContext.Provider>
    )
  }
}

export default App
