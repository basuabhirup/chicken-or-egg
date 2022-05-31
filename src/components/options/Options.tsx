import React from "react"
import './Options.css'

const Options: React.FC = () => {
  return (
    <>
      <section className='options'>
        <button className='option'>Chicken</button>
        <p className='conjunction'>or</p>
        <button className='option'>Egg</button>
      </section>
      <p className='info-text'>Click to start the game, and end the lifelong dilemma</p>
    </>
  )
}

export default Options
