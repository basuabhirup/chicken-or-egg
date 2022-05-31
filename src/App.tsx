import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Mascot from './components/mascot/Mascot'
import Footer from './components/footer/Footer'

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Mascot />
      <Footer />
    </div>
  )
}

export default App
