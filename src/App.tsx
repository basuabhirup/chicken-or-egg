import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Mascot from './components/mascot/Mascot'
import Options from './components/options/Options'
import Footer from './components/footer/Footer'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Mascot />
      <Options />
      <Footer />
    </div>
  )
}

export default App
